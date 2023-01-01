import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AiFillYoutube } from 'react-icons/ai';

import { classNames } from '@/lib/helper';

import Seo from '@/components/Seo';
import Header from '@/components/Header';
import UnstyledLink from '@/components/UnstyledLink';
import Footer from '@/components/Footer';

const Countdown = dynamic(() => import('react-countdown'), {
  ssr: false,
});

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return null;
  } else {
    return (
      <div className='grid grid-flow-col gap-8 text-center auto-cols-max'>
        <div className='flex flex-col'>
          <span className='text-3xl font-medium md:text-5xl'>
            {days.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
          days
        </div>
        <div className='flex flex-col'>
          <span className='text-3xl font-medium md:text-5xl'>
            {hours.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
          hours
        </div>
        <div className='flex flex-col'>
          <span className='text-3xl font-medium md:text-5xl'>
            {minutes.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
          min
        </div>
        <div className='flex flex-col'>
          <span className='text-3xl font-medium md:text-5xl'>
            {seconds.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
          sec
        </div>
      </div>
    );
  }
};

export default function SchematicsReevaPage() {
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
      <Seo title='Schematics Reeva' />
      <Header />
      <main className='overflow-x-hidden'>
        <section
          style={{
            backgroundImage: 'url(/image/reeva/cover-reeva.png)',
            backgroundRepeat: 'no-repeat',
          }}
          className='bg-bottom bg-contain md:bg-cover bg-darkbg'
        >
          {/* Min height to compromise header height */}
          <article className='flex flex-col items-center gap-8 text-center text-white py-14 md:gap-12 min-h-screen-header layout'>
            {/* <span className='inline-block px-4 py-2 text-lg font-black rounded-full md:text-2xl'>
              SCHEMATICS REEVA
            </span> */}
            <h1 className='text-5xl md:text-7xl'>
              Schematics
              <br />
              REEVA
            </h1>
            <Countdown
              date={new Date(2021, 9, 30, 18, 30, 0)}
              renderer={renderer}
            />
            <div className='flex justify-center xl:justify-start'>
              <div className='inline-block rounded-full items-center bg-[#00A9FF]'>
                <div className='flex items-center'>
                  <img
                    alt='reeva calendar'
                    src='/image/reeva/reeva-calendar.png'
                  />
                  <p className='text-lg xl:text-[24px] text-black pl-2 pr-3'>
                    30 Oktober 2021 18.30 WIB
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-lg font-medium md:text-3xl'>
                Live On{' '}
                <AiFillYoutube className='inline mb-1 text-4xl md:text-5xl' />:
                Schematics ITS Surabaya
              </p>
              <UnstyledLink
                href='https://www.youtube.com/watch?v=Tu_e_frNr8U'
                className='flex justify-center xl:justify-start'
              >
                <span
                  className={`rounded-xl hover:bg-reeva-700 mt-7 bg-[#008AD0] text-white text-base xl:text-4xl flex gap-1 xl:gap-2 justify-center items-center font-bold px-4 py-2 mb-10`}
                >
                  <AiFillYoutube className='text-3xl xl:text-6xl' />
                  AKSES DI SINI
                </span>
              </UnstyledLink>
            </div>

            <div className='flex flex-col items-center gap-4 pt-1 md:flex-row md:gap-20'>
              {cta.map(({ link, text }) => (
                <UnstyledLink
                  key={link}
                  href={link}
                  className='text-lg font-bold uppercase transition-colors border-b-2 border-current md:text-lg hover:text-reeva focus:text-reeva active:brightness-95'
                >
                  {text}
                </UnstyledLink>
              ))}
            </div>
          </article>
        </section>

        {/* ========================= GUEST STAR ========================= */}
        <section
          style={{
            backgroundImage: 'url(/image/reeva/guest-star.png)',
          }}
          className='bg-bottom bg-no-repeat bg-size-210 md:bg-size-190 lg:bg-size-150 xl:bg-size-90 md:bg-center min-h-screen-header bg-darkbg'
        ></section>

        {/* ========================= TENTANG ========================= */}
        <section
          style={{
            background:
              'url(/image/reeva/reeva-wave.svg) center 101%/110% auto, linear-gradient(271.19deg, #A3E1F9 0.35%, #008AD0 45.86%, #044D72 108.23%);',
            backgroundRepeat: 'no-repeat',
          }}
          id='tentang'
          className='bg-reeva-400'
        >
          <article className='flex flex-col gap-8 py-20 md:py-32 md:pb-48 md:flex-row layout'>
            <div className='flex flex-col justify-center w-full text-white'>
              <h2 className='space-y-1 text-3xl md:text-5xl'>
                <span className='block'>Tentang</span>
                <span className='block font-bold font-secondary'>
                  SCHEMATICS REEVA
                </span>
              </h2>
              <p className='mt-6 text-lg font-medium md:max-w-xl md:text-xl'>
                Schematics Revolutionary Entertainments and Expo with Various
                Art 2021 merupakan penutup dari rangkaian acara Schematics.
                Schematics REEVA ini akan digelar dengan menghadirkan expo dan
                konser musik dengan talkshow bersama sederet bintang tamu.
              </p>
              <ul className='mt-6 ml-4 text-lg list-disc'>
                <li>Schematics REEVA dapat diikuti oleh masyarakat umum</li>
                <li>Schematics REEVA dapat diakses melalui Youtube</li>
              </ul>
            </div>
            <div className='flex items-center justify-center w-full'>
              <figure className='w-11/12 max-w-[350px]'>
                <Slider {...settings}>
                  {sliderContent.map(({ id, src }) => (
                    <div key={id}>
                      <img
                        src={src}
                        alt={`Reeva ${id}`}
                        className='w-[450px]'
                      />
                    </div>
                  ))}
                </Slider>
              </figure>
            </div>
          </article>
        </section>
        <section className='text-white bg-darkbg' id='pembicara'>
          <div className='py-12 layout'>
            {reevaContents.map((item) => (
              <div
                id={item.name}
                key={item.id}
                className={classNames(
                  'flex flex-col items-center py-10  xl:py-0 last-of-type:pb-20',
                  item.reverse
                    ? 'xl:flex-row-reverse'
                    : 'xl:flex-row xl:space-x-28'
                )}
              >
                <img alt={`robot-reeva-${item.id}`} src={item.image} />
                <div>
                  <h3 className='mt-6 text-4xl text-center xl:text-left xl:text-5xl xl:mt-0'>
                    {item.firstTitle} <br /> {item.secondTile.toUpperCase()}
                  </h3>
                  <div className='flex justify-center xl:justify-start'>
                    <div className='inline-block rounded-full mt-10 items-center bg-[#00A9FF]'>
                      <div className='flex items-center'>
                        <img
                          alt='reeva calendar'
                          src='/image/reeva/reeva-calendar.png'
                        />
                        <p className='text-lg xl:text-[24px] text-black pl-2 pr-3'>
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className='mt-6 text-lg text-center xl:text-left'>
                    {item.description}
                  </p>
                  <UnstyledLink
                    href={item.link}
                    className='flex justify-center xl:justify-start'
                  >
                    <span
                      className={`hover:bg-reeva-700 mt-7 bg-[#008AD0] text-white text-base xl:text-4xl flex gap-1 xl:gap-2 justify-center items-center font-bold px-4 ${
                        item.id === 1 ? 'py-2' : 'py-4'
                      } mb-10`}
                    >
                      {item.id === 1 && (
                        <AiFillYoutube className='text-3xl xl:text-6xl' />
                      )}
                      {item.button}
                    </span>
                  </UnstyledLink>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

const reevaContents = [
  {
    id: 1,
    firstTitle: 'Schematics REEVA',
    secondTile: 'Virtual Concert',
    image: '/image/reeva/robot-1.png',
    date: '30 Oktober 2021 18.30 WIB',
    description:
      'Konser virtual yang dapat dinikmati masyarakat umum. Catat tanggalnya agar tidak ketinggalan!',
    button: 'AKSES DI SINI!',
    reverse: false,
    link: 'https://www.youtube.com/watch?v=Tu_e_frNr8U',
    name: 'concert',
  },
  {
    id: 2,
    firstTitle: 'Schematics REEVA',
    secondTile: 'Virtual expo',
    image: '/image/reeva/robot-2.png',
    date: '11 Oktober - 5 November 2021',
    description:
      'Kami hadir dengan virtual expo yang akan mengajak anda untuk menjelajahi segala tentang Teknik Informatika ITS.',
    button: 'COBA SEKARANG!',
    reverse: true,
    link: '/sch-reeva/virtual-expo',
    name: 'expo',
  },
  {
    id: 3,
    firstTitle: 'Schematics REEVA',
    secondTile: 'Donation',
    image: '/image/reeva/robot-3.png',
    date: '11 Oktober - 5 November 2021',
    description:
      'Mari membantu yang membutuhkan melalui donasi Schematics REEVA.',
    button: 'DONASI SEKARANG!',
    reverse: false,
    link: '/sch-reeva/live-donation',
    name: 'donasi',
  },
];

const cta = [
  { link: '#tentang', text: 'Tentang SCH reeva' },
  { link: '#expo', text: 'Virtual Expo' },
  { link: '#donasi', text: 'Donasi' },
  { link: '#concert', text: 'Virtual Concert' },
];

const sliderContent = [
  {
    id: '1',
    src: '/image/reeva/reeva-group-1.png',
  },
  {
    id: '2',
    src: '/image/reeva/reeva-group-2.png',
  },
  {
    id: '3',
    src: '/image/reeva/reeva-group-3.png',
  },
  {
    id: '4',
    src: '/image/reeva/reeva-group-4.png',
  },
];

function SlickArrow({ className, type, onClick }) {
  const isPrev = type === 'prev';
  return (
    <button
      className={classNames(
        'flex items-center justify-center md:w-11 w-8 md:h-11 h-8 rounded-full bg-[#03AAFF] focus:bg-[#03AAFF] hover:bg-[#03AAFF] hover:brightness-95 slick-no-pseudoelement z-10 text-5xl',
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
