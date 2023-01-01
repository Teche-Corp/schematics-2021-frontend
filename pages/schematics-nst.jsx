import Slider from 'react-slick';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { classNames } from '@/lib/helper';

import Seo from '@/components/Seo';
import Header from '@/components/Header';
import UnstyledLink from '@/components/UnstyledLink';
import Footer from '@/components/Footer';

export default function SchematicsNstPage() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrow type='prev' />,
    nextArrow: <SlickArrow type='next' />,
  };

  return (
    <>
      <Seo title='Schematics NST' />
      <Header />
      <main className='overflow-x-hidden'>
        <section
          style={{
            backgroundImage: 'url(/image/nst/nst-bg.jpg)',
            backgroundRepeat: 'no-repeat',
          }}
          className='bg-bottom bg-contain md:bg-cover bg-darkbg'
        >
          {/* Min height to compromise header height */}
          <article className='flex flex-col items-center gap-8 text-center text-white py-14 md:gap-12 min-h-screen-header layout'>
            <span className='py-2 px-4 inline-block rounded-full text-lg font-black md:text-2xl bg-gradient-to-r from-[#138175] via-[#18A488] to-[#53C97F]'>
              SCHEMATICS NST
            </span>
            <h1 className='text-5xl md:text-7xl'>
              National Seminar
              <br />
              of Technology
            </h1>
            <div className='flex flex-col items-center gap-4 pt-5 md:flex-row md:gap-20'>
              {cta.map(({ link, text }) => (
                <UnstyledLink
                  key={link}
                  href={link}
                  className='text-lg font-bold uppercase transition-colors border-b-2 border-current md:text-lg hover:text-nst focus:text-nst active:brightness-95'
                >
                  {text}
                </UnstyledLink>
              ))}
            </div>
          </article>
        </section>

        {/* ========================= TENTANG ========================= */}
        <section
          style={{
            background:
              'url(/image/nlc/wave-bottom.svg) center 101%/110% auto, linear-gradient(135.59deg, #18A488, #53C97F)',
            backgroundRepeat: 'no-repeat',
          }}
          id='tentang'
          className='bg-[#18A488]'
        >
          <article className='flex flex-col gap-8 py-20 md:py-32 md:pb-48 md:flex-row layout'>
            <div className='flex flex-col justify-center w-full text-white'>
              <h2 className='space-y-1 text-3xl md:text-5xl'>
                <span className='block'>Tentang</span>
                <span className='block font-normal font-secondary'>
                  Seminar
                </span>
              </h2>
              <p className='mt-6 text-lg font-medium md:max-w-xl md:text-xl'>
                Schematics National Seminar of Technology 2021 merupakan acara
                seminar yang dihadirkan untuk memberikan pengetahuan dan
                perkembangan seputar Teknologi Informasi terkini serta bagaimana
                teknologi tersebut berdampak pada berbagai sektor di Indonesia.
                Schematics NST dapat diikuti oleh masyarakat umum.
              </p>
            </div>
            <div className='flex items-center justify-center w-full'>
              <figure className='w-11/12 max-w-[350px]'>
                <Slider {...settings}>
                  {sliderContent.map(({ id, src }) => (
                    <div key={id}>
                      <img src={src} alt={`NST ${id}`} className='w-[450px]' />
                    </div>
                  ))}
                </Slider>
              </figure>
            </div>
          </article>
        </section>

        <section className='bg-darkbg'>
          <article className='text-white layout min-h-screen-header py-14'>
            <div className='flex flex-col gap-10 mx-auto text-center md:w-10/12'>
              {/* pr-8 to make space, but still keeping the right section in the middle */}
              <h2 className='flex flex-col w-full space-y-1 text-3xl md:text-5xl'>
                <span className='block'>Tema</span>
                <span className='block font-normal font-secondary'>
                  Schematics NST
                </span>
              </h2>
              {/* ml-4 to compensate ::marker */}
              <div className='relative mx-auto w-max'>
                <img
                  src='/image/quotation-mark.svg'
                  alt='Quotation mark'
                  className='absolute top-0 left-0 z-0 w-10 -translate-y-1/2 md:-translate-y-3/4 -translate-x-3/4 md:w-16'
                />
                <img
                  src='/image/quotation-mark.svg'
                  alt='Quotation mark'
                  className='absolute bottom-0 right-0 z-0 w-10 rotate-180 translate-y-1/2 translate-x-3/4 md:w-16'
                />
                <p className='relative mx-auto text-xl tracking-wide md:text-2xl'>
                  Digitized Micro Businesses <br className='md:hidden' /> to
                  Lead Economic Growth
                </p>
              </div>
            </div>

            <figure className='mt-24'>
              <LiteYouTubeEmbed
                wrapperClass='yt-lite aspect-125 max-w-[400px] 2xl:max-w-[500px]  mx-auto'
                id='sQulPpoSSIc'
                poster='maxresdefault'
                noCookie={true}
              />
            </figure>
          </article>
        </section>

        {/* ========================= TIMELINE ========================= */}
        <section className='bg-darkbg' id='pembicara'>
          <article className='text-white layout min-h-screen-header py-14 md:pb-40'>
            <h2 className='relative space-y-1 text-3xl text-center text-white md:text-5xl'>
              <span className='block font-normal font-secondary'>
                Pembicara
              </span>
              <span className='block'>Schematics NST</span>
            </h2>
            <div className='flex flex-col items-center justify-around mt-12 space-y-8 pb-36 lg:pb-0 lg:space-y-0 lg:flex-row'>
              <img
                src='/image/nst/speaker-1.png'
                alt='Pembicara 1'
                className='w-64 md:w-72'
              />
              <img
                src='/image/nst/speaker-2.png'
                alt='Pembicara 2'
                className='w-64 md:w-72'
              />
              <img
                src='/image/nst/speaker-3.png'
                alt='Pembicara 3'
                className='w-64 md:w-72'
              />
            </div>
          </article>
        </section>

        <section
          style={{
            background: 'linear-gradient(270deg, #19A588, #4FC780)',
            backgroundRepeat: 'no-repeat',
          }}
          id='daftar'
          className='bg-nst md:pb-16'
        >
          <article className='flex h-full layout'>
            <div className='flex flex-col mx-auto -translate-y-1/2 md:flex-row'>
              <div className='bg-nst'>
                <UnstyledLink
                  href='/dashboard/my/sch-nst/ticket'
                  className='flex items-center justify-center w-full h-full p-6 text-2xl font-black tracking-wide text-center text-white uppercase transition-colors bg-nst hover:bg-[#008B6F] md:text-3xl active:brightness-95'
                >
                  DAFTAR SEKARANG
                </UnstyledLink>
              </div>
              <div className='relative p-6 space-y-3 bg-nst-100 md:grid md:grid-cols-4 gap-x-12 md:space-y-0'>
                <div className='md:col-span-2'>
                  <p className='text-nst-700'>Waktu</p>
                  <p className='text-xl font-bold'>
                    Sabtu, 23 Oktober 2021 <br className='md:hidden' />
                    <span className='text-lg text-gray-900'>
                      (9.30-12.30 WIB)
                    </span>
                  </p>
                </div>
                <div className='md:col-span-1'>
                  <p className='text-nst-700'>Tempat</p>
                  <p className='text-xl font-bold'>Online</p>
                </div>
                <img
                  src='/image/free-stamp.svg'
                  alt='Free Stamp'
                  className='absolute bottom-0 right-0 translate-y-2 translate-x-14 h-28 md:h-36 md:-translate-y-2 lg:-translate-y-6 md:translate-x-1/3 md:inset-y-0 lg:top-0'
                />
              </div>
            </div>
          </article>
        </section>
        <Footer />
      </main>
    </>
  );
}

