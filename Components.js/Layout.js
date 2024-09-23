import MainNavigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({children}) {
    return(
        <>
        <MainNavigation />
        {children}
      {/*   <Footer /> */}
        </>
    )
}