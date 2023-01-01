import Slider from 'react-slick';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import {
  HiChevronLeft,
  HiChevronRight,
  HiUserGroup,
  HiUsers,
} from 'react-icons/hi';

import { classNames } from '@/lib/helper';

import MapIcon from '@/components/svg/MapIcon';
import WarmUpIcon from '@/components/svg/WarmUpIcon';
import TrophyIcon from '@/components/svg/TrophyIcon';
import RegistrationIcon from '@/components/svg/RegistrationIcon';
import ComputerBadgeIcon from '@/components/svg/ComputerBadgeIcon';

import Seo from '@/components/Seo';
import Header from '@/components/Header';
import UnstyledLink from '@/components/UnstyledLink';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';

export default function SchematicsNlcPage() {
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
      <Seo title='Schematics NLC' />
      <Header />
      <main className='overflow-x-hidden'>
        <section
          style={{
            backgroundImage: 'url(/image/nlc/hero.jpg)',
            backgroundRepeat: 'no-repeat',
          }}
          className='bg-bottom bg-contain md:bg-cover bg-darkbg'
        >
          {/* Min height to compromise header height */}
          <article className='flex flex-col items-center gap-8 text-center text-white py-14 md:gap-12 min-h-screen-header layout'>
            <span className='py-2 px-4 inline-block rounded-full text-lg font-black md:text-2xl bg-gradient-to-r from-[#FE6523] to-[#FDC80C]'>
              SCHEMATICS NLC
            </span>
            <h1 className='text-5xl md:text-7xl'>
              National Logic
              <br /> Competition
            </h1>
            <div className='flex flex-col items-center gap-4 md:flex-row md:gap-20'>
              {cta.map(({ link, text }) => (
                <UnstyledLink
                  key={link}
                  href={link}
                  className='text-lg font-bold uppercase transition-colors border-b-2 border-current md:text-lg hover:text-nlc focus:text-nlc active:brightness-95'
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
              'url(/image/nlc/wave-bottom.svg) center 101%/110% auto, linear-gradient(135.59deg, #EFCE27 -14.26%, #FEB858 88.14%)',
            backgroundRepeat: 'no-repeat',
          }}
          id='tentang'
          className='bg-nlc-400'
        >
          <article className='flex flex-col gap-8 py-20 md:py-32 md:pb-48 md:flex-row layout'>
            <div className='flex flex-col justify-center w-full'>
              <h2 className='space-y-1 text-3xl text-white md:text-5xl'>
                <span className='block'>Tentang</span>
                <span className='block font-normal font-secondary'>
                  Kompetisi
                </span>
              </h2>
              <p className='mt-6 text-lg font-medium md:max-w-md md:text-xl'>
                Schematics National Logic Competition 2021 merupakan kompetisi
                yang menguji kemampuan berpikir secara logis dan analitis
                melalui berbagai persoalan dan permainan menarik.
              </p>
            </div>
            <div className='flex items-center justify-center w-full'>
              <figure className='w-11/12 max-w-[350px]'>
                <Slider {...settings}>
                  {sliderContent.map(({ id, src }) => (
                    <div key={id}>
                      <img src={src} alt={`NLC ${id}`} className='w-[450px]' />
                    </div>
                  ))}
                </Slider>
              </figure>
            </div>
          </article>
        </section>

        {/* ========================= TEKNIS UMUM ========================= */}
        <section className='bg-darkbg'>
          <article className='text-white layout min-h-screen-header py-14'>
            <div className='flex flex-col gap-6 mx-auto md:w-10/12 md:flex-row'>
              {/* pr-8 to make space, but still keeping the right section in the middle */}
              <h2 className='flex flex-col items-start w-full pr-8 space-y-1 text-3xl md:items-end md:text-5xl'>
                <span className='block'>Teknis Umum</span>
                <span className='block font-normal font-secondary'>
                  Kompetisi
                </span>
              </h2>
              {/* ml-4 to compensate ::marker */}
              <ul className='w-full ml-4 space-y-2 text-lg list-disc md:ml-0 md:text-xl'>
                <li>
                  Dapat diikuti oleh satu tim beranggotakan maksimal dua siswa
                  SMA/sederajat
                </li>
                <li>
                  Kegiatan diadakan secara online melalui website schematics
                </li>
              </ul>
            </div>

            <figure className='mt-10'>
              <LiteYouTubeEmbed
                wrapperClass='yt-lite aspect-125 max-w-[400px] 2xl:max-w-[500px]  mx-auto'
                id='PtXivIp7kYM'
                poster='maxresdefault'
                noCookie={true}
              />
            </figure>
          </article>
        </section>

        {/* ========================= TIMELINE KEGIATAN ========================= */}

        <section className='bg-darkbg' id='timeline'>
          <article className='text-white layout min-h-screen-header py-14'>
            <h2 className='relative space-y-1 text-3xl text-center text-white md:text-5xl'>
              <img
                className='absolute top-0 visible w-24 h-24 -translate-y-1/2 md:w-48 md:h-48 -left-4 sm:left-10 md:-left-2 lg:left-10'
                src='/image/nlc/equal.png'
                alt='equals icon'
              />
              <span className='block font-normal font-secondary'>Timeline</span>
              <span className='block'>Kegiatan</span>
            </h2>
            <div className='mt-12'>
              <Timeline data={dataTimeline} type='nlc' />
            </div>
            <div className='relative'>
              <img
                className='absolute hidden md:block md:w-56 md:h-56 -right-8 bottom-8'
                src='/image/nlc/percent.png'
                alt='percent icon'
              />
              <img
                className='absolute hidden -translate-y-1/2 md:block md:w-44 md:h-44 -left-12 lg:-left-10 top-1/2'
                src='/image/nlc/asterisk.png'
                alt='asterisk icon'
              />
            </div>
          </article>
        </section>

        <section
          style={{
            background:
              'linear-gradient(135.59deg, #EFCE27 -14.26%, #FEB858 88.14%)',
            backgroundRepeat: 'no-repeat',
          }}
          id='daftar'
          className='bg-nlc-400'
        >
          <article className='flex flex-col gap-8 py-12 lg:flex-row layout'>
            <div className='flex flex-col justify-center w-full'>
              <div>
                <p className='space-y-1 text-lg font-bold text-white md:text-2xl'>
                  TOTAL HADIAH
                </p>
                <p className='mt-4 space-y-1 text-2xl font-bold text-white sm:truncate md:text-4xl'>
                  17,5 Juta Rupiah ++
                  <br />& Freepass Teknik Informatika ITS*
                </p>
                <p className='font-bold mt-2 md:mt-4 text-md md:text-lg text-[#fe6123]'>
                  *syarat dan ketentuan berlaku
                </p>
              </div>
              <div className='mt-10'>
                <div className='relative inline-block px-4 py-1 pl-8 font-bold uppercase bg-white rounded-full shadow-lg md:pl-12'>
                  <p className='text-[#FE6523] tracking-wide font-bold font-secondary text-lg md:text-xl'>
                    BIAYA PENDAFTARAN
                  </p>
                  <img
                    className='absolute w-16 h-16 -translate-y-1/2 md:w-20 md:h-20 -left-6 top-1/2'
                    src='/image/nlc/ticket.png'
                    alt='Ticket Icon'
                  />
                </div>
                <p className='mt-4 text-lg font-bold text-white md:text-xl'>
                  Rp100.000/tim
                </p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full gap-4 mt-8 md:mt-6 lg:gap-6'>
              <div className='flex items-center w-full justify-left lg:justify-center'>
                <UnstyledLink
                  className='truncate text-xl transition duration-200 hover:bg-gray-100 lg:text-3xl tracking-wide inline-block px-4 py-2 bg-white uppercase font-extrabold shadow-lg text-[#FE6523]'
                  href='/sch-nlc/guidebook'
                >
                  UNDUH GUIDEBOOK
                </UnstyledLink>
              </div>
              <div className='flex items-center w-full justify-left lg:justify-center'>
                <UnstyledLink
                  className='truncate text-xl transition duration-200 hover:bg-[#ED6523] lg:text-3xl tracking-wide inline-block px-4 py-2 bg-[#FE6523] uppercase font-extrabold shadow-lg text-white'
                  href='/dashboard'
                >
                  DAFTAR SEKARANG!
                </UnstyledLink>
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
  { link: '#tentang', text: 'Tentang Kompetisi' },
  { link: '#timeline', text: 'Timeline' },
  { link: '/sch-nlc/scoreboard', text: 'Scoreboard' },
];

const sliderContent = [
  {
    id: '1',
    src: '/image/nlc/NLC-1.jpg',
  },
  {
    id: '2',
    src: '/image/nlc/NLC-2.jpg',
  },
  {
    id: '3',
    src: '/image/nlc/NLC-3.jpg',
  },
  {
    id: '4',
    src: '/image/nlc/NLC-4.jpg',
  },
];

const dataTimeline = [
  {
    id: 1,
    target: 'Pendaftaran',
    date: '3 Juli - 1 Oktober',
    // Month starts from 0
    datetime: new Date(2021, 6, 3),
    dateend: new Date(2021, 9, 1, 23, 59, 59),
    icon: RegistrationIcon,
    iconBackground: 'bg-darkbg',
  },
  {
    id: 2,
    target: 'Warming Up',
    date: '2 - 3 Oktober',
    datetime: new Date(2021, 9, 2),
    dateend: new Date(2021, 9, 3, 23, 59, 59),
    icon: WarmUpIcon,
    iconBackground: 'bg-darkbg',
  },
  {
    id: 3,
    target: 'Penyisihan',
    date: '9 Oktober',
    datetime: new Date(2021, 9, 9),
    icon: HiUserGroup,
    iconBackground: 'bg-darkbg',
  },
  {
    id: 4,
    target: 'Perdelapan  - Perempat Final',
    date: '16 Oktober',
    datetime: new Date(2021, 9, 16),
    icon: HiUsers,
    iconBackground: 'bg-darkbg',
  },
  {
    id: 5,
    target: 'Semi Final',
    date: '17 Oktober',
    datetime: new Date(2021, 9, 17),
    icon: MapIcon,
    iconBackground: 'bg-darkbg',
  },
  {
    id: 6,
    target: `Final Dan
     Awarding Night`,
    date: '17 Oktober',
    datetime: new Date(2021, 9, 17),
    icon: TrophyIcon,
    iconBackground: 'bg-darkbg',
  },
];

function SlickArrow({ className, type, onClick }) {
  const isPrev = type === 'prev';
  return (
    <button
      className={classNames(
        'flex items-center justify-center md:w-11 w-8 md:h-11 h-8 rounded-full bg-nlc-700 focus:bg-nlc-700 hover:bg-nlc-700 hover:brightness-95 slick-no-pseudoelement z-10 text-5xl',
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
