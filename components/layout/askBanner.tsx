import Image from 'next/image';
import Link from 'next/link';

export const AskBanner = () => {
  return (
        <div className="ask-banner mt-48 flex flex-col items-center relative rounded-lg">
            <div className="ask-banner__content relative w-full" style={{ height: '35vh' }}>
                <Image className='opacity-50' src={'/images/banner-wide.jpg'} alt="banner" layout='fill' objectFit='cover' priority />
            </div>
            <div className='absolute flex flex-col items-center gap-y-8 p-2 left-2/4 top-2/4 w-full' style={{ transform: 'translate(-50%, -30%)' }}>
                <h4 className='text-xl md:text-2xl lg:text-3xl font-bold shadow-sm text-center tracking-wide'>Cannot find what you are looking for?</h4>
                <Link href="/ask" passHref>
                    <button className="btn-primary w-max shadow-lg font-semibold">
                        Submit a request
                    </button>
                </Link>
            </div>
        </div>
  );
};