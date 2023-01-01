import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Seo(props) {
  const router = useRouter();
  const meta = {
    title:
      'Schematics 2021 | Reviving the Soul of Technology through Art and Logic.',
    description:
      'Schematics merupakan singkatan dari National Seminar of Technology, Art Exhibition, National Logic Contest, National Programming Contest, and Alumni Rendezvous of Informatics.',
    image: 'https://schematics.its.ac.id/favicon/large-og.png',
    type: 'website',
    robots: 'follow, index',
    ...props,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta
        property='og:url'
        content={`https://schematics.its.ac.id${router.asPath}`}
      />
      <link
        rel='canonical'
        href={`https://schematics.its.ac.id${router.asPath}`}
      />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Schematics ITS' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@schematics_its' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Schematics ITS'
          />
        </>
      )}
      <link
        rel='canonical'
        href={`https://schematics.its.ac.id${router.asPath}`}
      />
    </Head>
  );
}
