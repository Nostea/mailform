import { useEffect, useState } from "react";
import EmailForm from "../components/EmailForm";
import MessageFeed from "../components/MessageFeed";

const Home = () => {
  const [mails, setMails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/mails")
      .then((response) => response.json())
      .then((data) => setMails(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <EmailForm mails={mails} setMails={setMails} />
      <MessageFeed mails={mails} setMails={setMails} />
    </section>
  );
};

export default Home;
