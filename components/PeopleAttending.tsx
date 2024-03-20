import Image from 'next/image';
import malikPic from '@/app/malik.jpeg';

export default function PeopleAttending() {
  return (
    <div className='animate-in flex-1 flex flex-col gap-30 opacity-0 max-w-4xl px-3 text-lg'>
      <a
        href='#'
        className='block max-w-2xl p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'
      >
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Who's joining?
        </h5>
        <div className='flex gap-5'>
          <Image
            className='rounded-xl'
            placeholder='blur'
            src={malikPic}
            alt='Malik'
            width={180}
            height={180}
          />
          <p className='text-gray-500 dark:text-gray-400'>
            I'm Malik. I was born in Lisbon and moved to Berlin where I work in
            product enablement (what the industry calls Product Manager). In my
            free time, you can find me reading books, tinkering with code and
            design, strolling through town, singing and recording music, and
            learning something new.
          </p>
        </div>
      </a>
    </div>
  );
}
