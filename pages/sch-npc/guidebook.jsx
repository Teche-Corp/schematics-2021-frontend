import CustomLink from '@/components/CustomLink';
import { useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import Header from '@/components/Header';
import Seo from '@/components/Seo';

export default function GuidebookNPC() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Seo title='Schematics 2021' />
      <Header />
      <main className='bg-darkbg'>
        <article className='min-h-screen text-center text-white py-14 layout'>
          <h1>Schematics NPC Guidebook</h1>

          <div className='mt-8 space-y-8'>
            <div className='space-y-6' id='junior'>
              <h2>Junior</h2>
              <figure className='relative flex items-center justify-center w-full max-w-xs mx-auto sm:max-w-2xl'>
                {!loading ? (
                  <ImSpinner8 className='mb-2 text-7xl animate-spin' />
                ) : null}
                <iframe
                  className='absolute inset-0 w-full h-full'
                  src={`https://drive.google.com/file/d/1fXP6UEf9W4qTfIidlIfexQ2vyx1GIEAV/preview`}
                  onLoad={() => setLoading(false)}
                />
              </figure>
            </div>
            <div className='space-y-6' id='senior'>
              <h2>Senior</h2>
              <figure className='relative flex items-center justify-center w-full max-w-xs mx-auto sm:max-w-2xl'>
                {!loading ? (
                  <ImSpinner8 className='mb-2 text-7xl animate-spin' />
                ) : null}
                <iframe
                  className='absolute inset-0 w-full h-full'
                  src={`https://drive.google.com/file/d/19HESFYTigZzNyUnlWPZNlAK2KWbOg-pE/preview`}
                  onLoad={() => setLoading(false)}
                />
              </figure>
            </div>
          </div>

          <style jsx>{`
            figure {
              height: 28rem;
            }
            @media (min-width: 640px) {
              figure {
                height: 39rem;
              }
            }
          `}</style>
        </article>
      </main>
    </>
  );
}
