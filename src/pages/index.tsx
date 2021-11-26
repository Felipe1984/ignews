import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "src/components/SubscribeButton";

import Woman from "public/images/woman.svg";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head> 
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>&#128079; Hey, welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get access to all publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <Image
          src={Woman}
          alt="Girl coding"
        />
      </main>
    </>
  )
}
