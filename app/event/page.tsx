import EventDescription from '@/components/EventDescription';
import EventHeader from '@/components/EventHeader';
import EventJoin from '@/components/EventJoin';
import Nav from '@/components/Nav';
import PeopleAttending from '@/components/PeopleAttending';

export default async function EventPage() {
  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <Nav />
      <EventHeader />
      <EventJoin />
      <PeopleAttending />
      <EventDescription />
    </div>
  );
}
