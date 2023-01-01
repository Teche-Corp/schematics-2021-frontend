import UnstyledLink from './UnstyledLink';

export default function Footer() {
  return (
    <footer className='bg-black' aria-labelledby='footerHeading'>
      <h2 id='footerHeading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-md px-4 pt-12 mx-auto sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-2'>
            <p className='mt-6 text-xl text-left text-white sm:max-w-3xl'>
              <span className='font-bold'>Reviving</span> the{' '}
              <span className='font-bold'>Soul</span> of{' '}
              <span className='font-bold'>Technology</span> <br />
              through <span className='font-bold'>Art</span> and{' '}
              <span className='font-bold'>Logic</span>
            </p>
            <div className='flex space-x-6'>
              {footerNavigation.social.map((item) => (
                <UnstyledLink
                  key={item.name}
                  href={item.href}
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='w-6 h-6' aria-hidden='true' />
                </UnstyledLink>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-8 mt-12 xl:mt-0 xl:col-span-1'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold tracking-wider text-gray-400 uppercase'>
                  Events
                </h3>
                <ul className='mt-4 space-y-4'>
                  {footerNavigation.events.map((item) => (
                    <li key={item.id}>
                      <UnstyledLink
                        href={item.href}
                        className='text-base text-white hover:text-gray-200'
                      >
                        {item.name}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold tracking-wider text-gray-400 uppercase'>
                  Quick Link
                </h3>
                <ul className='mt-4 space-y-4'>
                  {footerNavigation.quick_links.map((item) => (
                    <li key={item.name}>
                      <UnstyledLink
                        href={item.href}
                        className='font-bold text-white hover:text-gray-200'
                      >
                        {item.name}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end py-8 mt-12 border-t border-gray-200'>
          <img src='/image/white-logo.svg' alt='schematics white logo' />
        </div>
      </div>
    </footer>
  );
}

const footerNavigation = {
  events: [
    {
      id: 'nlc',
      name: (
        <p>
          Schematics <span className='font-bold text-nlc'>NLC</span>
        </p>
      ),
      href: '/schematics-nlc',
    },
    {
      id: 'npc',
      name: (
        <p>
          Schematics <span className='font-bold text-npc'>NPC</span>
        </p>
      ),
      href: '/schematics-npc',
    },
    {
      id: 'nst',
      name: (
        <p>
          Schematics <span className='font-bold text-nst'>NST</span>
        </p>
      ),
      href: '/schematics-nst',
    },
    {
      id: 'reeva',
      name: (
        <p>
          Schematics <span className='font-bold text-reeva'>REEVA</span>
        </p>
      ),
      href: '/schematics-reeva',
    },
  ],
  quick_links: [
    // {
    //   name: 'Virtual Expo ',

    //   href: '#',
    // },
    // { name: 'Schemastore', href: '#' },
    { name: 'About Us', href: '/about' },
    { name: 'Login', href: 'https://schematics.its.ac.id/dashboard' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/schematics_its',
      icon: (props) => <img src='/image/twitter.svg' alt='twitter logo' />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/schematics.its/',
      icon: (props) => <img src='/image/instagram.svg' alt='instagram logo' />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/schematicshmtc',
      icon: (props) => <img src='/image/facebook.svg' alt='facebook logo' />,
    },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/channel/UCry-PhEw0TWERzp69HeRFpA',
      icon: (props) => <img src='/image/youtube.svg' alt='youtube logo' />,
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/company/schematicsits',
      icon: (props) => <img src='/image/linkedin.svg' alt='linkedin logo' />,
    },
    {
      name: 'Line',
      href: 'https://line.me/R/ti/p/%40qie3870y',
      icon: (props) => <img src='/image/line.svg' alt='line logo' />,
    },
    {
      name: 'Tiktok',
      href: 'https://www.tiktok.com/@schematics.its?lang=id',
      icon: (props) => <img src='/image/tiktok.svg' alt='tiktok logo' />,
    },
  ],
};
