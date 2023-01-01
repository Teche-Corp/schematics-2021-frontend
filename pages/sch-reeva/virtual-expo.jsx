import { useState, useEffect } from 'react';
import axios from 'axios';
import { CookiesProvider, useCookies } from 'react-cookie';
import { HiExclamationCircle } from 'react-icons/hi';

import { classNames } from '@/lib/helper';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Seo from '@/components/Seo';
import AboutTC from '@/components/AboutTC';
import ReevaCornerPopUp from '@/components/ReevaCornerPopUp';
import Modal from '@/components/Modal';
import UnstyledLink from '@/components/UnstyledLink';
import SingletonRouter, { Router } from 'next/router';

export default function virtualExpo() {
  const [displayReevaCorner, setDisplayReevaCorner] = useState(false);
  const [displayAboutTC, setDisplayAboutTC] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [openModalExit, setOpenModalExit] = useState(false);
  const [thanksMessage, setThanksMessage] = useState(false);

  const [modalCookie, setModalCookie] = useCookies([
    'modal-status-virtual-expo',
  ]);

  /* Set expire time to 3 minutes */
  const time = new Date();
  time.setTime(time.getTime() + 60 * 3 * 1000);

  const currentDate = new Date();
  const modalExpireDate = new Date('2021-10-31');

  useEffect(() => {
    if (
      (modalCookie['modal-status-virtual-expo'] === 'not-visited' ||
        !modalCookie['modal-status-virtual-expo']) &&
      currentDate < modalExpireDate
    ) {
      setModalCookie('modal-status-virtual-expo', 'not-visited', {
        path: '/',
        expires: time,
      });

      setOpenModal(true);
    }
  }, [modalCookie['modal-status-virtual-expo']]);

  useEffect(() => {
    let close = false;
    SingletonRouter.router.change = (...args) => {
      if (!close) {
        close = true;
        setOpenModalExit(true);
        return new Promise((resolve, reject) => resolve(false));
      }
      return Router.prototype.change.apply(SingletonRouter.router, args);
    };

    return () => {
      delete SingletonRouter.router.change;
    };
  }, []);

  useEffect(() => {
    if (
      (!openModal && !name) ||
      modalCookie['modal-status-virtual-expo'] === 'not-visited'
    )
      setOpenModal(true);
  }, [openModal]);

  const insertName = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (name) {
      axios
        .post('https://schematics.its.ac.id/api/reeva/insert_name', { name })
        .then(() => {
          setModalCookie('modal-status-virtual-expo', 'visited', {
            path: '/',
            expires: time,
          });
          setOpenModal(false);
        })
        .catch((err) =>
          setError(
            err?.response?.data?.msg ?? 'Terjadi kesalahan, mohon coba lagi'
          )
        )
        .finally(() => setIsLoading(false));
    } else {
      setError('Nama tidak boleh kosong!');
      setIsLoading(false);
    }
  };

  return (
    <CookiesProvider>
      <Seo title='Schematics Reeva Virtual Expo' />
      <Header />
      <Modal setOpenModal={setOpenModalExit} openModal={openModalExit}>
        <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
          <div className='flex flex-row justify-between pb-2 mb-3 bg-white border-b-2 border-gray-200 rounded-tl-lg rounded-tr-lg'>
            <p className='p-1 font-semibold text-gray-800'>Virtual Expo</p>
          </div>
          <div>
            <div
              className={`flex ${
                !thanksMessage ? 'flex-row' : 'flex-col'
              } justify-center items-center gap-3 pt-2`}
            >
              {!thanksMessage && (
                <UnstyledLink
                  href='https://forms.gle/m7o3UEqwBWMSY7Gy9'
                  onClick={() => setThanksMessage(true)}
                  className={classNames(
                    'inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-reeva hover:bg-reeva-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-reeva-400',
                    isLoading && 'filter brightness-90 cursor-wait'
                  )}
                >
                  Beri Feedback!
                </UnstyledLink>
              )}
              {thanksMessage && <p>Terimakasih atas Feedback Anda</p>}
              <button
                onClick={() => setOpenModalExit(false)}
                className={classNames(
                  'inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-reeva hover:bg-reeva-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-reeva-400',
                  isLoading && 'filter brightness-90 cursor-wait'
                )}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
          <div className='flex flex-row justify-between pb-2 mb-3 bg-white border-b-2 border-gray-200 rounded-tl-lg rounded-tr-lg'>
            <p className='p-1 font-semibold text-gray-800'>Virtual Expo</p>
          </div>
          <form onSubmit={(e) => insertName(e)}>
            <label
              htmlFor='name'
              className='block text-sm font-normal text-gray-700'
            >
              Nama
            </label>
            <div className='relative mt-1'>
              <input
                id='name'
                onChange={(e) => {
                  setName(e.target.value);
                  setError(false);
                }}
                className={classNames(
                  'block w-full p-3 border border-gray-300 outline-none rounded-md shadow-sm sm:text-sm',
                  error
                    ? 'focus:ring-red-500 border-red-500 focus:border-red-500'
                    : 'focus:ring-dark-400 focus:border-dark-400'
                )}
              />
              {error && (
                <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                  <HiExclamationCircle className='text-xl text-red-500' />
                </div>
              )}
            </div>
            <div className='mt-1'>
              <span className='text-sm text-red-500'>{error}</span>
            </div>
            <div className='flex justify-end pt-5'>
              <button
                type='submit'
                className={classNames(
                  'inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-reeva hover:bg-reeva-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-reeva-400',
                  isLoading && 'filter brightness-90 cursor-wait'
                )}
              >
                Lanjut
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <main className='bg-dark'>
        <section className='overflow-x-hidden'>
          <div className='block overflow-x-auto'>
            <img
              src='/image/reeva/virtual-expo-map.gif'
              useMap='#map'
              className='select-none mx-auto block object-left object-cover max-w-[1439px] max-h-[809px]'
            />
            <map name='map'>
              {areas.map((area) => {
                return (
                  <area
                    key={area.id}
                    alt={area.alt}
                    title={area.title}
                    href={area.link}
                    coords={area.coords}
                    shape='poly'
                    onClick={
                      area.id === 1
                        ? () => {
                            setDisplayReevaCorner(true);
                            setDisplayAboutTC(false);
                          }
                        : area.id === 2
                        ? () => {
                            setDisplayAboutTC(true);
                            setDisplayReevaCorner(false);
                          }
                        : ''
                    }
                  />
                );
              })}
            </map>
          </div>
          {displayAboutTC && (
            <AboutTC open={displayAboutTC} setOpen={setDisplayAboutTC} />
          )}
          {displayReevaCorner && (
            <ReevaCornerPopUp
              open={displayReevaCorner}
              setOpen={setDisplayReevaCorner}
            />
          )}
        </section>
        <Footer />
      </main>
    </CookiesProvider>
  );
}

