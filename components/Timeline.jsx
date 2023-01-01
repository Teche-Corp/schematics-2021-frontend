import { classNames } from '@/lib/helper';
import { isSameDay, isWithinInterval } from 'date-fns';

export default function Timeline({ data = [], type }) {
  const width = data.length === 5 ? '' : '';

  const colorVariants = {
    nlc: {
      primary: 'text-nlc-100',
      secondary: 'text-nlc-400',
    },
    npc: {
      primary: 'text-npc-700',
      secondary: 'text-npc-400',
    },
  };

  const dataWithSelectedFlag = data.map(({ datetime, dateend, ...item }) => {
    const today = new Date();

    // If has dateend, then check if today is in the middle of radius
    // If don't have dateend, then check if today is same day as datetime
    const isSelected = dateend
      ? isWithinInterval(today, {
          start: datetime,
          end: dateend,
        })
      : isSameDay(today, datetime);

    return { ...item, datetime, isSelected };
  });

  return (
    <div className='flow-root text-gray-400'>
      <ul className='-mb-8'>
        {dataWithSelectedFlag.map(
          ({ id, target, datetime, date, isSelected, ...rest }, eventIdx) => (
            <li key={id} className={classNames(width)}>
              <div className='relative pb-8'>
                {eventIdx !== data.length - 1 ? (
                  <span
                    className='absolute w-1 h-full -ml-px top-4 left-1/2 bg-dark-400'
                    aria-hidden='true'
                  />
                ) : null}
                <div className='relative flex items-center gap-8'>
                  {/* Event Details */}
                  <div className='flex-1 text-right'>
                    {/* //? Using pre so easier when we need to break string, using template literal */}
                    <pre
                      className={classNames(
                        'text-sm font-black uppercase whitespace-pre-wrap md:text-xl margin-auto font-primary',
                        isSelected && colorVariants[type].primary
                      )}
                    >
                      {target}
                    </pre>
                  </div>
                  {/* Logo */}
                  <div>
                    <span
                      className={classNames(
                        'h-9 w-9 md:h-12 md:w-12 rounded-full bg-dark-400 flex items-center justify-center',
                        isSelected &&
                          `${colorVariants[type].primary} border-2 border-current`
                      )}
                    >
                      <rest.icon
                        className='w-6 h-6 md:w-9 md:h-9'
                        aria-hidden='true'
                      />
                    </span>
                  </div>
                  {/* Time */}
                  <div className='flex-1'>
                    <div
                      className={classNames(
                        'text-sm font-bold md:text-lg',
                        isSelected && 'text-white'
                      )}
                    >
                      <time dateTime={datetime}>{date}</time>
                      {isSelected && (
                        <p
                          className={classNames(
                            'text-xs font-black md:text-sm',
                            isSelected && colorVariants[type].secondary
                          )}
                        >
                          SEDANG BERLANGSUNG
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
