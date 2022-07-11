import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import en from '../lib/en';
import fr from '../lib/fr';
import styles from '../styles/Home.module.scss'

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  let stars = document.getElementById('stars');
  let moon = document.getElementById('moon');
  let mountains_behind = document.getElementById('mountains_behind');
  //let mountains_front = document.getElementById('mountains_front');
  let name = document.getElementById('name');
  let explore = document.getElementById('explore');
  let header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    name.style.marginRight = value * 3 + 'px';
    name.style.marginTop = value * 1.5 + 'px';
    explore.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
  })

  return (
    <main>
      <Head>
      <title>Alexandre Ladouceur</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      </Head>

      <body>
        <section>
        <img src="/images/stars.png" id="stars" alt="stars" />
        <img src="/images/moon.png" id="moon" alt="moon" />
        <img
          src="/images/mountains_behind.png"
          id="mountains_behind"
          alt="mountains_behind"
        />
        <h2 id="name">HiitSayZ</h2>
        <a href="#bio" id="explore">Explore</a>
        <img
          src="/images/mountains_front.png"
          id="mountains_front"
          alt="mountains_front"
        />
        </section>
        <div class="sec">
          <h2 id="bio">Ma Biographie</h2>
          <p>asdasdasdasd</p>
        
        </div>
        
      </body>

      
      
    </main>
  )
}
