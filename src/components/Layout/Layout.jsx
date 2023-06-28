import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { IoIosArrowDropup } from 'react-icons/io';
import { LayoutWrapper, WrapperSection, Button } from './Layout.styled';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import { lightTheme, darkTheme } from 'components/colors';

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <LayoutWrapper>
      {isLoggedIn && <Header />}
      <WrapperSection>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapperSection>
      {isLoggedIn && <Footer />}
      {isVisible && (
        <Button type="button" className="icon totop" onClick={scrollToTop}>
          <IoIosArrowDropup />
        </Button>
      )}
    </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
