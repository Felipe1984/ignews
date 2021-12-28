import { useSession, signIn } from "next-auth/react";
import styles from "./styles.module.scss";
import { api } from 'src/services/api';
import { getStripeJs } from "src/services/strype-js";
import { useRouter } from "next/router";

/*
 *
 *Locais onde podemos escrever credenciais que não ficarão acessíveis aos usuários
 *
 * getServerSideProps (SSR)
 * getStaticProps (SSG)
 * API routes
 * 
 * O melhor local é API routes
 *
 */

interface SubscribeButtonProps {
   priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
   const { data: session } = useSession();
   const router = useRouter()

   async function handleSubscribe() {
      if(!session) {
         signIn('github');
         return;
      }

      if(session.activeSubscription) {
         router.push('/posts');
         return;
      }

      try {
         const response = await api.post('/subscribe')

         const { sessionId } = response.data;
         
         const stripe = await getStripeJs();
         await stripe.redirectToCheckout({ sessionId })
      } catch(err) {
         alert(err.message);
      }
   }

   return (
      <button
         type="button"
         className={styles.subscribeButton}
         onClick={handleSubscribe}
      >
         Subscribe now
      </button>
   );
}