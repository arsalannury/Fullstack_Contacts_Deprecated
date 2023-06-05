import Image from "next/image";
import "../globals.css";
import styles from "../page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contacts",
  description: "Generated by create next app",
};

export default function DetailContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.headBox}>
          <Image
            src="/contact.png"
            width={200}
            height={200}
            alt="contact logo"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="lg:w-7/12 w-full bg-slate-50 p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
