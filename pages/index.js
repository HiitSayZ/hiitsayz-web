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

      <div className="title">
        <h1>Alexandre Ladouceur</h1>
        <h2>{t.subtitle}</h2>
      </div>
      <div className="socials">
      <a target="_blank" href="https://twitter.com/HiitSayZ"><Image src="/twitter.png" width={46} height={46} /></a>
      <a target="_blank" href="https://www.linkedin.com/in/alexandre-ladouceur/"><Image src="/linkedin.png" width={46} height={46} /></a>
      <a target="_blank" href="https://www.facebook.com/alexandreladou"><Image src="/facebook.png" width={34} height={34} /></a>
      </div>

      <div className="grid">
          <div className="container_life">
              <h1>{t.lifeexperience}</h1>
              <div class="carousel-container">
                <div class="carousel">
                  <div class="image-one"></div>
                  <div class="image-two"></div>
                  <div class="image-three"></div>
                  <div class="image-four"></div>
                </div>
              </div>
          </div>
  
          <div className="container">
                <h1>{t.user_profile}</h1>
                <img className="profil_image" src="/alex.png" width={300} height={281} />
                <h2>Alexandre Ladouceur</h2>
                <span>{t.alex_title}</span>
                <p>{t.alex_description}</p>
          </div>
      </div>

      <div className="line">
        
      </div>

      <div className="container_coding">
              <h1>{t.codingexperience}</h1>
              <div className="proglangs">
                <div className="proglang">
                  <h2>Java</h2>
                  <img src="proglanguages/java.png" alt="Java" width={100}/>
                </div>
                <div className="proglang">
                  <h2>Next.JS</h2>
                  <img src="proglanguages/nextjs.png" alt="Next.JS" width={120}/>
                </div>
                <div className="proglang">
                  <h2>C# (CSharp)</h2>
                  <img src="proglanguages/csharp.png" alt="C#" width={150}/>
                </div>
                <div className="proglang">
                  <h2>Angular</h2>
                  <img src="proglanguages/angular.png" alt="Angular" width={100}/>
                </div>
                <div className="proglang">
                  <h2>JavaScript</h2>
                  <img src="proglanguages/javascript.png" alt="JS" width={100}/>
                </div>
                <div className="proglang">
                  <h2>HTML, CSS</h2>
                  <img src="proglanguages/html.png" alt="HTML" width={180}/>
                </div>
                <div className="proglang">
                  <h2>SCSS, SASS</h2>
                  <img src="proglanguages/sass.png" alt="SASS" width={100}/>
                </div>
              </div>
          </div>

      
      
    </main>
  )
}
