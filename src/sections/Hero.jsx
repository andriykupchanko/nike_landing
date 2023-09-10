import { arrowRight } from '../assets/icons';
import Buttons from '../components/Buttons';
import { statistics } from "../constants";
import { bigShoe1 } from '../assets/images';
export const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">   
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Buttons lable = "Shop now" iconURL ={arrowRight}/>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center  max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoe1}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
      </div>
    </section>
  );
};
