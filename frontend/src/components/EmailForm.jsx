import { useEffect, useState } from "react";

const EmailForm = ({ mails, setMails }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState();

  const addMail = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("attachment", attachment, attachment.filename);

    fetch(`http://localhost:8080/api/v1/files/upload`, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((data) => {
        const newEntry = {
          firstname: firstname,
          lastname: lastname,
          email: email,
          message: message,
          attachmentFile: data.attachmentFile,
        };
        return newEntry;
      })
      .then((newEntry) =>
        fetch(`http://localhost:8080/api/v1/mails`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEntry),
        })
      )
      .then((response) => response.json())
      .then((data) => {
        setMails(data);
        setMessage(""), setFirstname(""), setLastname(""), setEmail(""), setAttachment([]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" bg-slate-100 py-4 px-4">
      <form onSubmit={addMail} className="flex flex-col justify-start">
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className=" w-60 mb-2 p-2 rounded"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="w-60 mb-2 p-2 rounded"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-60 mb-2 p-2 rounded"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=" w-3/4 mb-4 p-4 rounded"
        ></textarea>
        <input type="file" onChange={(e) => setAttachment(e.target.files[0])} placeholder="attachment" className="mb-2 p-2 rounded" />
        <button type="submit" className="bg-white border-2 w-20 p-1 rounded mb-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
