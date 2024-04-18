import { useEffect, useState } from "react";
import Mail from "./Mail";

const MessageFeed = ({ mails, setMails }) => {
  return (
    <section className="py-4 px-2">
      <h2 className="text-2xl pb-1">Your Conversation</h2>
      <div className="grid grid-cols-1 gap-8 px-6">
        {mails ? (
          mails.map((item, index) => (
            <div key={index}>
              <Mail
                firstname={item.firstname}
                lastname={item.lastname}
                email={item.email}
                timestamp={item.timestamp}
                message={item.message}
                imgName={item.attachmentFile}
              />
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
