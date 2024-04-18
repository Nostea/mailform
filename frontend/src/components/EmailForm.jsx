const EmailForm = () => {
  return (
    <div className=" bg-slate-100 py-4 px-4">
      <form className="flex flex-col justify-start">
        <input type="text" name="firstname" id="firstname" placeholder="First name" className=" w-60 mb-2 p-2 rounded" />
        <input type="text" name="lastname" id="lastname" placeholder="Last name" className="w-60 mb-2 p-2 rounded" />
        <input type="email" name="email" id="email" placeholder="email@gmail.com" className="w-60 mb-2 p-2 rounded" />
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message" className=" w-3/4 mb-4 p-4 rounded"></textarea>
        <button type="submit" className="bg-white border-2 w-20 p-1 rounded mb-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
