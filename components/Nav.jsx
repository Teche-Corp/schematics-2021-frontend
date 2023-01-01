import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/signup', label: 'Sign Up' },
  { href: 'https://schematics.its.ac.id/dashboard', label: 'Login' },
  { href: '/our-teams', label: 'Our Teams' },
  { href: '/about-us', label: 'Obout Us' },
  { href: '/event/nlc', label: 'NLC' },
  { href: '/event/npc', label: 'NPC' },
  { href: '/event/nsr', label: 'NST' },
  { href: '/event/reeva', label: 'Reeva' },
];

export default function Nav() {
  return (
    <nav className='text-black bg-yellow-200'>
      <ul className='flex items-center justify-between px-8 py-4'>
        <li>
          <Link href='/'>
            <a className='font-bold'>Home</a>
          </Link>
        </li>
        <ul className='flex items-center justify-between space-x-4'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className='hover:text-gray-600'>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
