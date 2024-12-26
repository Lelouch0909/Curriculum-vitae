import React from "react";

function Contact({ logo: Logo, text }) {
  return (
    <a
      href={text}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 hover:opacity-70 p-2 rounded-lg transition-all cursor-pointer w-full bg-custom-gray"
    >
      <div className="flex items-center justify-center min-w-[30px] h-[30px] rounded-full overflow-hidden">
        <Logo className="text-2xl" />
      </div>
      <div className="text-sm truncate">{text}</div>
    </a>
  );
}

export default Contact;
