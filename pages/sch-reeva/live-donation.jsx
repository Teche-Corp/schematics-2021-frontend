import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Seo from '@/components/Seo';
import UnstyledLink from '@/components/UnstyledLink';
import { ArrowRightIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useState, useEffect } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Slider from 'react-slick';

export default function LiveDonation() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://schematics.its.ac.id/reeva_api/info_donasi')
      .then((res) => setData(res.data));
  }, []);

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
    <>
      <Seo title='Schematics Reeva Donation Live Count' />
      <Header />
      <main className='overflow-x-hidden'>
        <section
          style={{
            backgroundImage: 'url(/image/reeva/donation/donation-bg.png)',
            backgroundRepeat: 'no-repeat',
          }}
          className='bg-center bg-contain md:bg-center-right lg:top-right lg:bg-size-70 xl:bg-top-right bg-darkbg'
        >
          {/* Min height to compromise header height */}
          <article className='flex items-center justify-center py-10 text-center text-white min-h-screen-header layout'>
            <div className='flex flex-col justify-center gap-6 text-left lg:gap-8 lg:pl-10 lg:w-1/2 xl:w-[65%]'>
              <h1 className='text-4xl text-center sm:text-5xl xl:text-8xl lg:text-left'>
                Mari Berdonasi.
              </h1>
              <div className='flex justify-center lg:hidden align-center'>
                <img
                  src='/image/reeva/robot-3.png'
                  alt='reeva icon'
                  className='self-center object-cover w-[260px] md:w-[280px] lg:w-[700px] select-none lg:hidden'
                />
              </div>
              <p className='text-lg text-center sm:text-lg xl:w-[75%] lg:text-left'>
                Untuk meningkatkan kualitas hidup dan memberikan layanan
                psikososial bagi anak pejuang kanker.
              </p>
              <div className='flex flex-col items-center gap-4 pt-5 -mt-5 lg:flex-row lg:gap-20'>
                {cta.map(({ link, text }) => (
                  <UnstyledLink
                    key={link}
                    href={link}
                    className='flex items-center justify-center px-4 py-2 text-base font-bold text-black bg-white border border-transparent shadow-md hover:bg-gray-100 rounded-3xl sm:px-8'
                  >
                    <span className='font-bold md:text-lg'>{text}</span>
                  </UnstyledLink>
                ))}
              </div>
            </div>
            <div className='items-center justify-center hidden lg:w-1/2 xl:w-[35%] lg:flex'>
              <img
                src='/image/reeva/robot-4.png'
                alt='reeva icon'
                className='w-[422px] relative bottom-12 select-none'
              />
            </div>
          </article>
        </section>

        {/* main donation */}
        <section
          id='donasi'
          style={{
            background:
              'linear-gradient(277.06deg, #C3E9FD 0%, #77BDDE 19.69%, #008AD0 86.89%)',
          }}
        >
          <article className='flex flex-col items-center justify-center gap-8 py-10 text-white lg:py-12 md:gap-12 layout'>
            <div className='h-full layout'>
              <div className='flex flex-col items-center gap-10 lg:flex-row'>
                <div className='flex flex-col items-start text-left lg:w-2/3'>
                  <h2 className='font-secondary'>Donasi Saat ini</h2>
                  <p className='p-2 mt-4 -ml-1 text-lg text-left'>
                    Rincian donasi yang terkumpul hingga hari ini. Ayo, jadilah
                    bagian dari kami untuk membantu teman-teman dari Pita
                    Kuning!
                  </p>
                  <div className='grid grid-cols-1 mt-7 md:grid-cols-2 gap-x-16 gap-y-8'>
                    <div>
                      <div className='relative'>
                        <img
                          className='w-[25.37px] h-[18.12px] absolute top-0 left-0 select-none'
                          src='/image/reeva/coin.png'
                          alt=''
                        />
                        <p className='ml-8 uppercase'>Jumlah yang terkumpul</p>
                      </div>
                      {/* data */}
                      <h3>
                        Rp{' '}
                        {data.total_saldo
                          ? data.total_saldo.toLocaleString(
                              navigator.language,
                              { minimumFractionDigits: 0 }
                            )
                          : '-'}
                      </h3>
                    </div>
                    <div>
                      <div className='relative'>
                        <img
                          className='w-[24px] absolute -top-1 md:top-0 select-none'
                          src='/image/reeva/multi-user.png'
                          alt=''
                        />
                        <p className='ml-8 uppercase'>Jumlah pendonasi</p>
                      </div>
                      {/* data */}

                      <h3>
                        {data.total_transaksi ? (
                          data.total_transaksi + ' Orang'
                        ) : (
                          <span className='ml-9'>-</span>
                        )}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center lg:w-1/3'>
                  <div className='p-3 bg-white'>
                    <img
                      className='h-[200px] object-scale-down w-auto sm:h-[250px] select-none'
                      src='/image/qris.jpg'
                      alt='schematics qris'
                    />
                    <p className='mt-2 ml-2 text-sm font-bold text-black uppercase lg:text-md'>
                      Pindai QRIS ini
                    </p>
                    <div className='relative'>
                      <p className='ml-2 -mt-1 text-sm font-bold text-black uppercase md:text-md'>
                        untuk berdonasi.
                      </p>
                      <img
                        className='absolute select-none right-0 -translate-y-1/2 translate-x-1/2 w-[175px] lg:w-[300px]'
                        src='/image/reeva/reeva-ticket.png'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* articles */}

        <section
          id='articles'
          style={{
            backgroundImage: 'url(/image/reeva/black-bg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1000px',
          }}
          className='bg-left bg-cover bg-dark'
        >
          <article className='flex flex-col items-center justify-center gap-8 py-12 text-white md:py-24 md:gap-12 layout'>
            <div className='flex layout'>
              <div className='flex flex-col items-center gap-10 mb-4 xl:flex-row'>
                <div className='flex flex-col items-start gap-4 text-left lg:w-2/3'>
                  <h2 className='font-secondary'>Yayasan Pita Kuning</h2>
                  <p className='p-2 -ml-1 text-left md:text-lg text-md'>
                    Yayasan Pita Kuning Anak Indonesia (Pita Kuning) adalah
                    yayasan filantropi bagi anak dengan kanker dari keluarga
                    pra-sejahtera, untuk meningkatkan kualitas hidup dan
                    memberikan layanan psikososial bagi anak pejuang kanker.
                    Setelah membantu lebih dari 8 ribu anak pejuang kanker sejak
                    berdiri di tahun 2007, Pita Kuning kini fokus memberikan
                    pendampingan berkala bagi anak pejuang kanker beserta
                    keluarganya dengan mekanisme keanggotaan (membership).
                  </p>
                  <UnstyledLink
                    href='https://pitakuning.or.id/'
                    className='relative mt-4 ml-1 text-xl'
                  >
                    pitakuning.or.id{' '}
                    <ArrowRightIcon className='absolute w-5 p-[3px] translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-dark -right-6 top-4' />
                  </UnstyledLink>
                </div>
                <figure className='w-full xl:w-1/2'>
                  <LiteYouTubeEmbed
                    wrapperClass='yt-lite max-w-[400px] xl:max-w-[533px] mx-auto'
                    id='7015W6fBTgQ'
                    poster='maxresdefault'
                    noCookie={true}
                  />
                </figure>
              </div>
            </div>

            {/* Story of APK */}

            <div className='flex flex-col items-center justify-center gap-12 mt-10 bg-contain layout'>
              <h1 className='text-center font-secondary'>#StoryOfAPK</h1>
              <div className='grid grid-cols-1 mt-6 lg:grid-cols-2 gap-x-16 gap-y-12'>
                {artics.map((person, id) => {
                  return (
                    <div
                      key={id}
                      className='flex items-center justify-center gap-6'
                    >
                      <div className='flex flex-col items-center w-64 gap-5 sm:w-1/2 lg:w-full sm:gap-3 sm:items-start'>
                        <h3 className='text-2xl uppercase'>{person.nama}</h3>
                        <img
                          src={person.img}
                          alt={person.nama}
                          className='w-[140px] sm:hidden block h-auto object-cover'
                        />
                        <p className='text-center text-md sm:text-left'>
                          {person.text}
                        </p>
                      </div>
                      <img
                        src={person.img}
                        alt={person.nama}
                        className='w-[140px] hidden sm:block h-auto object-cover'
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Galeri Foto */}

            <div className='flex flex-col justify-center mt-10 align-center'>
              <h1 className='text-center font-secondary'>Galeri Foto</h1>
              <div className='relative'>
                <Slider
                  {...settings}
                  className='w-full max-w-sm mx-auto mt-10 sm:max-w-2xl md:max-w-4xl'
                >
                  {sliderContent.map((e) => {
                    return (
                      <div key={e.id} className={e.id}>
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
          </article>
        </section>
        <Footer />
      </main>
    </>
  );
}

const cta = [{ link: '#donasi', text: 'Donasi Sekarang!' }];

const artics = [
  {
    nama: 'Fajar',
    text: 'Halo, kakak. Aku Fajar, umurku sekarang 12 tahun. Aku suka banget main bola setiap hari agar betis aku kuat dan keras.',
    img: '/image/reeva/fajar.png',
  },
  {
    nama: 'Zaini',
    text: 'Hai, Kakak. Aku Zaini, aku terdiagnosa kanker testis atau Yolk Sac Tumor sejak usiaku 8 bulan. Umurku sekarang 6 tahun, aku suka bermain bola.',
    img: '/image/reeva/zaini.png',
  },
  {
    nama: 'Besta',
    text: 'Halo, Aku Besta! Umurku 7 tahun aku terdiagnosis kanker mata atau retinoblastoma saat umur 3,5 tahun. Aku suka banget main slime sama teman-teman.',
    img: '/image/reeva/besta.png',
  },
];

const sliderContent = [
  {
    id: '1',
    href: '/image/reeva/donation/donation-1.jpg',
  },
  {
    id: '2',
    href: '/image/reeva/donation/donation-2.jpg',
  },
  {
    id: '3',
    href: '/image/reeva/donation/donation-3.JPG',
  },
  {
    id: '4',
    href: '/image/reeva/donation/donation-4.jpg',
  },
  {
    id: '5',
    href: '/image/reeva/donation/donation-5.JPG',
  },
  {
    id: '6',
    href: '/image/reeva/donation/donation-6.JPG',
  },
];
