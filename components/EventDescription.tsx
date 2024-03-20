export default function EventDescription() {
  return (
    <div className='animate-in flex-1 flex flex-col gap-30 opacity-0 max-w-4xl px-3 text-lg'>
      <a
        href='#'
        className='block max-w-2xl p-6 bg-white border-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700'
      >
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          More details
        </h5>
        <p className='mb-3 text-gray-500 dark:text-gray-400'>
          This is an offline community for people who want to leave their
          bubble, meet open minded people, have deep conversations and improve
          society. I organise an event every other Sunday and there are always 6
          spots. You need to join the private group and then I will get in touch
          with you!
        </p>
      </a>
    </div>
  );
}
