const Mail = ({ firstname, lastname, email, timestamp, message }) => {
  return (
    <article>
      <div className="flex flex-row content-center justify-between pb-2">
        <div>
          <p className="inline pr-8 text-lg font-medium">
            {firstname} {lastname}
          </p>
          <p className="inline pr-2 text-lg">{email}</p>
        </div>
        <p className="inline text-lg text-slate-400">{timestamp}</p>
      </div>
      <p>{message}</p>
    </article>
  );
};

export default Mail;
