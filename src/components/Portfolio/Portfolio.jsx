import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Github from "@iconscout/react-unicons/icons/uil-github";
import "swiper/css";
import "./Portfolio.css";
import { useTheme } from "../../Context";

const projects = [
  {
    title: "Mohid Constructions Site",
    image: "/img/mohid-constructions.png",
    link: "https://mohidconstructions.site/",
    alt: "construction site",
  },
  {
    title: "Headphones Landing Page",
    image: "/img/landing-page.png",
    link: "https://nasirkhan294.github.io/Headphones-Landing-page/",
    alt: "landing page",
  },
  {
    title: "Fresh Meal Shop",
    image: "/img/ecommerce.png",
    link: "https://freshmeal-shop.netlify.app/",
    alt: "Ecommerce site",
  },
  {
    title: "Halloween Website",
    image: "/img/halloween.png",
    link: "https://nasirkhan294.github.io/halloween-website/",
    alt: "halloween site",
  },
  {
    title: "Github Repo Gallery",
    image: "/img/github-repos.png",
    link: "https://github-repo-gallary.netlify.app/",
    alt: "github repos",
  },
];

const Portfolio = () => {
  const { state } = useTheme();
  const { darkMode } = state;

  return (
    <div className="portfolio text-center" id="portfolio">
      {/* heading */}
      <h2
        className="fw-bold"
        style={{ color: darkMode ? "white" : "", fontSize: "2rem" }}
      >
        Recent Projects
      </h2>
      <h3
        className="fw-bold"
        style={{ color: "var(--orange)", fontSize: "2.5rem" }}
      >
        Portfolio
      </h3>

      {/* slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mt-5"
      >
        {projects.map(({ title, image, link, alt }, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-4" style={{ border: "2px solid #f8ddb1" }}>
              <img src={image} alt={alt} className="img-fluid rounded-4" />
              <div
                className="d-flex justify-content-between px-3 align-items-center"
                style={{ height: "2.5rem" }}
              >
                <p className="fw-bold mb-0 portfolio-decs">{title}</p>
                <a
                  className="d-flex align-items-center p-link"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: darkMode ? "white" : "" }}
                >
                  <Github />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
