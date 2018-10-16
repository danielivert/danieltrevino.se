// @flow
import * as React from "react"
import Slider from "react-slick"
import Title from "components/Title"
import Card from "components/Card"
import { Element } from "react-scroll"
import danieltrevinoDesktop from "../../images/danieltrevino_desktop.png"
import danieltrevinoMobile from "../../images/danieltrevino_mobile.png"
import frankieDesktop from "../../images/frankie_desktop.png"
import frankieMobile from "../../images/frankie_mobile.png"
import hitchrisDesktop from "../../images/hitchris_desktop.png"
import hitchrisMobile from "../../images/hitchris_mobile.png"
import styles from "./Works.module.scss"

const sliderSettings = {
  className: "center",
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  swipeToSlide: true,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const Works = () => (
  <Element name="Work">
    <div className={styles.container}>
      <div className={styles.head}>
        <Title text="My Work" />
      </div>
      <Slider {...sliderSettings}>
        <Card
          imgDesktop={danieltrevinoDesktop}
          imgMobile={danieltrevinoMobile}
          href="https://github.com/danielivert/danieltrevino.se"
        />
        <Card
          imgDesktop={frankieDesktop}
          imgMobile={frankieMobile}
          href="https://frankie.danieltrevino.se/"
        />
        <Card
          imgDesktop={hitchrisDesktop}
          imgMobile={hitchrisMobile}
          href="https://hitchris.com"
        />
      </Slider>
    </div>
  </Element>
)

export default Works
