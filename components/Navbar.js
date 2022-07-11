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
        <header>
        <a href="#" class="logo">HiitSayZ</a>
        <ul>
            <li><a href="#" id="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </header>

        </>
    )
}

export default Navbar
