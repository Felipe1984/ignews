import { SignInButton } from 'src/components/SignInButton';
import styles from './styles.module.scss';
import Image from 'next/image';

import Logo from "public/images/logo.svg";
import { ActiveLink } from '../ActiveLink';

export function Header() {

   return (
      <header className={styles.headerContainer}>
         <div className={styles.headerContent}>
            <Image
               src={Logo}
               alt="ig.news"
            />
            <nav>
               <ActiveLink activeClassName={styles.active} href="/">
                  <a>Home</a>
               </ActiveLink>
               <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
                  <a>Posts</a>
               </ActiveLink>
            </nav>

            <SignInButton />
         </div>
      </header>
   );
}