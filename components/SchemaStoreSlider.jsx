import Slider from 'react-slick';

import UnstyledLink from './UnstyledLink';
import { dataSchemaStore } from '@/data/schemastore';
import { numberCurrency } from '@/lib/helper';

export default function SchemaStoreSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 400,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  return (
    <section className='py-20 text-white xl:py-40 bg-dark'>
      <div>
        <div className='flex flex-col items-center justify-center xl:flex-row '>
          <div>
            <div className='mb-5 space-y-3 text-center xl:text-left md:space-y-6'>
              <img
                src='/image/schemastore-logo.png'
                alt='schemastore-logo'
                className='w-[160px] h-[56px] mx-auto xl:mx-0'
              />
              <h1 className='font-normal font-secondary'>Schemastore</h1>
              <hr
                className='w-full mx-auto max-w-[250px] py-1 mt-4 border-t-0 rounded-md md:max-w-sm'
                style={{
                  background:
                    'linear-gradient(90deg, #C93D45 0%, #FCCC00 29.69%, #18A488 65.1%, #008AD0 100%)',
                }}
              />
              <p className='max-w-xs'>
                Temukan merchandise keren Schematics di Schemastore!
              </p>
            </div>
            <div className='flex justify-center xl:justify-start'>
              <UnstyledLink
                href='https://www.tokopedia.com/schemastore'
                className='px-4 py-2 font-bold text-black bg-white border-2 rounded-3xl'
              >
                Lihat Semua Merchandise
              </UnstyledLink>
            </div>
          </div>
          <div>
            <Slider
              {...settings}
              className='mt-10 xl:mt-0 w-full max-w-sm xl:px-20 sm:max-w-2xl md:max-w-[900px]'
            >
              {dataSchemaStore.map((e) =>
                e.items.map((e) => {
                  return (
                    <div key={e.name} className='xl:ml-20 focus:outline-none'>
                      <div className='max-w-[224px] h-[354px]   mx-auto '>
                        <div className='pt-4 text-black bg-white md:pb-14'>
                          <UnstyledLink href={e.link}>
                            <div className='bg-[#E5E5E5] mx-3'>
                              <img
                                src={e.image}
                                className='w-[224px] h-[224px] mx-auto'
                              />
                            </div>
                            <div className='py-2 mx-4'>
                              <p className='text-xl font-semibold'>{e.name}</p>
                              <div className='flex my-1 space-x-5 text-sm font-bold'>
                                {!e.discount ? (
                                  <p>IDR {numberCurrency(e.price)}</p>
                                ) : (
                                  <del>IDR {numberCurrency(e.price)}</del>
                                )}
                                {e.discount && (
                                  <p className='text-[#C93D45]'>
                                    IDR {numberCurrency(e.discount)}
                                  </p>
                                )}
                              </div>
                            </div>
                          </UnstyledLink>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
