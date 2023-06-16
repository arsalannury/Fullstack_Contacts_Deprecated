import Image from "next/image";
import Link from "next/link";
import { BaseURL } from "@/BaseURL";

export const revalidate = 10;

export default async function Home() {
  const data = await BaseURL.get("/contacts");

  return (
    <>
      <div className="flex items-center justify-between">
        {/* <input
          type="text"
          placeholder="search contacts"
          className="focus:shadow-md
               p-2 m-2 lg:w-1/3 md:w-2/3 w-full
               outline-none
               border border-slate-400
               rounded-3xl indent-5 text-sm placeholder:text-sm text-slate-600"
        /> */}
        <Link href={"/create-contact"}>
          <Image
            alt="add contact"
            src="/add-contact.png"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div>
        {data?.data?.data.length > 0 ? (
          data?.data?.data.map((cont: any, index: number) => {
            return (
              <>
                <Link href={`/${cont._id}`}>
                  <div
                    className="
                  hover:scale-105 hover:shadow-2xl hover:border-b-[1px] border-purple-950 transition-all
                  flex items-center justify-start xl:w-6/12 w-12/12 m-8 shadow-lg p-4 cursor-pointer rounded-lg"
                  >
                    <Image
                      src={cont.background}
                      width={60}
                      height={60}
                      alt="contact photo"
                      placeholder="blur"
                      blurDataURL={cont.background}
                    />
                    <p className="text-xs ml-6 font-bold">
                      {cont.name}
                    </p>
                    <p className="text-xs p-2 rounded-lg bg-purple-950 text-white ml-auto">
                      {cont.saveDevice}
                    </p>
                  </div>
                </Link>
              </>
            );
          })
        ) : (
          <p className="text-center max-sm:m-2 max-[2000px]:m-64 text-md">
            there are no contacts yet
          </p>
        )}
      </div>
    </>
  );
}
