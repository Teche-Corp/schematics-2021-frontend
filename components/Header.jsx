import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import UnstyledLink from './UnstyledLink';

import {
  HiDesktopComputer,
  HiSpeakerphone,
  HiOutlineSparkles,
} from 'react-icons/hi';

import { BiBrain } from 'react-icons/bi';

const event = [
  {
    name: 'Schematics NLC',
    description: 'Test your logic and problem solving skills!',
    href: '/schematics-nlc',
    bg_event: 'text-nlc',
    icon: BiBrain,
  },
  {
    name: 'Schematics NPC',
    description: 'Dare to try our programming challenge?',
    href: '/schematics-npc',
    bg_event: 'text-npc',
    icon: HiDesktopComputer,
  },
  {
    name: 'Schematics NST',
    description: 'Get a better understanding of technology with us!',
    href: '/schematics-nst',
    bg_event: 'text-nst',
    icon: HiSpeakerphone,
  },
  {
    name: 'Schematics Reeva',
    bg_event: 'text-reeva',
    description: 'The perfect combination between music and technology',
    href: '/schematics-reeva',
    icon: HiOutlineSparkles,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Popover className='sticky top-0 z-20 text-white bg-black'>
      {({ open }) => (
        <>
          <div className='flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:justify-end md:space-x-10'>
            <div className=''>
              <Link href='/'>
                <a className='flex'>
                  <span className='sr-only'>Schematics</span>
                  <img
                    className='w-auto h-10 mx-auto max-w-7xl sm:h-12'
                    alt='schematics white-logo'
                    src='/image/white-logo.svg'
                  />
                </a>
              </Link>
            </div>
            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='w-6 h-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <div className='hidden md:flex-1 md:flex md:items-center md:justify-end'>
              <div className='flex items-center md:ml-12'>
                <Popover.Group as='nav' className='flex space-x-10'>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-200' : 'text-white',
                            'group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-200'
                          )}
                        >
                          <span>Events</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-200' : 'text-white',
                              'ml-2 h-5 w-5 group-hover:text-gray-200'
                            )}
                            aria-hidden='true'
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='opacity-0 translate-y-1'
                          enterTo='opacity-100 translate-y-0'
                          leave='transition ease-in duration-150'
                          leaveFrom='opacity-100 translate-y-0'
                          leaveTo='opacity-0 translate-y-1'
                        >
                          <Popover.Panel
                            static
                            className='absolute right-0 z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-xl'
                          >
                            <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                              <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 lg:grid-cols-2'>
                                {event.map((item) => (
                                  <UnstyledLink
                                    key={item.name}
                                    href={item.href}
                                    className='flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50'
                                  >
                                    <div
                                      className={`flex items-center justify-center flex-shrink-0 w-10 h-10 text-white ${item.bg_event} rounded-md sm:h-12 sm:w-12`}
                                    >
                                      <item.icon
                                        className='w-6 h-6'
                                        aria-hidden='true'
                                      />
                                    </div>
                                    <div className='ml-4'>
                                      <p className='text-base font-medium text-gray-900'>
                                        {item.name}
                                      </p>
                                      <p className='mt-1 text-sm text-gray-500'>
                                        {item.description}
                                      </p>
                                    </div>
                                  </UnstyledLink>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  {/* <a
                    href='#'
                    className='text-base font-medium text-white hover:text-gray-200'
                  >
                    Virtual Expo
                  </a>
                  <a
                    href='#'
                    className='text-base font-medium text-white hover:text-gray-200'
                  >
                    Schemastore
                  </a> */}
                  <Link href='/about'>
                    <a className='text-base font-medium text-white hover:text-gray-200'>
                      About Us
                    </a>
                  </Link>
                </Popover.Group>
                <a
                  href='https://schematics.its.ac.id/dashboard'
                  className='inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border-2 border-transparent border-white shadow-sm rounded-3xl'
                >
                  Login
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              static
              className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'
            >
              <div className='bg-gray-900 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='px-5 pt-5 '>
                  <div className='flex items-center justify-between'>
                    <div>
                      <Link href='/'>
                        <a>
                          <img
                            className='w-auto h-8'
                            alt='schematics white-logo'
                            src='/image/white-logo.svg'
                          />
                        </a>
                      </Link>
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 '>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='w-6 h-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <nav className='grid gap-6'>
                      {event.map((item) => (
                        <UnstyledLink
                          key={item.name}
                          href={item.href}
                          className='flex items-center p-3 -m-3 rounded-lg'
                        >
                          <div
                            className={`flex items-center justify-center flex-shrink-0 w-10 h-10 text-white ${item.bg_event} rounded-md`}
                          >
                            <item.icon className='w-6 h-6' aria-hidden='true' />
                          </div>
                          <div className='ml-4 text-base font-medium text-white '>
                            {item.name}
                          </div>
                        </UnstyledLink>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className='px-5 py-6'>
                  <div className='grid grid-cols-2 gap-4'>
                    {resources.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className='text-base font-medium text-white hover:text-gray-200'>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className='mt-6'>
                    <a
                      href='https://schematics.its.ac.id/dashboard'
                      className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border-2 border-transparent border-white shadow-sm rounded-3xl '
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

const resources = [
  // {
  //   name: 'Virtual Expo ',

  //   href: '#',
  // },
  // { name: 'Schemastore', href: '#' },
  { name: 'About Us', href: '/about' },
];
