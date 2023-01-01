import Slider from 'react-slick';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { HiChevronLeft, HiChevronRight, HiUsers } from 'react-icons/hi';

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
      <Seo title='Schematics NPC' />
      <Header />
      <main className='overflow-x-hidden'>
        <section
          style={{
            backgroundImage: 'url(/image/npc/npc-bg.jpg)',
            backgroundRepeat: 'no-repeat',
          }}
          className='bg-bottom bg-contain md:bg-cover bg-darkbg'
        >
          {/* Min height to compromise header height */}
          <article className='flex flex-col items-center gap-8 text-center text-white py-14 md:gap-12 min-h-screen-header layout'>
            <span className='py-2 px-4 inline-block rounded-full text-lg font-black md:text-2xl bg-gradient-to-r from-[#C93D45] to-[#F08288]'>
              SCHEMATICS NPC
            </span>
            <h1 className='text-5xl md:text-7xl'>
              National
              <br />
              Programming Contest
            </h1>
            <div className='flex flex-col items-center gap-4 pt-5 md:flex-row md:gap-20'>
              {cta.map(({ link, text }) => (
                <UnstyledLink
                  key={link}
                  href={link}
                  className='text-lg font-bold uppercase transition-colors border-b-2 border-current md:text-lg hover:text-npc focus:text-npc active:brightness-95'
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
              'url(/image/nlc/wave-bottom.svg) center 101%/110% auto, linear-gradient(135.59deg, #C93D45 -14.26%, #fd7d7e 88.14%)',
            backgroundRepeat: 'no-repeat',
          }}
          id='tentang'
          className='bg-[#C93D45]'
        >
          <article className='flex flex-col gap-8 py-20 md:py-32 md:pb-48 md:flex-row layout'>
            <div className='flex flex-col justify-center w-full'>
              <h2 className='space-y-1 text-3xl text-white md:text-5xl'>
                <span className='block'>Tentang</span>
                <span className='block font-normal font-secondary'>
                  Kompetisi
                </span>
              </h2>
              <p className='mt-6 text-lg font-medium md:max-w-xl md:text-xl'>
                Schematics National Programming Contest 2021 merupakan kompetisi
                pemrograman nasional yang menguji kemampuan penyelesaian suatu
                permasalahan dengan algoritma yang paling efektif dan efisien
                menggunakan program komputer dengan spesifikasi yang telah
                ditentukan. Schematics NPC Junior dapat diikuti oleh siswa
                SMA/Sederajat secara perorangan dan Schematics NPC Senior dapat
                diikuti oleh tim beranggotakan maksimal 3 mahasiswa.
              </p>
            </div>
            <div className='flex items-center justify-center w-full'>
              <figure className='w-11/12 max-w-[350px]'>
                <Slider {...settings}>
                  {sliderContent.map(({ id, src }) => (
                    <div key={id}>
                      <img src={src} alt={`NPC ${id}`} className='w-[450px]' />
                    </div>
                  ))}
                </Slider>
              </figure>
            </div>
          </article>
        </section>

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
                  Schematics NPC Junior dapat diikuti oleh siswa SMA/Sederajat
                  secara perorangan dan Schematics NPC Senior dapat diikuti oleh
                  tim beranggotakan maksimal 3 mahasiswa.
                </li>
                <li>
                  Kegiatan diadakan secara online melalui website schematics
                </li>
              </ul>
            </div>

            <figure className='mt-10'>
              <LiteYouTubeEmbed
                wrapperClass='yt-lite aspect-125 max-w-[400px] 2xl:max-w-[500px]  mx-auto'
                id='0yh0UehCC68'
                poster='maxresdefault'
                noCookie={true}
              />
            </figure>
          </article>
        </section>

        {/* ========================= TIMELINE ========================= */}
        <section className='bg-darkbg' id='timeline'>
          <article className='text-white layout min-h-screen-header py-14'>
            <h2 className='relative space-y-1 text-3xl text-center text-white md:text-5xl'>
              <img
                className='absolute top-0 w-20 h-20 p-0 m-0 -translate-y-1/2 sm:w-40 sm:h-40 md:w-56 md:h-56 -right-1 md:-right-7'
                src='/image/npc/sandclock.png'
                alt='sandclock icon'
              />
              <img
                className='absolute hidden w-48 h-40 sm:block md:w-56 md:h-48 lg:w-64 lg:h-56 -left-7 md:-left-8 top-64 sm:top-56 lg:top-52'
                src='/image/npc/binarytree.png'
                alt='binary tree icon'
              />
              <span className='block font-normal font-secondary'>Timeline</span>
              <span className='block'>Kegiatan</span>
            </h2>
            <div className='mt-12'>
              <Timeline data={dataTimeline} type='npc' />
            </div>
            <div className='relative'>
              <img
                className='absolute hidden p-0 m-0 -translate-y-1/2 sm:block -top-20 sm:w-20 sm:h-44 right-5 lg:right-10'
                src='/image/npc/semicolon.png'
                alt='semicolon icon'
              />
            </div>
          </article>
        </section>

        <section
          style={{
            background:
              'linear-gradient(135.59deg, #C93D45 -14.26%, #fd7d7e 88.14%)',
            backgroundRepeat: 'no-repeat',
          }}
          id='daftar'
          className='bg-[#C93D45]'
        >
          <article className='flex flex-col gap-8 py-12 sm:flex-row layout'>
            <div className='flex flex-col justify-center w-full'>
              <div>
                <p className='space-y-1 text-xl font-bold text-white md:text-2xl'>
                  TOTAL HADIAH
                </p>
                <p className='mt-5 space-y-1 text-3xl font-bold text-white sm:truncate md:text-4xl'>
                  15 Juta Rupiah ++
                </p>
              </div>
              <div className='mt-12'>
                <div className='relative inline-block px-4 py-1 pl-8 font-bold uppercase bg-white rounded-full shadow-lg md:pl-12'>
                  <p className='text-[#C93D45] truncate tracking-wide font-bold font-secondary text-xl md:text-2xl'>
                    BIAYA PENDAFTARAN
                  </p>
                  <img
                    className='absolute w-16 h-16 -translate-y-1/2 md:w-20 md:h-20 -left-6 top-1/2'
                    src='/image/npc/tickets.png'
                    alt='Ticket Icon'
                  />
                </div>
                <p className='mt-6 text-lg font-bold tracking-wide text-white'>
                  Junior: Rp50.000 | Senior: Rp120.000
                </p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full gap-4 mt-4 md:gap-6'>
              <div className='flex items-center w-full justify-left lg:justify-center'>
                <UnstyledLink
                  className='inline-block px-4 py-2 text-xl font-extrabold tracking-wide uppercase truncate transition duration-200 bg-white shadow-lg hover:bg-gray-200 md:text-3xl text-npc'
                  href='/sch-npc/guidebook#junior'
                >
                  JUNIOR GUIDEBOOK
                </UnstyledLink>
              </div>
              <div className='flex items-center w-full justify-left lg:justify-center'>
                <UnstyledLink
                  className='inline-block px-4 py-2 text-xl font-extrabold tracking-wide uppercase truncate transition duration-200 bg-white shadow-lg hover:bg-gray-200 md:text-3xl text-npc'
                  href='/sch-npc/guidebook#senior'
                >
                  SENIOR GUIDEBOOK
                </UnstyledLink>
              </div>
              <div className='flex items-center w-full justify-left lg:justify-center'>
                <UnstyledLink
                  className='truncate text-xl transition duration-200 hover:bg-[#c93d44c7] md:text-3xl tracking-wide inline-block px-4 py-2 bg-npc uppercase font-extrabold shadow-lg text-white'
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
  { link: '#daftar', text: 'Daftar Sekarang!' },
];

