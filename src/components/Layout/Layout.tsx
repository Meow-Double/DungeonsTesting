import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Suspense fallback={null}>
        <div className='container'>
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </>
  );
};
