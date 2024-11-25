import DesktopNavigation from "./DesktopNavigation";
import MobileHeader from "./MobileHeader";
import { useRouter } from "next/router";
import useClientWidth from "@/hooks/useClientWidth";

export default function Layout({ children }) {
  const router = useRouter();
  const indexPage = router.pathname === "/";

  const isDesktop = useClientWidth({ operator: ">", number: 800 });

  return (
    <>
      {isDesktop ? <DesktopNavigation /> : !indexPage && <MobileHeader />}
      {children}
    </>
  );
}
