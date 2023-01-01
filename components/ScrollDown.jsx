export default function ScrollDownArrow({ colorClass = 'text-gray-700' }) {
  return (
    <figure
      className='hidden mt-32 ml-5 cursor-pointer md:inline-block rounded-xl'
      style={{ transform: 'translateX(-50%)' }}
      onClick={(e) => {
        e.preventDefault();
        window.scrollBy({
          top: window.innerHeight - 60,
          left: 0,
          behavior: 'smooth',
        });
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-12 text-white h-1w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z'
        />
      </svg>
    </figure>
  );
}
