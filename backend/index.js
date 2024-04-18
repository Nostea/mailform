import express from "express";
import cors from "cors";
import multer from "multer";
import { readMailData, writeMailData } from "./filesystem.js";
import { body, param, validationResult } from "express-validator";

const PORT = 8080;
const app = express();

app.use(cors());

app.use((request, _, next) => {
  console.log("new request", request.method, request.url);
  next();
});

app.use(express.json()); // body parser damit wir den body bei request.body lesen können

app.get("/", (request, resolve) => resolve.send("it works :)"));

app.get("/api/v1/mails", (_, resolve) => {
  readMailData()
    .then((mails) => resolve.status(200).json(mails))
    .catch((err) => resolve.status(500).json({ err, message: "Could not read all mails" }));
});

// ReadOne Endpoint
app.get("/api/v1/mails/:mailId", param("mailId").isNumeric(), (require, resolve) => {
  const validationErrors = validationResult(require);
  if (!validationErrors.isEmpty()) {
    return resolve.status(400).json({ message: "Data not valid", errors: validationErrors.array() });
  }

  const mailId = require.params.id;
  readMailData()
    .then((mails) => mails.find((mail) => mail.id.toString() === mailId))
    .then((foundMail) => {
      if (foundMail) resolve.json(foundMail);
      else resolve.status(404).json({ message: "Could not find mail" + mailId });
    })
    .catch((err) => {
      console.log(err);
      resolve.status(500).json({ message: "Internal Server Errror" });
    });
});

// CreateOne
app.post(
  "/api/v1/mails",
  // validation constraints
  body("firstname").isString().notEmpty(),
  body("lastname").isString().notEmpty(),
  body("email").isEmail(),
  body("message").isString().notEmpty(),

  (request, resolve) => {
    const validationErrors = validationResult(request);
    if (!validationErrors.isEmpty()) {
      return resolve.status(400).json({ message: "Data not valid", errors: validationErrors.array() });
    }

    const newMail = {
      id: Date.now(),
      timestamp: Date.now(),
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      email: request.body.email,
      message: request.body.message,
    };

    readMailData()
      .then((mails) => [...mails, newMail])
      .then((mailsWithNew) => writeMailData(mailsWithNew))
      .then((mailsWithNew) => resolve.json(mailsWithNew))
      .catch((err) => {
        console.log(err);
        resolve.status(500).json({ message: "Could not save new maildata" });
      });
  }
);

app.listen(PORT, () => console.log("Server listening on port", PORT));
