import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/components';

export const OurFeatutes = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row lg:gap-20">
      <div className="flex w-full lg:w-1/2">
        <Image src="/assets/images/tugrenya-big-banner.png" alt="banner" width={0} height={0} sizes="100vw" className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-5 lg:w-1/2">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-text-tugrenya-black">Індивідуальні заняття</h1>
          <h2 className="text-4xl font-bold text-text-tugrenya-black">АВА ТЕРАПІЯ</h2>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex w-full gap-3 text-text-tugrenya-black">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#ff7e00]/50">
              <Icon name="backspace" size={24} />
            </div>
            <Link href="tel: +380505137203" className="text-text-tugrenya-black hover:text-text-tugrenya-black/50">+380505137203</Link>
            ;
            <Link href="tel: +3809966729102" className="text-text-tugrenya-black hover:text-text-tugrenya-black/50">+3809966729102</Link>
          </div>
          <div className="flex w-full gap-3 text-text-tugrenya-black">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#ff7e00]/50">
              <Icon name="backspace" size={24} />
            </div>
            inst:
            <Link href="https://www.instagram.com/psychologist_oleksandra/" className="text-text-tugrenya-black hover:text-text-tugrenya-black/50">psychologist_oleksandra</Link>
          </div>
          <div className="flex w-full gap-3 text-text-tugrenya-black">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#ff7e00]/50">
              <Icon name="backspace" size={24} />
            </div>
            <Link className="text-text-tugrenya-black hover:text-text-tugrenya-black/50" href="https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%92'%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%B0+%D0%A7%D0%BE%D1%80%D0%BD%D0%BE%D0%B2%D0%BE%D0%BB%D0%B0,+43%D0%B0,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8540076,24.0226371,21z/data=!4m6!3m5!1s0x473add09dc704f83:0xa72b7df01368c7e5!8m2!3d49.8540799!4d24.0226337!16s%2Fg%2F11nnkz3r7p?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">Проспект Чорновола 43а поверх 5/503</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
