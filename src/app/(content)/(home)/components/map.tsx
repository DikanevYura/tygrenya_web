/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-dom/no-missing-iframe-sandbox */
'use client';

import Link from 'next/link';

import { Icon } from '@/components';

const MapComponent = () => {
  return (
    <div className="mb-20 mt-5 flex h-max w-full flex-col justify-between gap-10 lg:flex-row">
      <div className="flex w-full flex-col gap-10 text-text-tugrenya-black lg:w-1/2">
        <h2>Наші контакти</h2>
        <div className="flex flex-col gap-5">
          <div className="flex w-full gap-3 text-text-tugrenya-black">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#ff7e00]/50">
              <Icon name="phone-call-svgrepo-com" size={24} />
            </div>
            <Link
              href="tel: +380505137203"
              className="text-text-tugrenya-black hover:text-text-tugrenya-black/50"
            >
              +380505137203
            </Link>
            <Link
              href="tel: +3809966729102"
              className="text-text-tugrenya-black hover:text-text-tugrenya-black/50"
            >
              +3809966729102
            </Link>
          </div>
          <div className="flex w-full gap-3 text-text-tugrenya-black">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#ff7e00]/50">
              <Icon name="instagram-svgrepo-com" size={24} />
            </div>
            inst:
            <Link
              href="https://www.instagram.com/psychologist_oleksandra/"
              className="text-text-tugrenya-black hover:text-text-tugrenya-black/50"
            >
              psychologist_oleksandra
            </Link>
          </div>
          <div className="flex w-full gap-3 text-text-tugrenya-black">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#ff7e00]/50">
              <Icon name="location-pin-alt-1-svgrepo-com" size={24} />
            </div>
            <Link
              className="text-text-tugrenya-black hover:text-text-tugrenya-black/50"
              href="https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%92'%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%B0+%D0%A7%D0%BE%D1%80%D0%BD%D0%BE%D0%B2%D0%BE%D0%BB%D0%B0,+43%D0%B0,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8540076,24.0226371,21z/data=!4m6!3m5!1s0x473add09dc704f83:0xa72b7df01368c7e5!8m2!3d49.8540799!4d24.0226337!16s%2Fg%2F11nnkz3r7p?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
            >
              Проспект Чорновола 43а поверх 5/503
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.3812147240083!2d24.020058776890316!3d49.85408333012347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add09dc704f83%3A0xa72b7df01368c7e5!2z0L_RgNC-0YHQv9C10LrRgiDQkifRj9GH0LXRgdC70LDQstCwINCn0L7RgNC90L7QstC-0LvQsCwgNDPQsCwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1732827980079!5m2!1suk!2sua"
          className="h-[300px] w-full md:h-[450px] md:w-[600px] lg:w-[600px]"
          style={{ border: 10 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export { MapComponent };
