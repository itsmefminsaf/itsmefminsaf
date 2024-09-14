import Image from "next/image";
import React from "react";
import contacts from "../data/Contact.json";

const Contact = () => {
  return (
    <div className="grid-item row-span-2">
      <h4 className="item-title">Contact me</h4>
      <ul className="flex gap-3 flex-wrap justify-stretch items-stretch">
        {contacts?.map((contact, i) => {
          return (
            <a href={contact.profile} target="_blank">
              <li key={i} className="contact">
                <Image
                  src={contact.favicon}
                  width={20}
                  height={20}
                  alt={`${contact.name} favicon`}
                />
                {contact.name}
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Contact;
