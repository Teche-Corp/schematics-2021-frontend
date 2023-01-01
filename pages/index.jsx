import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import TextShadow from '@/components/TextShadow';
import UnstyledLink from '@/components/UnstyledLink';
import SchemaStoreSlider from '@/components/SchemaStoreSlider';
import ScrollDownArrow from '@/components/ScrollDown';
import Seo from '@/components/Seo';
import Sponsorship from '@/components/Sponsorship';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const [modalCookie, setModalCookie] = useCookies(['modal-status']);

  /* Set expire time to 10 minutes */
  const time = new Date();
  time.setTime(time.getTime() + 60 * 3 * 1000);

  const currentDate = new Date();
  const modalExpireDate = new Date('2021-10-31');

  useEffect(() => {
    if (
      (modalCookie['modal-status'] === 'not-visited' ||
        !modalCookie['modal-status']) &&
      currentDate < modalExpireDate
    ) {
      setModalCookie('modal-status', 'not-visited', {
        path: '/',
        expires: time,
      });

      setOpenModal(true);
    }
  }, [modalCookie['modal-status']]);

  return (
    <CookiesProvider>
      <Header />
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
          <div className='flex flex-row justify-between pb-2 mb-3 bg-white border-b-2 border-gray-200 rounded-tl-lg rounded-tr-lg'>
            <p className='p-1 font-semibold text-gray-800'>Schematics REEVA</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenModal(false);

                setModalCookie('modal-status', 'visited', {
                  path: '/',
                  expires: time,
                });
              }}
              className='p-1 rounded-full hover:text-gray-60'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <UnstyledLink href='/schematics-reeva'>
            <img
              src='/image/reeva/modal-sch-reeva.jpg'
              className='border border-gray-600 rounded-md'
              alt='Promo spesial kemerdekaan - Schematics NLC'
            />
          </UnstyledLink>
        </div>
      </Modal>

      <div className='bg-white'>
        <div className='relative overflow-hidden'>
          <main>
            <Seo title='Schematics 2021 | Reviving the Soul of Technology through Art and Logic.' />
            {/* Hero section */}
            <div className='relative'>
              <div>
                <div
                  style={{
                    backgroundImage: 'url(/image/index-banner.png)',
                    backgroundRepeat: 'no-repeat',
                  }}
                  className='relative bg-center bg-cover min-h-screen-header sm:overflow-hidden'
                >
                  <div className='relative flex flex-col items-start justify-center mx-auto min-h-screen-header max-w-7xl px-7 sm:px-6 lg:px-8'>
                    <h1 className='pb-2 text-5xl font-extrabold tracking-tight text-left sm:pb-0 lg:text-6xl'>
                      <span className='block font-bold text-gray-900'>
                        <span
                          style={{
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                          }}
                        >
                          Schematics
                        </span>
                        <br /> 2021
                      </span>
                    </h1>
                    <hr
                      className='w-full max-w-[250px] py-1 mt-4 border-t-0 rounded-md md:max-w-sm'
                      style={{
                        background:
                          'linear-gradient(90deg, #C93D45 0%, #FCCC00 29.69%, #18A488 65.1%, #008AD0 100%)',
                      }}
                    />
                    <p className='mt-6 text-xl text-left text-gray-800 sm:max-w-3xl'>
                      <TextShadow text='Reviving ' />
                      the <TextShadow text='Soul ' />
                      of <TextShadow text='Technology ' />
                      <br />
                      through <TextShadow text='Art ' />
                      and <TextShadow text='Logic' />
                    </p>
                    <div className='mt-16 sm:max-w-none sm:flex sm:justify-items-end'>
                      <div>
                        <a
                          href='https://schematics.its.ac.id/dashboard'
                          className='flex items-center justify-center px-4 py-3 text-base font-bold text-black bg-white border border-transparent shadow-md rounded-3xl sm:px-8'
                        >
                          Daftar Event
                        </a>
                      </div>
                    </div>
                    <ScrollDownArrow />
                  </div>
                </div>
              </div>
            </div>
            <div className='px-10 py-16 space-y-24 text-white bg-dark md:space-y-48 md:pt-40 md:pb-18 md:px-20 '>
              <div className='flex flex-col mx-auto space-y-12 max-w-7xl md:flex-row md:space-x-10'>
                <img
                  src='/image/black-bg.png'
                  className='absolute left-0 z-0 w-auto select-none md:w-1/2'
                  alt=''
                />
                <div className='relative z-10 flex flex-col items-start justify-center flex-1 space-y-6 md:space-y-10 md:flex-2'>
                  <img
                    className='absolute w-8 h-auto p-0 m-0 -translate-y-1/2 select-none md:w-12 -top-12 md:-top-20 left-40 md:left-32'
                    src='/image/supertoroid-black.png'
                    alt=''
                  />
                  <h2 className='relative text-3xl sm:text-6xl'>
                    <img
                      className='absolute hidden h-auto p-0 m-0 -translate-x-1/2 select-none md:block top-10 -left-20 w-7 md:w-20'
                      src='/image/cylinder-black.png'
                      alt=''
                    />
                    <span className='font-secondary'>About</span> <br />{' '}
                    Schematics
                  </h2>
                  <hr
                    className='w-2/5 py-1 mt-4 border-t-0 rounded-md'
                    style={{
                      background:
                        'linear-gradient(90deg, #C93D45 0%, #FCCC00 29.69%, #18A488 65.1%, #008AD0 100%)',
                    }}
                  />
                  <p className='relative text-lg md:text-xl'>
                    Schematics adalah salah satu event terbesar ITS yang
                    diselenggarakan oleh mahasiswa Teknik Informatika ITS.
                    Schematics merupakan event yang berfokus pada kompetisi
                    pemrograman dan logika, serta memperkenalkan perkembangan
                    teknologi kepada masyarakat luas melalui subevent-subevent
                    Schematics.
                    <img
                      className='absolute hidden h-auto p-0 m-0 -translate-x-1/2 select-none md:block -left-16 w-7 md:w-20'
                      src='/image/pill-black.png'
                      alt=''
                    />
                  </p>
                  <Link href='/about'>
                    <a className='flex items-center justify-center px-4 py-3 text-base font-medium text-black bg-white border border-transparent shadow-md rounded-3xl sm:px-8'>
                      Baca Selengkapnya
                    </a>
                  </Link>
                </div>
                <div className='relative flex items-center justify-center flex-1 md:flex-6'>
                  <img
                    className='absolute w-12 h-auto p-0 m-0 select-none md:w-20 -top-20 -right-4'
                    src='/image/cone-black.png'
                    alt=''
                  />
                  <img
                    className='absolute hidden w-12 h-auto p-0 m-0 select-none md:block md:w-20 -right-32'
                    src='/image/cube-black.png'
                    alt=''
                  />
                  <img
                    className='absolute w-12 h-auto p-0 m-0 select-none md:w-20 -bottom-28 md:-bottom-12 -right-12 md:-right-20'
                    src='/image/roundcube-black.png'
                    alt=''
                  />
                  <img
                    alt='Schematics 2021'
                    className='z-10 object-contain select-none max-h-auto'
                    src='/image/schematics-2021.png'
                  />
                </div>
              </div>
              <div className='flex flex-col items-center mx-auto max-w-7xl'>
                <h2 className='text-xl md:text-3xl'>Introducing</h2>
                <h3 className='text-3xl md:text-5xl font-secondary'>
                  Our Events
                </h3>
                <hr
                  className='w-1/4 py-1 mx-auto mt-4 border-t-0 rounded-md'
                  style={{
                    background:
                      'linear-gradient(90deg, #C93D45 0%, #FCCC00 29.69%, #18A488 65.1%, #008AD0 100%)',
                  }}
                />
              </div>
            </div>
            <div
              className='p-5 md:p-10'
              style={{
                background:
                  'linear-gradient(100deg, #A3E1F9 0%, #008AD0 80%, #044D72 100%)',
              }}
            >
              <div className='relative flex flex-col items-center justify-center mx-auto md:flex-row max-w-7xl'>
                <img
                  className='absolute w-12 h-auto p-0 m-0 translate-y-1/2 select-none -left-5 md:-left-20 -top-4 sm:top-32 sm:w-16 md:w-16'
                  src='/image/supertoroid-blue.png'
                  alt=''
                />
                <img
                  className='absolute w-12 h-auto p-0 m-0 -translate-y-1/2 select-none -right-2 bottom-6 sm:bottom-24 md:w-20'
                  src='/image/sphere-blue.png'
                  alt=''
                />
                <img
                  className='absolute hidden h-auto p-0 m-0 -translate-y-1/2 select-none -right-28 top-4 md:block md:w-28'
                  src='/image/roundcube-blue.png'
                  alt=''
                />
                {/* <img
                  className='absolute hidden p-0 m-0 translate-y-1/2 select-none left-10 -bottom-5 md:block md:w-20 md:h-20'
                  src='/image/cube-blue.png'
                  alt=''
                /> */}
                <div className='flex items-center justify-center flex-1 md:hidden'>
                  <img
                    src='/image/reeva-icon.png'
                    alt='Schematics Reeva icon'
                    width='649px'
                    height='474px'
                    className='select-none'
                  />
                </div>
                <div className='flex flex-col flex-1 p-5 space-y-4 md:items-end font-primary'>
                  <h2 className='inline-block p-2 font-black tracking-wide text-center bg-white rounded-full text-md sm:text-xl opacity-70 text-reeva'>
                    Schematics REEVA
                  </h2>
                  <h3 className='text-3xl text-white md:text-right sm:text-5xl'>
                    REVOLUTIONARY ENTERTAIMENT AND EXPO WITH VARIOUS ARTS
                  </h3>
                  <p className='text-lg text-white break-words md:text-right sm:w-10/12 sm:text-xl'>
                    Expo dan konser musik dengan bintang tamu yang tidak kalah
                    seru.
                  </p>
                  <UnstyledLink
                    href='/schematics-reeva'
                    className='flex items-center justify-center px-4 py-3 text-base font-bold text-black bg-white border border-transparent shadow-md hover:bg-gray-100 rounded-3xl sm:px-8'
                  >
                    Lihat Selengkapnya
                  </UnstyledLink>
                </div>
                <div className='items-center justify-center flex-1 hidden md:flex'>
                  <img
                    src='/image/reeva-icon.png'
                    alt='Schematics Reeva icon'
                    width='649px'
                    height='474px'
                  />
                </div>
              </div>
            </div>
            <div
              className='p-5 md:p-10'
              style={{
                background: 'linear-gradient(100deg, #FEE466 0%, #FCCC00 100%)',
              }}
            >
              <div className='relative flex flex-col items-center justify-center mx-auto md:flex-row max-w-7xl'>
                <img
                  className='absolute w-16 h-auto p-0 m-0 -translate-y-1/2 select-none left-4 sm:left-8 md:left-10 -top-6 md:-top-12 md:w-20'
                  src='/image/cylinder-yellow.png'
                  alt=''
                />
                <img
                  className='absolute w-12 h-auto p-0 m-0 -translate-y-1/2 select-none -right-2 sm:right-20 lg:right-32 top-16 md:top-4 md:w-16'
                  src='/image/supertoroid-yellow.png'
                  alt=''
                />
                <img
                  className='absolute w-12 h-auto p-0 m-0 translate-y-1/2 select-none -left-5 md:-left-10 -bottom-4 md:-bottom-8 md:w-20 md:h-auto'
                  src='/image/cube-yellow.png'
                  alt=''
                />
                <img
                  className='absolute hidden h-auto p-0 m-0 -translate-y-1/2 select-none -right-10 -bottom-6 md:bottom-6 md:block md:w-16'
                  src='/image/roundcube-yellow.png'
                  alt=''
                />
                <div className='flex items-center justify-center flex-1'>
                  <img
                    src='/image/nlc-icon.png'
                    alt='Schematics NLC icon'
                    width='588.02px'
                    height='420.05px'
                    className='select-none'
                  />
                </div>
                <div className='flex flex-col flex-1 p-5 space-y-4 text-center md:items-start font-primary'>
                  <h2 className='inline-block p-2 font-black tracking-wide text-center bg-white rounded-full text-md sm:text-xl opacity-70 text-nlc'>
                    Schematics NLC
                  </h2>
                  <h3 className='text-3xl text-left text-white sm:text-5xl'>
                    NATIONAL LOGIC COMPETITION
                  </h3>
                  <p className='text-lg text-left text-white break-words sm:text-xl'>
                    Kompetisi logika nasional yang melatih kemampuan berfikir
                    melalui lomba dan kegiatan yang seru.
                  </p>
                  <UnstyledLink
                    href='/schematics-nlc'
                    className='flex items-center justify-center px-4 py-3 text-base font-bold text-black bg-white border border-transparent shadow-md hover:bg-gray-100 rounded-3xl sm:px-8'
                  >
                    Lihat Selengkapnya
                  </UnstyledLink>
                </div>
              </div>
            </div>
            <div
              className='p-5 md:p-10'
              style={{
                background:
                  'linear-gradient(100deg, #C93D45 0%, #FF8E90 45%, #FF9494 100%)',
              }}
            >
              <div className='relative flex flex-col items-center justify-center mx-auto md:flex-row max-w-7xl'>
                <img
                  className='absolute w-20 h-20 p-0 m-0 -translate-y-1/2 select-none -right-4 sm:right-8 top-4 sm:top-8 md:top-4 md:w-24 md:h-24'
                  src='/image/cone-red.png'
                  alt=''
                />
                <img
                  className='absolute hidden h-auto p-0 m-0 -translate-y-1/2 select-none -left-12 md:-left-16 bottom-52 md:bottom-16 md:block md:w-20 lg:w-24'
                  src='/image/cylinder-red.png'
                  alt=''
                />
                <img
                  className='absolute w-16 h-auto p-0 m-0 -translate-y-1/2 select-none -right-5 md:-right-10 -bottom-10 md:-bottom-2 md:w-20'
                  src='/image/sphere-red.png'
                  alt=''
                />
                <div className='flex items-center justify-center flex-1 text-right md:hidden'>
                  <img
                    src='/image/npc-icon.png'
                    alt='Schematics NPC icon'
                    width='403.13px'
                    height='379px'
                    className='select-none'
                  />
                </div>
                <div className='flex flex-col flex-1 py-5 pl-2 pr-5 space-y-4 md:items-end font-primary'>
                  <h2 className='inline-block p-2 font-black tracking-wide text-center bg-white rounded-full text-md sm:text-xl opacity-70 text-npc'>
                    Schematics NPC
                  </h2>
                  <h3 className='text-3xl text-white md:text-right md:text-5xl'>
                    NATIONAL PROGRAMMING CONTEST
                  </h3>
                  <p className='text-lg text-white break-words md:text-right md:text-xl'>
                    Kompetisi pemrograman nasional untuk menguji kemampuan
                    pemrograman peserta di tingkat SMA/sederajat maupun tingkat
                    mahasiswa.
                  </p>
                  <UnstyledLink
                    href='/schematics-npc'
                    className='flex items-center justify-center px-4 py-3 text-base font-bold text-black bg-white border border-transparent shadow-md hover:bg-gray-100 rounded-3xl sm:px-8'
                  >
                    Lihat Selengkapnya
                  </UnstyledLink>
                </div>
                <div className='items-center justify-center flex-1 hidden text-right md:flex'>
                  <img
                    src='/image/npc-icon.png'
                    alt='Schematics NPC icon'
                    width='403.13px'
                    height='379px'
                    className='select-none'
                  />
                </div>
              </div>
            </div>
            <div
              className='p-5 md:p-10'
              style={{
                background:
                  'linear-gradient(100deg, #96DC8E 0%, #18A488 70%, #0B5849 100%)',
              }}
            >
              <div className='relative flex flex-col items-center justify-center mx-auto md:flex-row max-w-7xl'>
                <img
                  className='absolute w-12 h-auto p-0 m-0 -translate-y-1/2 select-none -left-5 md:-left-10 top-8 md:top-10 md:w-16'
                  src='/image/roundcube-green.png'
                  alt=''
                />
                <img
                  className='absolute w-10 h-auto p-0 m-0 -translate-y-1/2 select-none -right-4 sm:right-8 lg:right-32 top-36 md:top-12'
                  src='/image/pill-green.png'
                  alt=''
                />
                <img
                  className='absolute right-0 w-16 h-auto p-0 m-0 translate-y-1/2 select-none sm:left-0 -bottom-5 md:w-20'
                  src='/image/cylinder-green.png'
                  alt=''
                />
                <img
                  className='absolute hidden h-auto p-0 m-0 translate-y-1/2 select-none -right-10 lg:-right-8 bottom-12 md:block md:w-20'
                  src='/image/cone-green.png'
                  alt=''
                />
                <div className='flex items-center justify-center flex-1'>
                  <img
                    src='/image/nst-icon.png'
                    alt='Schematics NST icon'
                    width='511px'
                    height='371px'
                    className='select-none'
                  />
                </div>
                <div className='flex flex-col flex-1 p-5 space-y-4 text-left md:items-start font-primary'>
                  <h2 className='inline-block p-2 font-black tracking-wide text-center bg-white rounded-full text-md sm:text-xl opacity-70 text-nst'>
                    Schematics NST
                  </h2>
                  <h3 className='text-3xl text-left text-white break-words sm:text-5xl'>
                    NATIONAL SEMINAR OF TECHNOLOGY
                  </h3>
                  <p className='text-lg text-left text-white break-words sm:text-xl'>
                    Acara seminar teknologi yang menghadirkan
                    pembicara-pembicara ternama.
                  </p>
                  <UnstyledLink
                    href='/schematics-nst'
                    className='flex items-center justify-center px-4 py-3 text-base font-bold text-black bg-white border border-transparent shadow-md hover:bg-gray-100 rounded-3xl sm:px-8'
                  >
                    Lihat Selengkapnya
                  </UnstyledLink>
                </div>
              </div>
            </div>

            <SchemaStoreSlider />
            <Sponsorship />
          </main>
          <Footer />
        </div>
      </div>
    </CookiesProvider>
  );
}
