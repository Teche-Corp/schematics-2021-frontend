/* This example requires Tailwind CSS v2.0+ */
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  IoCloseCircleOutline,
  IoArrowForwardCircle,
  IoArrowBackCircle,
} from 'react-icons/io5';

export default function ReevaCornerPopUp({ open, setOpen }) {
  const slider1 = useRef(null);
  const slider3 = useRef(null);
  const [showNextButton, setShowNextButton] = useState(false);

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

  const settings1 = {
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

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    customPaging: (i) => (
      <div className='p-2 mx-1 bg-white rounded-full mt-14'></div>
    ),
  };

  const settings3 = {
    dots: false,
    infinite: false,
    swipe: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  const checkAnswer = (el, answer) => {
    if (answer) {
      el.classList.add('bg-green-300', 'border-0');
      setShowNextButton(true);
    } else {
      el.classList.add('bg-red-300', 'border-0');
    }
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
                  src='/image/reeva/virtual-expo/reeva-corner.png'
                  alt='Graha ITS'
                  draggable='false'
                />
                <IoCloseCircleOutline
                  className='absolute w-8 h-8 md:w-14 md:h-14 top-4 right-4 md:top-16 md:right-16 text-reeva hover:cursor-pointer'
                  aria-hidden='true'
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className='px-10 py-8 md:px-40 md:py-16 space-y-14 md:space-y-28 bg-darkbg'>
                <div>
                  <h2 className='text-2xl md:text-5xl font-secondary'>
                    Galeri Foto
                  </h2>
                  <div className='relative'>
                    <Slider
                      {...settings1}
                      ref={slider1}
                      className='w-full max-w-sm mx-auto mt-10 sm:max-w-2xl md:max-w-4xl'
                    >
                      {sliderContent1.map((e) => {
                        return (
                          <div key={e.id}>
                            <img
                              alt={`slider image-${e.id}`}
                              src={e.href}
                              className='w-[300px] mx-auto md:w-[400px]'
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
                <div>
                  <h2 className='mb-6 text-2xl md:mb-12 md:text-5xl font-secondary'>
                    Tentang Schematics REEVA
                  </h2>
                  <div className='flex flex-col md:flex-row'>
                    <div
                      className='relative w-full px-8 pt-5 pb-24 md:pb-0 md:w-3/5 rounded-large'
                      style={{
                        background:
                          'linear-gradient(45deg, #026CA2 0%, #6FC5EC 100%)',
                      }}
                    >
                      <Slider
                        {...settings2}
                        className='w-full mx-auto mt-4 md:mt-10 sm:max-w-2xl md:max-w-4xl'
                      >
                        {sliderContent2.map((e, index) => {
                          return (
                            <div key={index} className='space-y-3'>
                              <h3 className='text-xl font-medium md:text-3xl font-secondary'>
                                {e.title}
                              </h3>
                              <p className='text-lg md:text-xl'>{e.content}</p>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                    <div>
                      <img
                        src='/image/reeva/robot-5.png'
                        alt='Schematics Reeva'
                        className='w-3/4 m-auto md:w-full'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='mb-6 text-2xl md:text-5xl font-secondary'>
                    Kuis Mini!
                  </h2>
                  {/* <p className='mb-8 text-sm '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    felis nullam lacus, sit eget dolor.{' '}
                  </p> */}
                  <div
                    style={{
                      background:
                        'linear-gradient(45deg, #026CA2 0%, #6FC5EC 100%)',
                    }}
                    className='flex items-center justify-center px-4 py-8 md:px-8 rounded-large'
                  >
                    <Slider
                      ref={slider3}
                      {...settings3}
                      className='w-full px-2 mx-auto md:px-4'
                    >
                      {miniQuiz.map((e, index) => {
                        return (
                          <div
                            key={index + 1}
                            className='px-2 pb-1 space-y-4 outline-none'
                          >
                            <span>
                              Pertanyaan {index + 1}/{miniQuiz.length}
                            </span>
                            <h3 className='font-medium break-words font-secondary'>
                              {e.question}
                            </h3>
                            <div className='flex flex-col space-y-2 outline-none'>
                              {e.options.map((op) => {
                                return (
                                  <button
                                    key={op.answer}
                                    className='px-2 py-1 border outline-none cursor-pointer'
                                    onClick={(el) =>
                                      checkAnswer(el.target, op.status)
                                    }
                                  >
                                    {op.answer}
                                  </button>
                                );
                              })}
                            </div>
                            {index < miniQuiz.length - 1 && showNextButton && (
                              <div
                                className='flex items-center justify-center w-full px-6 py-2 ml-auto space-x-2 bg-black md:py-3 md:w-min hover:cursor-pointer hover:bg-gray-900'
                                onClick={() => {
                                  slider3.current.slickNext();
                                  setShowNextButton(false);
                                }}
                              >
                                <span className='text-lg md:text-xl'>
                                  SELANJUTNYA
                                </span>
                                <IoArrowForwardCircle className='border-0 w-7 h-7' />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const sliderContent1 = [
  {
    id: '1',
    href: '/image/reeva/virtual-expo/reeva-corner-1.png',
  },
  {
    id: '2',
    href: '/image/reeva/virtual-expo/reeva-corner-2.png',
  },
  {
    id: '3',
    href: '/image/reeva/virtual-expo/reeva-corner-3.png',
  },
  {
    id: '4',
    href: '/image/reeva/virtual-expo/reeva-corner-4.png',
  },
  {
    id: '5',
    href: '/image/reeva/virtual-expo/reeva-corner-5.png',
  },
  {
    id: '6',
    href: '/image/reeva/virtual-expo/reeva-corner-6.png',
  },
];

const sliderContent2 = [
  {
    title: ' What is SCH REEVA?',
    content:
      'REEVA (Revolutionary Entertainment and Expo with Various Arts) Eva: Hari gini masih belum tau Schematics REEVA ?! Oke kujelasin, REEVA adalah singkatan dari (Revolutionary Entertainment and Expo with Various Arts) sebagai acara penutup dari Schematics 2021 ini!',
  },
  {
    title: 'When is SCH REEVA?',
    content:
      'Schematics REEVA  bakal dilaksanakan pada tanggal 30-10-2021, Catat Tanggalnya ya!',
  },
  {
    title: 'Why must SCH REEVA?',
    content:
      'Pasti tau kan kalau Sch REEVA adalah acara penutup dari rangkaian acara Schematics? Dan tentunya semua acara penutup adalah acara yang paling meriah. Untuk memeriahkan nya Sch REEVA mengundang berbagai GS seperti tahun-tahun sebelumnya',
  },
  {
    title: 'Who is the audience?',
    content: 'Schematics REEVA dapat diikuti oleh masyarakat umum',
  },
  {
    title: 'Where Sch REEVA will be held?',
    content:
      'Sch REEVA akan diadakan Online dan yang paling penting adalah Gratis!. Kalo kamu gabut aja nih di rumah butuh banget hiburan bisa datang menghadiri Sch REEVA di rumah dengan device kalian!',
  },
];

const miniQuiz = [
  {
    question: 'Apakah Schematics REEVA pernah memiliki makna yang berbeda?',
    options: [{ status: true, answer: 'Benar' }, { answer: 'Salah' }],
  },
  {
    question:
      'Schematics REEVA pernah memiliki makna yang berbeda, makna tersebut adalah',
    options: [
      {
        status: true,
        answer: 'Art Exhibition and Rendezvous with Alumni of Informatics',
      },
      { answer: 'Revolutionary Expo and Entertaintment with Various Arts' },
      { answer: 'Ample Exhibition and Regroup with Alumni of Informatics' },
      { answer: 'Reshaped Expo and Exhibition with Various Arts' },
    ],
  },
  {
    question: 'Schematics REEVA tahun ini mengundang ..... guest star',
    options: [
      { answer: '2' },
      { status: true, answer: '1' },
      { answer: '3' },
      { answer: '4' },
    ],
  },
  {
    question: 'Teknik Informatika ITS dibentuk pada',
    options: [
      { answer: '1995' },
      { answer: '1993' },
      { answer: '2001' },
      { status: true, answer: '1985' },
    ],
  },
  {
    question:
      'Sebelum berubah nama menjadi program studi Teknik Informatika, sebelumnya dinamakan program studi',
    options: [
      { answer: 'Ilmu Informatika' },
      { answer: 'Manajemen Komputer' },
      { status: true, answer: 'Teknik Komputer' },
      { answer: 'Ilmu Komputer' },
    ],
  },
  {
    question: 'Teknik Informatika termasuk dalam fakultas',
    options: [
      { answer: 'Vokasi' },
      { status: true, answer: 'FTEIC' },
      { answer: 'FTSPK' },
      { answer: 'FIA' },
    ],
  },
  {
    question: 'Reality Club dibentuk pada tahun',
    options: [
      { answer: '2017' },
      { answer: '2015' },
      { answer: '2018' },
      { status: true, answer: '2016' },
    ],
  },
  {
    question: 'Fathia Izzati merupakan ..... dari Reality Club',
    options: [
      { answer: 'Bassist' },
      { answer: 'Guitarist' },
      { answer: 'Drummer' },
      { status: true, answer: 'Vocalist' },
    ],
  },
  {
    question: 'Reality Club sudah mengeluarkan ..... Album',
    options: [
      { answer: '7' },
      { answer: '1' },
      { status: true, answer: '3' },
      { answer: '10' },
    ],
  },
  {
    question: 'Reality Club terdiri dari ..... member',
    options: [
      { answer: '3' },
      { answer: '2' },
      { status: true, answer: '5' },
      { answer: '7' },
    ],
  },
  {
    question: 'Fathia Izzati merupakan lulusan .....',
    options: [
      { status: true, answer: 'Hukum' },
      { answer: 'Ekonomi' },
      { answer: 'Teknik Mesin' },
      { answer: 'Psikologi' },
    ],
  },
  {
    question: 'Tagline dari Schematics 2021 adalah .....',
    options: [
      { answer: 'Reviving The Life' },
      { answer: 'Soul Revives Us' },
      { answer: 'Enkindling Life' },
      { status: true, answer: 'Reviving The Souls' },
    ],
  },
  {
    question:
      'Salah satu hadiah dari Schematics NLC adalah Freepass Teknik Informatika ITS',
    options: [{ status: true, answer: 'Benar' }, { answer: 'Salah' }],
  },
  {
    question: 'Biaya pendaftaran Schematics NST adalah sebesar .....',
    options: [
      { answer: 'Rp. 20.000' },
      { answer: 'Rp. 50.000' },
      {
        status: true,
        answer: 'Gratis dong!, karena apa yang enggak buat kamu',
      },
      { answer: 'Rp. 10.000' },
    ],
  },
  {
    question: 'Schematics terdiri dari berapa event',
    options: [
      { answer: '1' },
      { answer: '2' },
      { answer: '3' },
      { status: true, answer: '4' },
    ],
  },
];
