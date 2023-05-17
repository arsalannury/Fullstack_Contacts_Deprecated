import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.headBox}>
        <Image src="/contact.png" width={400} height={400} alt="contact logo" />
      </div>
    </>
  );
}
