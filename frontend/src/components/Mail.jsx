const Mail = ({ firstname, lastname, email, timestamp, message, imgName }) => {
  //! conditional rendering with &&.   If imgName is null or "" it won't be rendered
  return (
    <article>
      <div className="flex flex-row content-center justify-between pb-1">
        <div>
          <p className="inline pr-8 text-lg font-medium">
            {firstname} {lastname}
          </p>
          <p className="inline pr-2 text-lg">{email}</p>
        </div>
        <p className="inline text-sm text-slate-400">{timestamp}</p>
      </div>
      <p>{message}</p>

      {imgName && <img src={`http://localhost:8080/${imgName}`} alt="Attachment Image" width={600} />}
    </article>
  );
};

export default Mail;
