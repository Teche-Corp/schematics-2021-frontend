import Slider from 'react-slick';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

export default function about() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

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
  };
  return (
    <div>
      <Seo title='Schematics 2021 | Tentang Kami' />
      <Header />
      <main className='overflow-hidden bg-darkbg'>
        <section className='py-20 mx-auto text-center text-white '>
          <div className=''>
            <h1 className='text-4xl'>About</h1>
            <h1 className='font-secondary'>Schematics</h1>
            <hr
              className='max-w-[250px] mx-auto py-1 mt-4 border-t-0 rounded-md'
              style={{
                background:
                  'linear-gradient(90deg, #C93D45 0%, #FCCC00 29.69%, #18A488 65.1%, #008AD0 100%)',
              }}
            />
            <p className='max-w-5xl px-5 mx-auto mt-10 md:px-0'>
              Schematics merupakan singkatan dari National Seminar of
              Technology, Art Exhibition, National Logic Contest, National
              Programming Contest, and Alumni Rendezvous of Informatics.
            </p>
          </div>
          <div className='relative'>
            <Slider
              {...settings}
              className='w-full max-w-sm mx-auto mt-10 sm:max-w-2xl md:max-w-4xl'
            >
              {sliderContent.map((e) => {
                return (
                  <div className={e.id}>
                    <img
                      alt={`slider image-${e.id}`}
                      src={e.href}
                      className='w-[300px] mx-auto md:w-[400px]'
                    />
                  </div>
                );
              })}
            </Slider>
            <img
              className='absolute'
              className='h-5 -mt-2 md:h-auto md:-mt-5'
              src='image/about/schematics-text.png'
              alt='schematics text'
            />
          </div>
        </section>
        <section className='mx-auto space-y-5 md:py-16 max-w-7xl'>
          <p className='max-w-5xl px-5 mx-auto font-light text-center text-white'>
            Schematics merupakan acara tahunan yang diselenggarakan oleh
            mahasiswa Teknik Informatika ITS mulai dari tahun 2007 hingga
            sekarang dan menjadi salah satu event terbesar ITS.
          </p>
          <img
            src='image/about/sch-events.png'
            className='mx-auto mt-6 mb-5 lg:h-[700px] px-5 md:px-0'
            alt='schematics events'
          />
          <p className='max-w-5xl px-5 mx-auto mt-10 font-light text-center text-white md:px-0'>
            Tujuan utama dari masing-masing sub-event yakni untuk mencerdaskan
            masyarakat yang ingin mengasah kemampuan algoritma, pemrograman, dan
            logika serta memberikan pemahaman mengenai perkembangan teknologi
            dengan menggunakan pendekatan yang menarik.
          </p>
        </section>

        <section className='relative px-5 py-16 overflow-hidden text-center text-white md:px-0'>
          <img
            src='image/about/about-bg.png'
            alt='about background'
            className='hidden md:block md:absolute md:left-[900px] lg:left-3/4'
          />
          <img
            src='image/about/circle-about.png'
            alt='about background'
            className='hidden md:block md:absolute md:right-[900px] lg:right-3/4 -bottom-10'
          />
          <div className='max-w-5xl px-5 mx-auto'>
            <h1 className='text-2xl'>Company</h1>
            <h1 className='font-secondary'>Profile</h1>
            <hr
              className='max-w-[250px] mx-auto py-1 mt-4 border-t-0 rounded-md'
              style={{
                background:
                  'linear-gradient(90deg, #C93D45 0%, #FCCC00 29.69%, #18A488 65.1%, #008AD0 100%)',
              }}
            />
            <div class='mt-10'>
              <LiteYouTubeEmbed
                id='gWdWqKMIuug'
                poster='maxresdefault'
                noCookie={true}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const sliderContent = [
  {
    id: '1',
    href: 'image/about/about-1.png',
  },
  {
    id: '2',
    href: 'image/about/about-2.png',
  },
  {
    id: '3',
    href: 'image/about/about-3.png',
  },
  {
    id: '4',
    href: 'image/about/about-4.png',
  },
  {
    id: '5',
    href: 'image/about/about-5.png',
  },
];
