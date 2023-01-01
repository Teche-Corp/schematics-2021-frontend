import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import Seo from '@/components/Seo';
import Header from '@/components/Header';
import UnstyledLink from '@/components/UnstyledLink';
import ScoreboardTable from '@/components/ScoreboardTable';

export default function WarmingUp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://schematics.its.ac.id/api/nlc/penyisihan_scoreboard')
      .then((res) => setData(res.data.data));
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Peringkat',
        accessor: 'peringkat',
      },
      {
        Header: 'Nama Tim',
        accessor: (d) => [d.nama_team, d.nama_sekolah],
        Cell: ({ value }) => {
          const [nama_team, nama_sekolah] = value;
          return (
            <>
              <span className='text-xl font-bold'>{nama_team}</span>
              <br />
              <span>{nama_sekolah}</span>
            </>
          );
        },
      },
      {
        Header: 'Region',
        accessor: 'nama_region',
      },
      {
        Header: 'Skor Total',
        accessor: 'skor_total',
      },
      {
        Header: 'Keterangan',
        accessor: 'description',
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Seo title='Schematics NLC Scoreboard' />
      <Header />
      <main className='overflow-x-hidden'>
        <section className='bg-bottom bg-contain md:bg-cover bg-darkbg'>
          <article className='py-24 text-center text-white layout max-w-7xl min-h-screen-header'>
            <h1 className='mb-8 text-5xl md:text-7xl'>Schematics NLC 2021</h1>
            <div className='flex flex-col items-center justify-center gap-4 mb-20 md:flex-row md:gap-20'>
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
            <h3 className='mb-4 text-2xl md:text-4xl'>Babak Penyisihan</h3>
            <ScoreboardTable columns={columns} data={data} />
          </article>
        </section>
      </main>
    </>
  );
}

const cta = [
  { link: '/sch-nlc/scoreboard/warming-up', text: 'Warming Up' },
  // { link: '#', text: 'Semi Final' },
];
