export default function Header() {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white'>
        Offline Events and Deep Connection
      </h1>
      <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
        Wondernest is a place for people who believe in putting human connection
        first. Here you can create events to share privately. We are still
        working the first version, but if you are alredy interested in using it,
        or just want to share some thoughts, feel free to reach out.
      </p>
    </div>
  );
}
