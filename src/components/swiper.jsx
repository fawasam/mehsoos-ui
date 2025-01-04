import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

const staticBannerData = [
  {
    id: 1,
    ImageOrVideo: {
      mime: "image/jpeg",
      url: "/src/assets/services/service-1.png",
      alternativeText: "Banner 1",
    },
    title: "Welcome to Our Store",
    heading: "Shop the Best Products Here",
    desc: "Find the latest deals and offers on our wide range of products.",
    button: {
      text: "Shop Now",
      link: "/shop",
    },
    RedirectLink: "/shop",
  },
  {
    id: 2,
    ImageOrVideo: {
      mime: "image/jpeg",
      url: "/src/assets/services/service-2.png",
      alternativeText: "Banner 2",
    },
    title: "Welcome to Our Store",
    heading: "Shop the Best Products Here",
    desc: "Find the latest deals and offers on our wide range of products.",
    button: {
      text: "Shop Now",
      link: "/shop",
    },
    RedirectLink: "/shop",
  },
  {
    id: 3,
    ImageOrVideo: {
      mime: "image/jpeg",
      url: "/src/assets/services/service-3.png",
      alternativeText: "Banner 3",
    },
    title: "Welcome to Our Store",
    heading: "Shop the Best Products Here",
    desc: "Find the latest deals and offers on our wide range of products.",
    button: {
      text: "Shop Now",
      link: "/shop",
    },
    RedirectLink: "/shop",
  },
];

export default function MySwiper() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const parallaxRef = useRef(null);

  const renderMedia = (media) => {
    if (!media) return null;

    const isImage = media.mime?.startsWith("image/");
    const isVideo = media.mime?.startsWith("video/");

    if (isImage) {
      return (
        <div className="banner_image h-full w-full relative">
          <img
            className="w-full h-full object-cover"
            src={media.url}
            width={1280}
            height={556}
            alt={media.alternativeText || "banner image"}
          />
        </div>
      );
    }

    if (isVideo) {
      return (
        <div className="banner_video h-full w-full relative">
          <video
            className="w-full h-full object-cover"
            src={media.url}
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
    return null;
  };

  const renderSlideContent = (item) => {
    if (!item?.title && !item?.heading && !item?.desc) return null;

    return (
      <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="content max-w-[800px] w-full">
          {item?.title && (
            <h6 className="text-[22px] font-light text-[#E4E4E4] line-clamp-1">
              {item.title}
            </h6>
          )}
          {item?.heading && (
            <h1 className="text-[60px] font-bold text-white leading-[65px] mt-[13px] line-clamp-2 max-md:text-[44px] max-md:leading-[55px] max-md:line-clamp-3">
              {item.heading}
            </h1>
          )}
          {item?.desc && (
            <p className="text-[16px] leading-[24px] text-white mt-[22px] font-light line-clamp-4">
              {item.desc}
            </p>
          )}
          {item?.button && (
            <div className="btn_wrapper max-w-[186px] mt-[38px]">
              <a href={item.button.link || "#"}>
                <button name={item.button.text} />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderBannerContent = (item) => {
    const content = (
      <div
        className={`banner_wrapper relative h-[556px] w-full mt-[80px] ${
          item?.title || item?.heading || item?.desc
            ? "after:absolute after:inset-0 after:bg-black after:opacity-70"
            : ""
        }`}
      >
        {renderMedia(item?.ImageOrVideo)}
        {renderSlideContent(item)}
      </div>
    );
    return item?.RedirectLink ? (
      <a href={item.RedirectLink} className="block h-full cursor-pointer">
        {content}
      </a>
    ) : (
      content
    );
  };

  return (
    <Section
      className=""
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <Swiper
        className="HomeSwiper"
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        grabCursor={true}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1200}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {staticBannerData?.map((item) => (
          <SwiperSlide key={item.id}>{renderBannerContent(item)}</SwiperSlide>
        ))}
      </Swiper>
      {/* <BottomLine /> */}
    </Section>
  );
}
