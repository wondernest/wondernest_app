export default function EventJoin() {
  return (
    <div className='animate-in flex-1 flex flex-col gap-30 opacity-0 max-w-4xl px-3 text-lg'>
      <a
        href='#'
        className='block max-w-2xl p-6 bg-white rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700'
      >
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Join the event
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          Hi! To join the event, please register below. The button will take you
          to a private group on WhatsApp or Telegram.
        </p>
        <button
          type='button'
          className='px-5 py-3 mt-3 w-full text-base font-medium text-center text-white bg-wonderViolet-400 rounded-lg hover:bg-wonderViolet-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Join the event
        </button>
      </a>
    </div>
  );
}
