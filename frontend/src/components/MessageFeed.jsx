import { useEffect, useState } from "react";
import Mail from "./Mail";

const MessageFeed = () => {
  const [mails, setMails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/mails")
      .then((response) => response.json())
      .then((data) => setMails(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-4 px-2">
      <h2 className="text-2xl pb-4">Your Conversation</h2>
      <div className="grid grid-cols-1 gap-6 px-6">
        {mails ? (
          mails.map((item, index) => (
            <div key={index}>
              <Mail firstname={item.firstname} lastname={item.lastname} email={item.email} timestamp={item.timestamp} message={item.message} />
            </div>
          ))
        ) : (
          <p>Laden...</p>
        )}
      </div>
    </section>
  );
};

export default MessageFeed;
