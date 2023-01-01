import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import UnstyledLink from '@/components/UnstyledLink';

export default function Custom404() {
  return (
    <>
      <Seo title='Page Not Found' />
      <Header />
      <main className='overflow-hidden'>
        <div className='relative min-h-screen-header bg-dark'>
          <div className='absolute flex flex-col sm:flex-row justify-center items-center w-full translate-y-1/2 bottom-1/2'>
            <div className='w-full sm:w-1/2 h-60 relative'>
              <img
                className='block m-auto absolute left-0 sm:left-auto right-0 object-contain h-52 sm:h-60'
                src='/image/error-icon.png'
                alt='error-icon'
              />
            </div>
            <div className='text-center sm:text-left w-full sm:w-1/2 text-white relative'>
              <h1 className='-mt-5'>Page not found</h1>
              <p className='mt-3 text-lg'>You can go back to the homepage</p>
              <UnstyledLink
                className='tracking-wider relative inline-block transition duration-200 bg-blue-600 mt-7 text-xl rounded-2xl font-extrabold hover:bg-blue-500 py-2 px-5'
                href='/'
              >
                Back To Home
              </UnstyledLink>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
