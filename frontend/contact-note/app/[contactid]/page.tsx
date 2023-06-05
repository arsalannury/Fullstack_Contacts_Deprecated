import { BaseURL } from "@/BaseURL";
import Image from "next/image";
import React from "react";

export const revalidate = 10;

const ContactDetail = async (props: any) => {
  const detailData = await BaseURL.get(`contacts/${props.params.contactid}`);

  return (
    <>
      <div>
        <Image
          width={100}
          height={100}
          alt="contact photo"
          src={detailData.data.data.background}
        />
        <div>
          <span>{detailData.data.data.number}</span>
          <span>{detailData.data.data.name}</span>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
