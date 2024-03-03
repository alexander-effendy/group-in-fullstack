import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import Vector1 from '@/assets/Vector-1.png';
import Vector2 from '@/assets/Vector-2.png';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Sidebar />
      <Image
        src={Vector1}
        alt='Vector 1'
        className='right-0 -z-10 hidden lg:absolute lg:block'
      />
      <Image src={Vector2} alt='Vector 2' className='absolute left-52 -z-10' />
      <div className='ml-60'>{children}</div>
    </section>
  );
}
