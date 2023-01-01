import CustomLink from '@/components/CustomLink';
import { useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import Header from '@/components/Header';
import Seo from '@/components/Seo';

export default function FeedbackNSTPage() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Seo title='Feedback Schematics NST' />
      <Header />
      <main className='bg-darkbg'>
        <article className='min-h-screen text-center text-white py-14 layout'>
          <h1>Feedback Schematics NST</h1>

          <figure className='relative flex items-center justify-center max-w-xs mx-auto mt-8 sm:max-w-2xl'>
            {!loading ? (
              <ImSpinner8 className='mb-2 text-7xl animate-spin' />
            ) : null}
            <iframe
              className='absolute inset-0 w-full h-full'
              src={`https://docs.google.com/forms/d/e/1FAIpQLSdOmV-mLOd7Ubz0KU0__VX18f6kaMYLr00E8Ud3ByV4iF09hA/viewform`}
              onLoad={() => setLoading(false)}
            />
          </figure>

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
