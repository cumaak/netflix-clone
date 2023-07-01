import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {IMAGE_URL} from '../../constant'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Slider = ({data}) => {
  const pathname = usePathname()
  return (
    <div className='lg:mb-12 mb-9 lg:ml-0 ml-5'>
    <Swiper
      modules={[Navigation]}
      navigation
      //spaceBetween={7}
      loop={true}
      //slidesPerView={6.4}
      breakpoints={{
        240: {
          slidesPerView: 2.4,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3.4,
          spaceBetween: 6,
        },
        1024: {
          slidesPerView: 6.4,
          spaceBetween: 7,
        },
      }}
      //centeredSlides={true}
      onSlideChange={() => console.log("test")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data?.map((item)=>{
        return <SwiperSlide key={item.id}>
            <Link href={item.media_type == "tv" ? `series/${item.id}` : item.media_type == "movie" ? `movies/${item.id}` : `/${item.id}`}>
              <img src={IMAGE_URL+item.poster_path} className='rounded'></img>
            </Link>
        </SwiperSlide>
      })}
    </Swiper>
    </div>
  );
};
export default Slider