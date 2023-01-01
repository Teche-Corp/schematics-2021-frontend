import React, { useState } from 'react';
import { sponsors } from '@/data/sponsorship.js';
import UnstyledLink from './UnstyledLink';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export default function Sponsorship() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');
  const [currentLink, setCurrentLink] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentSponsor, setCurrentSponsor] = useState('gold');

  const handleSponsorClick = (sponsor) => {
    setCurrentImage(sponsor.image);
    setCurrentVideo(sponsor.video);
    setCurrentLink(sponsor.website);
    setCurrentName(sponsor.name);
    setCurrentDescription(sponsor.description);
    setCurrentSponsor(sponsor.sponsor);
    setIsOpen(true);
  };

  return (
    <>
      <section
        className='px-10 py-16 space-y-24 text-white bg-top bg-cover bg-dark md:space-y-48 md:pt-40 md:pb-40 md:px-20'
        style={{
          backgroundImage: 'url(/image/sponsor-bg.png)',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='flex flex-col mx-auto space-y-12 max-w-7xl'>
          <div className='relative z-10 flex flex-col items-center justify-center flex-1 space-y-6 md:space-y-10 md:flex-2'>
            <h2 className='relative text-3xl text-center font-secondary sm:text-6xl'>
              Sponsor and Media Partner
            </h2>
            <hr
              className='w-1/4 py-1 mt-4 border-t-0 rounded-md'
              style={{
                background:
                  'linear-gradient(90deg, #C93D45 0%, #FCCC00 29.69%, #18A488 65.1%, #008AD0 100%)',
              }}
            />
          </div>
          <div className='flex flex-col items-center justify-center flex-1 mx-auto space-y-6 select-none md:space-y-10 max-w-7xl md:flex-2'>
            <div className='flex flex-col flex-wrap items-center justify-center space-x-6 space-y-6 sm:items-end sm:flex-row'>
              {sponsors[0].goldSponsors.map((e) => (
                <button
                  onClick={() => handleSponsorClick({ ...e, sponsor: 'gold' })}
                  key={e.name}
                >
                  <img
                    src={e.image}
                    alt={e.name}
                    className='max-h-[20vh] block w-auto'
                  />
                </button>
              ))}
            </div>
            <div className='flex flex-col flex-wrap items-center justify-center space-x-6 space-y-6 sm:items-end sm:flex-row'>
              {sponsors[1].silverSponsors.map((e) => (
                <button
                  onClick={() =>
                    handleSponsorClick({ ...e, sponsor: 'silver' })
                  }
                  key={e.name}
                >
                  <img
                    src={e.image}
                    alt={e.name}
                    className='max-h-[12vh] object-cover block w-auto'
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Sponsorship Pop Up */}
      {isOpen && (
        <div
          className='
          fixed top-0 right-0 left-0 bottom-0 bg-[#333] opacity-70 z-50'
          onClick={() => setIsOpen(false)}
        />
      )}
      {isOpen && (
        <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 bg-[#242524] text-white w-[80vw] lg:w-[60vw] py-5 lg:py-10 px-5 lg:px-10'>
          <div className='flex flex-col items-center justify-center w-full gap-5 lg:flex-row'>
            <div className='flex flex-col gap-4 lg:w-1/2'>
              <p className='text-sm'>
                SPONSOR{' '}
                <span className='font-bold uppercase'>{currentSponsor}</span>
              </p>
              <div className='flex items-center justify-start gap-5'>
                <img
                  src={currentImage}
                  alt='logo gm'
                  className='w-20 rounded-full'
                />
                <p className='text-xl font-bold xl:text-3xl'>{currentName}</p>
              </div>
              <hr className='opacity-50' />
              <p className='text-sm'>{currentDescription}</p>
            </div>
            <div className='flex flex-col lg:w-1/2'>
              <figure>
                <LiteYouTubeEmbed
                  id={currentVideo}
                  poster='hqdefault'
                  noCookie={true}
                />
              </figure>
              <UnstyledLink
                href={currentLink}
                className='text-black px-2 w-full bg-white h-[20%] flex flex-col justify-center items-center'
              >
                KUNJUNGI WEBSITE RESMI
              </UnstyledLink>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className='absolute text-[#d1d1d1] hover:underline top-3 right-7'
          >
            TUTUP
          </button>
        </div>
      )}
    </>
  );
}
