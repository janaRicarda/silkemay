import MobileHeader from "./MobileHeader";
import { useRouter } from "next/router";
import useClientWidth from "@/hooks/useClientWidth";
import styled from "styled-components";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

export default function Layout({ children }) {
  const router = useRouter();
  const indexPage = router.pathname === "/";

  const isDesktop = useClientWidth({ operator: ">", number: 800 });
  const isMobile = !isDesktop;

  return (
    <>
      <PageWrapper>
        {isDesktop ? (
          <StyledNavSection>
            <MainNavigation />
            <FooterWrapper>
              <Footer brightFont={true} />
            </FooterWrapper>
          </StyledNavSection>
        ) : (
          !indexPage && (
            <>
              <MobileHeader />
            </>
          )
        )}
        {children}
        {isMobile && (
          <FooterWrapper>
            <Footer brightFont={indexPage ? true : false} />
          </FooterWrapper>
        )}
      </PageWrapper>
    </>
  );
}

//* to position footer always at the bottom of the page
const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const StyledNavSection = styled.section`
  height: 100vh;
  background: var(--background);
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  width: 400px;

  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 1000px) {
    width: 450px;
  }
  @media (min-width: 1200px) {
    width: 500px;
  }
`;
