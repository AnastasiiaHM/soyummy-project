import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

// import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { BiUpArrow } from 'react-icons/bi';
// import { Button } from './Layout.styled';

const Layout = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (currentScrollPos > 200) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      {/* {isVisible && (
        <Button type="button" className="icon totop" onClick={scrollToTop}>
          <BiUpArrow />
        </Button>
      )} */}
    </div>
  );
};

export default Layout;
