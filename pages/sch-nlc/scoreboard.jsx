import Seo from '@/components/Seo';
import Header from '@/components/Header';
import UnstyledLink from '@/components/UnstyledLink';
import Sponsorship from '@/components/Sponsorship';

export default function Scoreboard() {
  return (
    <>
      <Seo title='Schematics NLC Scoreboard' />
      <Header />
      <main className='overflow-x-hidden'>
        <section className='bg-bottom bg-contain md:bg-cover bg-darkbg'>
          <article className='flex items-center justify-center py-32 text-center text-white layout min-h-screen-header'>
            <div>
              <h1 className='mb-20 text-5xl md:text-7xl'>
                Schematics NLC 2021
              </h1>
              <h3 className='mb-8 text-2xl md:text-4xl'>Scoreboard</h3>
              <div className='flex flex-col items-center justify-center gap-4 md:flex-row md:gap-20'>
                {cta.map(({ link, text }) => (
                  <UnstyledLink
                    key={link}
                    href={link}
                    className='px-6 py-3 text-lg font-bold uppercase transition-colors rounded bg-dark-400 md:text-lg hover:text-nlc focus:text-nlc active:brightness-95'
                  >
                    {text}
                  </UnstyledLink>
                ))}
              </div>
            </div>
          </article>
        </section>
        <Sponsorship />
      </main>
    </>
  );
}

const cta = [
  { link: '/sch-nlc/scoreboard/warming-up', text: 'Warming Up' },
  { link: '/sch-nlc/scoreboard/penyisihan', text: 'Penyisihan' },
  // { link: '#', text: 'Semi Final' },
];
