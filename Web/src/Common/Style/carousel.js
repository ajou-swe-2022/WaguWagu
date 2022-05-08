const NextArrow = () => {
  return <div></div>;
};

const PrevArrow = () => {
  return <div></div>;
};

export const CarouselSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  vertical: true,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
