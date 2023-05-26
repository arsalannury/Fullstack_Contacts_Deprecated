import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="search contacts"
          className="focus:shadow-md
               p-2 m-2 lg:w-1/3 md:w-2/3 w-full
               outline-none
               border border-slate-400
               rounded-3xl indent-5 text-sm placeholder:text-sm text-slate-600"
        />
        <button className="outline-none rounded px-4 py-2 bg-gray-800 text-white shadow-lg font-bold">
          +
        </button>
      </div>
    </>
  );
}
