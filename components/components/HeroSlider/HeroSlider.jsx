import React, { Component } from 'react';
import Datas from '../../../data/hero/hero-slider.json';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

// import { Styles } from "../../Styles/heroSlider.js";



class HeroSlider extends Component {
    
    render() {
        SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, EffectFade]);

        const settings = {
            slidesPerView: 1,
            loop: true,
            speed: 3000,
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: true
            },
            watchSlidesVisibility: true,
            
            navigation: {
                nextEl: '.slider-button-next',
                prevEl: '.slider-button-prev'
            },
            renderPrevButton: () => (
                <div className="swiper-btn slider-button-prev"><i className="flaticon-arrow-left-th"></i></div>
            ),
            renderNextButton: () => (
                <div className="swiper-btn slider-button-next"><i className="flaticon-arrow-right-th"></i></div>
            )
        };

        return (
            <div>
                {/* Hero Slider */}
                <section className="hero-slider-area">
                    <Swiper {...settings}>
                        {
                            Datas.map((data, i) => (
                                <div className="slider-item" key={i}>
                                    <div className="image-container">
                                        <img src={`/assets/images/${data.backgroundImage}`} className="slider-image" alt={data.backgroundImage} />
                                    </div>
                                    <div className="slider-table">
                                        <div className="slider-tablecell">
                                            <Container>
                                                <Row>
                                                    <Col md="12">
                                                        <div className={data.uniqClass}>
                                                            <div className="slider-title">
                                                                <ul>
                                                                    <li>{data.sliderDate}</li>
                                                                    <li>{data.sliderPlace}</li>
                                                                    <li>{data.sliderTime}</li>
                                                                </ul>
                                                            </div>
                                                            <div className="slider-desc">
                                                                <h1>{data.desc}</h1>
                                                            </div>
                                                            <div className="slider-desc-info">
                                                                <p>{data.info}</p>
                                                            </div>
                                                            <div className="slider-btn">
                                                                <Link href={`/${data.btnOneLink}`}>
                                                                <a  className="slider-btn1">More</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Swiper>
                </section>
            </div>
        )
    }
}

export default HeroSlider
