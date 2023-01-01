import { useRef } from 'react';
import Slider from 'react-slick';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  IoCloseCircleOutline,
  IoArrowForwardCircle,
  IoArrowBackCircle,
} from 'react-icons/io5';
import { ArrowRightIcon } from '@heroicons/react/outline';

import UnstyledLink from '@/components/UnstyledLink';

export default function AboutTC({ open, setOpen }) {
  const slider1 = useRef(null);

  const SliderArrow = ({ type }) => {
    return type === 'right' ? (
      <IoArrowForwardCircle
        className='absolute right-0 z-10 w-8 h-8 translate-x-8 -translate-y-1/2 md:w-12 md:h-12 top-1/2 hover:cursor-pointer'
        onClick={() => slider1.current.slickNext()}
      />
    ) : (
      <IoArrowBackCircle
        className='absolute left-0 z-10 w-8 h-8 -translate-x-8 -translate-y-1/2 md:w-12 md:h-12 top-1/2 hover:cursor-pointer'
        onClick={() => slider1.current.slickPrev()}
      />
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        centerPadding: true,
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],

    nextArrow: <SliderArrow type='right' />,
    prevArrow: <SliderArrow type='left' />,
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-10 overflow-y-auto'
        open={open}
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen px-4 pb-20 text-center text-white pt-28 sm:block'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block overflow-hidden text-left align-bottom transition-all transform rounded-large sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full'>
              <div className='relative'>
                <img
                  src='/image/reeva/virtual-expo/about-tc.png'
                  alt='Graha ITS'
                  draggable='false'
                />
                <IoCloseCircleOutline
                  className='absolute w-8 h-8 text-white md:w-14 md:h-14 top-4 right-4 md:top-16 md:right-16 hover:cursor-pointer'
                  aria-hidden='true'
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className='px-10 py-8 md:px-40 md:py-16 space-y-14 md:space-y-28 bg-darkbg'>
                <div className='mt-4 sm:mt-10'>
                  <Slider
                    ref={slider1}
                    {...settings}
                    className='w-full max-w-sm mx-auto mt-10 sm:max-w-2xl md:max-w-4xl'
                  >
                    {sliderContent.map((e) => {
                      return (
                        <div key={e.id}>
                          <img
                            alt={`slider image-${e.id}`}
                            src={e.href}
                            className='mx-auto '
                          />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
                <div className='flex flex-col gap-12 px-6 mt-4 text-white sm:mt-10 md:px-10'>
                  <h2 className='text-4xl text-center sm:mb-2 xl:text-left font-secondary'>
                    Ikuti Prestasi Mereka!
                  </h2>
                  {aboutArticles.map((article) => {
                    return (
                      <div
                        key={article.id}
                        className='flex items-center justify-center mb-8'
                      >
                        <div className='relative flex flex-col gap-8 xl:w-7/12'>
                          <h3 className='text-center xl:text-left'>
                            {article.title}
                          </h3>
                          <div className='flex flex-col items-center justify-center xl:hidden'>
                            <img
                              className='w-[330px]'
                              src={article.url}
                              alt={article.alt}
                            />
                          </div>
                          <p className='text-center text-md xl:text-left'>
                            {article.text}
                          </p>
                          {/* <UnstyledLink
                            href='#'
                            className='absolute m-auto text-lg -translate-x-1/2 xl:translate-x-0 left-1/2 xl:left-0 -bottom-12 w-36'
                          >
                            Selengkapnya{' '}
                            <ArrowRightIcon className='absolute w-5 p-[3px] translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-dark top-4 right-2' />
                          </UnstyledLink> */}
                        </div>
                        <div className='flex-col items-center justify-center hidden pt-3 xl:flex xl:w-5/12'>
                          <img
                            className='w-11/12 ml-12 select-none'
                            src={article.url}
                            alt={article.alt}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const sliderContent = [
  {
    id: '1',
    href: '/image/reeva/about-tc/1.png',
  },
  {
    id: '2',
    href: '/image/reeva/about-tc/2.png',
  },
  {
    id: '3',
    href: '/image/reeva/about-tc/3.png',
  },
];

const aboutArticles = [
  {
    id: 1,
    title: 'Bidrato: Permainan yang Membantu Ekonomi Pariwisata',
    text: 'Bidrato, aplikasi permainan yang dibuat oleh Raul, Nur dan Fian (Tim Baronas) mampu mendapatkan gelar juara di beberapa lomba sekaligus, lho! Bagaimana, sih, perjalanan mereka sampai bisa mendapatkan pencapaian ini? Simak wawancara kami dengan Tim Baronas!',
    url: '/image/reeva/bidrato.PNG',
    alt: 'bidrato its',
  },
  {
    id: 2,
    title: 'Hackaton Maritim di Kapal Perang',
    text: 'Tim Hackaton yang terdiri dari Nur, Barhan dan Wahid yang mengikuti lomba Hackaton  bertemakan Maritim di atas Kapal Perang, punya banyak cerita menarik, lho, selama mengikuti lomba. Penasaran? Simak cerita mereka melalui wawancara kami dengan Tim Hackaton!',
    url: '/image/reeva/hackaton.jpg',
    alt: 'hackaton its',
  },
];