const cta = [
  { link: '#tentang', text: 'Tentang Seminar' },
  { link: '#pembicara', text: 'Pembicara' },
];

const sliderContent = [
  {
    id: '1',
    src: '/image/nst/NST-1.jpg',
  },
  {
    id: '2',
    src: '/image/nst/NST-2.jpg',
  },
  {
    id: '3',
    src: '/image/nst/NST-3.jpg',
  },
  {
    id: '4',
    src: '/image/nst/NST-4.jpg',
  },
];

function SlickArrow({ className, type, onClick }) {
  const isPrev = type === 'prev';
  return (
    <button
      className={classNames(
        'flex items-center justify-center md:w-11 w-8 md:h-11 h-8 rounded-full bg-[#138175] focus:bg-[#138175] hover:bg-[#138175] hover:brightness-95 slick-no-pseudoelement z-10 text-5xl',
        className,
        isPrev ? 'md:-left-7 -left-5' : 'md:-right-7 -right-5'
      )}
      onClick={onClick}
    >
      {isPrev ? (
        <HiChevronLeft className='w-8 h-8 text-white md:w-11 md:h-11' />
      ) : (
        <HiChevronRight className='w-8 h-8 text-white md:w-11 md:h-11' />
      )}
      <style global jsx>
        {`
          .slick-no-pseudoelement.slick-prev::before,
          .slick-no-pseudoelement.slick-next::before {
            content: none;
          }
        `}
      </style>
    </button>
  );
}
