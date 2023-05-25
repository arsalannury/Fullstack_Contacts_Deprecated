import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.headBox}>
        <Image src="/contact.png" width={200} height={200} alt="contact logo" />
      </div>
      <div className='w-full'>
        <div className='w-9/12'>
          fsdfdfdf
         </div>
      </div>
    </>
  );
}
