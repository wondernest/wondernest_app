import AuthButton from '../components/AuthButton';
import { createClient } from '@/utils/supabase/server';
import ConnectSupabaseSteps from '@/components/tutorial/ConnectSupabaseSteps';
import SignUpUserSteps from '@/components/tutorial/SignUpUserSteps';
import Header from '@/components/Header';
import Nav from '@/components/Nav';

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className='flex-1 w-full flex flex-col gap-20 items-center'>
      <Nav />

      <div className='animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3'>
        <Header />
      </div>
    </div>
  );
}
