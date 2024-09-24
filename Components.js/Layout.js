import MainNavigation from "./Navigation";
import Header from "./MobileHeader";
import { useRouter } from "next/router";


export default function Layout({children}) {
  const router = useRouter();
  const indexPage = router.pathname === "/";
    return(
        <>
         <MainNavigation indexPage={indexPage}/>
        {!indexPage && <Header />}
        {children}
 
        </>
    )
}