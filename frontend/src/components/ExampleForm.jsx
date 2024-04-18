import { useState } from "react";

const ExampleForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstname, lastname, email, message });
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-center mt-8 mb-10 guestbook__heading text-5xl">Before You Go</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
        <input
          className="border-[1.5px] w-6/12 rounded p-1"
          type="text"
          name="firstname"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          className="border-[1.5px] w-6/12 rounded p-1"
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          className="border-[1.5px] w-6/12 rounded p-1"
          type="email"
          name="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-[1.5px] w-6/12 rounded p-1 h-20 mb-2"
          type="text"
          name="message"
          placeholder="Leave a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="border-[1.5px] w-6/12 p-2 rounded-full border-none bg-[#B2E6D1] text-white font-bold" type="submit">
          Add message
        </button>
      </form>
    </div>
  );
};

export default ExampleForm;
