// @flow
import * as React from "react"
import Slider from "react-slick"
import Title from "components/Title"
import Card from "components/Card"
import danieltrevinoImg from "../../images/danieltrevino.se.png"
import hitchrisImg from "../../images/hitchris.se.png"
import frankieImg from "../../images/frankie.tech.png"
import styles from "./Works.module.scss"

const sliderSettings = {
  className: "center",
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  swipeToSlide: true,
  lazyLoad: true,
  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    )
  },
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
  <section className={styles.container}>
    <div className={styles.head}>
      <Title text="My Works" />
    </div>
    <Slider {...sliderSettings}>
      <Card img={danieltrevinoImg} />
      <Card img={frankieImg} />
      <Card img={hitchrisImg} />
    </Slider>
  </section>
)

export default Works
