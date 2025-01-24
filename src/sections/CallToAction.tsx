import starImage from '@/assets/star.png'
import springimage from '@/assets/spring.png'
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className='section-heading relative'>
          <h2 className="section-title">Get in touch Today</h2>
          <p className="section-description mt-5"> 
            Celebrate the joy of accomplishment of the success we will create together with your support
          </p>
          <Image src={starImage} alt='Star Image' width={300} className=' absolute -left-[350px] -top-[137px]'></Image>
          <Image src={springimage} alt='spring' width={300} className=' absolute -right-[331px] -top-[19px]' ></Image>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Learn more</button>
        </div>
      </div>
    </section>
  );
};
