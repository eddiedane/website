import { cn } from '@/lib/utils';

export type Info = {
  type: string;
  value: string | string[] | React.ReactElement;
};

export default function ProjectInfo({ info }: { info: Info[] }) {
  return (
    <ul
      className={cn(
        'self-start flex lg:flex-col lg:gap-6 gap-8 flex-nowrap lg:shrink',
        'lg:overflow-x-visible overflow-x-auto scrollbar-hidden',
        'lg:max-w-60 max-w-full',
        'px-5 sm:px-10 lg:px-0',
        'select-none',
      )}
    >
      {info.map(({ type, value }, i) => (
        <InfoItem key={i} type={type} value={value} />
      ))}
    </ul>
  );
}

function InfoItem({ type, value }: Info) {
  return (
    <li
      tabIndex={0}
      className={cn(
        'flex flex-col tracking-wide',
        'text-stone-500 hover:text-inherit focus:text-inherit',
        'transition-all duration-300 lg:duration-500 lg:delay-75',
        'lg:translate-x-0 lg:hover:translate-x-7 lg:focus:translate-x-7',
        'lg:scale-100 lg:hover:scale-x-110 lg:focus:scale-110',
        'w-full',
      )}
    >
      <strong className='capitalize text-lg font-black text-50'>{type}</strong>
      <InfoValue value={value} />
    </li>
  );
}

function InfoValue({ value }: { value: string | string[] | React.ReactElement }) {
  return Array.isArray(value) ? (
    <InfoListValue value={value} />
  ) : typeof value === 'string' ? (
    <small className='tracking-widest'>{value}</small>
  ) : (
    value
  );
}

function InfoListValue({ value }: { value: string[] }) {
  return (
    <ul>
      {value.map((text, i) => (
        <li key={i}>
          <small>{text}</small>
        </li>
      ))}
    </ul>
  );
}
