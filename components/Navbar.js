import Link from "next/link"
import { useRouter } from "next/router"
import en from "../lib/en";
import fr from "../lib/fr";

function Navbar() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        const path = locale + router.pathname;
        router.replace(path, path, {locale});
    }

    return (
        <>
        <div className="navbar">
            <div className="choix">
                <Link href="/"><p>{t.about_me}</p></Link>
                <Link href="/socials"><p>{t.socials}</p></Link>
            </div>

            <div className="language">
                <select
                    onChange={changeLanguage}
                    defaultValue={locale}>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select> 
            </div>
        </div>

        </>
    )
}

export default Navbar
