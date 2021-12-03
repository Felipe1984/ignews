import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "src/components/SubscribeButton";
import { stripe } from "src/services/strype";

import Woman from "public/images/woman.svg";

import styles from "./home.module.scss";

/*
 * Formas de fazer chamadas a Api no next:
 * Client side;
 * Server-side - permite indexação e popular a página com informações dinâmicas diferentes para cada usuário;
 * Static site generation - usado quando html é igual para todos que acessam a página;
 *
 */

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {


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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image
          src={Woman}
          alt="Girl coding"
        />
      </main>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => { 
  
  const price = await stripe.prices.retrieve('price_1K077lCreH6bI1TwvHXzMJ3m')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format( price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}

// export const getServerSideProps:GetServerSideProps = async () => { 
  
//   const price = await stripe.prices.retrieve('price_1K077lCreH6bI1TwvHXzMJ3m')

//   const product = {
//     priceId: price.id,
//     amount: new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format( price.unit_amount / 100),
//   }

//   return {
//     props: {
//       product
//     }
//   }
// }