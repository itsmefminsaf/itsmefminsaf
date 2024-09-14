import Image from "next/image";
import React from "react";
import contacts from "../data/Contact.json";

const Contact = () => {
  return (
    <div className="grid-item h-fit">
      <h4 className="item-title">Find me</h4>
      <ul className="flex gap-3 flex-wrap flex-grow">
        {contacts?.map((contact, i) => {
          return (
            <a href={contact.profile} className="contact" key={i}>
              <Image
                src={contact.favicon}
                width={20}
                height={20}
                alt={`${contact.name} favicon`}
                className="inline-block"
              />
              <p>{contact.name}</p>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Contact;
