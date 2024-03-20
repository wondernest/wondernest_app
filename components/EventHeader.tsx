export default function EventHeader() {
  return (
    <div className='animate-in flex-1 flex flex-col max-w-4xl px-3'>
      <a
        href='#'
        className='block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
      >
        <h5 className='mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Breakfasts for Good: How to create an impact around us?
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          Hosted by <span className='text-blue-700'>Malik</span>
        </p>
      </a>
    </div>
  );
}
