import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children }) {
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
        </Head>
        
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
        
        </>
    )
}

export default Layout
