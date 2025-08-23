import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MohidConstructions from "../../img/mohid-constructions.png";
import LandingPage from "../../img/landing-page.png";
import Ecommerce from "../../img/ecommerce.png";
import GithubRepo from "../../img/github-repos.png";
import Halloween from '../../img/halloween.png';
import { themeContext } from "../../Context";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="box">
            <img src={MohidConstructions} alt="" />
            <div className="links">
              <h3>Mohid Constructions Site</h3>
              <a
                href="https://mohidconstructions.site/"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={LandingPage} alt="" />
            <div className="links">
              <h3>Headphones Landing Page</h3>
              <a
                href="https://nasirkhan294.github.io/Headphones-Landing-page/"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={Ecommerce} alt="" />
            <div className="links">
              <h3>Fresh Meal Shop</h3>
              <a
                href="https://nasirkhan294.github.io/freshmeal-shop/"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={Halloween} alt="" />
            <div className="links">
              <h3>Halloween Website</h3>
              <a
                href="https://nasirkhan294.github.io/halloween-website/"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <img src={GithubRepo} alt="" />
            <div className="links">
              <h3>Github Repo Gallery</h3>
              <a
                href="https://nasirkhan294.github.io/github-repo-gallery/"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