const areas = [
  {
    id: 1,
    title: 'REEVA Corner',
    alt: 'REEVA Corner',
    link: '#',
    coords:
      '93,514,178,527,210,507,220,509,335,474,332,436,342,436,340,385,290,366,271,357,208,268,172,362,111,398,98,448,114,451,86,472',
  },
  {
    id: 2,
    title: 'About TC ITS',
    alt: 'About TC ITS',
    link: '#',
    coords:
      '601,286,622,292,639,289,685,245,686,257,647,294,780,315,785,306,813,314,823,312,925,331,935,320,935,296,851,284,871,264,869,216,868,202,857,195,850,206,841,209,835,200,705,187,694,191,694,183,681,177,671,187,670,195,620,229,602,242',
  },
  {
    id: 3,
    title: 'REEVA Donasi',
    alt: 'REEVA Donasi',
    link: '/sch-reeva/live-donation',
    coords:
      '1124,396,1273,367,1281,276,1288,262,1209,224,1186,230,1157,213,1118,230,1029,243,1042,251,1021,255,1015,347,1076,391,1108,384',
  },
  {
    id: 4,
    title: 'REEVA Concert',
    alt: 'REEVA Concert',
    link: 'https://www.youtube.com/watch?v=Tu_e_frNr8U',
    coords:
      '336,655,340,688,350,708,373,725,411,739,458,743,504,741,551,731,583,716,612,698,628,670,628,632,606,599,569,582,577,551,539,510,498,495,455,476,393,528,399,591,376,596,357,552,322,563,349,623,339,637',
  },
];