const sliderContent = [
  {
    id: '1',
    src: '/image/npc/NPC-1.jpg',
  },
  {
    id: '2',
    src: '/image/npc/NPC-2.jpg',
  },
  {
    id: '3',
    src: '/image/npc/NPC-3.jpg',
  },
  {
    id: '4',
    src: '/image/npc/NPC-4.jpg',
  },
];

const dataTimeline = [
  {
    id: 1,
    target: 'Pendaftaran',
    date: '18 Juli - 20 September',
    // Month starts from 0
    datetime: new Date(2021, 6, 18),
    dateend: new Date(2021, 8, 20, 23, 59, 59),
    icon: RegistrationIcon,
    iconBackground: 'bg-darkbg',
  },
  {
    id: 2,
    target: 'Masa Tutorial',
    date: '6 Agustus - 10 September',
    datetime: new Date(2021, 7, 6),
    dateend: new Date(2021, 8, 10, 23, 59, 59),
    icon: WarmUpIcon,
    iconBackground: 'bg-darkbg',
  },
  {
    id: 3,
    target: 'Warm Up',
    date: '24 September',
    datetime: new Date(2021, 8, 24),
    icon: ComputerBadgeIcon,
    iconBackground: 'bg-darkbg',
  },
  {
    id: 4,
    target: 'Penyisihan',
    date: '25 September',
    datetime: new Date(2021, 8, 25),
    icon: HiUsers,
    iconBackground: 'bg-darkbg',
  },
  {
    id: 5,
    target: 'Pengumuman Finalis',
    date: '2 Oktober',
    datetime: new Date(2021, 9, 2),
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
        'flex items-center justify-center md:w-11 w-8 md:h-11 h-8 rounded-full bg-[#C93D45] focus:bg-[#C93D45] hover:bg-[#C93D45] hover:brightness-95 slick-no-pseudoelement z-10 text-5xl',
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
