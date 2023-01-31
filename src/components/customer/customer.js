import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { carouselData } from "../../constant";
import Carousel from "../carousel/carousel";
import classes from "./customer.module.css";

const Customer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.growth}>
        <h3>Powering the growth of 100+ business & retailers in Indonesia.</h3>
        <p>From single store, startups, to large multi-store brands.</p>
      </div>
      <div className={classes.carousel}>
        <Swiper
          autoHeight={true}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className={classes.mySwiper}
        >
          {carouselData.map((item, i) => (
            <SwiperSlide key={i}>
              <Carousel {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Customer;
