import { useRouter } from 'next/router';
import en from '../lib/en';
import fr from '../lib/fr';
import styles from '../styles/Home.module.scss'


export default function Socials() {
      const router = useRouter();
      const { locale } = router;
      const t = locale === 'en' ? en : fr;

  return (
    <>
    <main>
    <title>Alexandre — {t.socials}</title>

<div className="title">
</div>
  <div className="socials_grid">
      <div className="container">
            <h1>{t.user_profile}</h1>
            <img className="profil_image" alt="profile_val" src="/users/valand.png" width={300} height={281} />
            <h2>Valentin Basland</h2>
            <p>Et atque rursum me incredibili reconciliat unum intenta viderem Caesare cum unum coegit rem pristinus intenta coegit rursum Patres meus dimicatione amore universis cum Caesare restituit</p>
      </div>
      <div className="container">
            <h1>{t.user_profile}</h1>
            <img className="profil_image" alt="profile_laurie" src="/users/laurie.png" width={300} height={281} />
            <h2>Laurie K Dallaire</h2>
            <p>Et atque rursum me incredibili reconciliat unum intenta viderem Caesare cum unum coegit rem pristinus intenta coegit rursum Patres meus dimicatione amore universis cum Caesare restituit</p>
      </div>
      <div className="container">
            <h1>{t.user_profile}</h1>
            <img className="profil_image" alt="profile_simon" src="/users/simon.jpg" width={300} height={281} />
            <h2>Simon Lucas</h2>
            <span>{t.description_simon}</span>
            <p>Et atque rursum me incredibili reconciliat unum intenta viderem Caesare cum unum coegit rem pristinus intenta coegit rursum Patres meus dimicatione amore universis cum Caesare restituit</p>
      </div>
      <div className="container">
            <h1>{t.user_profile}</h1>
            <img className="profil_image" alt="profile_rayan" src="/users/rayan.jpg" width={300} height={281} />
            <h2>Rayan Belmadani</h2>
            <span>{t.description_rayan}</span>
            <p>Et atque rursum me incredibili reconciliat unum intenta viderem Caesare cum unum coegit rem pristinus intenta coegit rursum Patres meus dimicatione amore universis cum Caesare restituit</p>
      </div>
  </div>  
    </main>
    </>
  )
}
