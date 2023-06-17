import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 10;

const ContactDetail = async (props: any) => {
   const data = await fetch(
     `http://127.0.0.1:8000/contacts/${props.params.contactid}`,
     {
       next: { revalidate: 10 },
     }
   );
   const result = await data.json();


  return (
    <>
      <div className="relative">
        <Image
          width={100}
          height={100}
          alt="contact photo"
          src={result.data.background}
        />
        <div className="mt-5">
          <div>
            <span>phone Number</span>:
            <span className="ml-3">{result.data.number}</span>
          </div>
          <div>
            <span>full Name</span>:
            <span className="ml-3">{result.data.name}</span>
          </div>
        </div>
        <Link
          href={{
            pathname: "/create-contact",
            query: { contactId: result.data._id },
          }}
        >
          <Image
            className="absolute top-0 right-0"
            src="/edit.png"
            width={30}
            height={30}
            alt="edit image"
          />
        </Link>
      </div>
    </>
  );
};

export default ContactDetail;
