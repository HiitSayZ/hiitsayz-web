import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children }) {
    return (
        <>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
        </head>
        
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
        
        </>
    )
}

export default Layout
