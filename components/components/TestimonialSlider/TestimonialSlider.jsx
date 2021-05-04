import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';


class TestimonialSlider extends Component {
    render() {
        const settings = {
            slidesPerView: 2,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            spaceBetween: 30,
            watchSlidesVisibility: true,
            pagination: {
                el: '.slider-dot.text-center',
                clickable: true
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 2
                }
            }
        };

        return (
            <div>
                {/* Testimonial Slider */}
                {/* <section className="testimonial-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}> */}
                <section className="testimonial-area" >
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>Lets See What Our Valuable Students Think About Us. Their Testimonials.</h4>
                                </div>
                            </Col>
                            <Col md="12" className="testimonial-slider">
                                <Swiper {...settings}>
                                <div className="slider-item">
                                        <div className="desc">
                                            <p>Επιτέλους ένας ιστότοπος επαγγελματικά δομημένος με στόχο να στηρίξει την προσωπική και επαγγελματική ανάπτυξη του κάθε επαγγελματία στην Κύπρο. Συγκεντρωμένες όλες οι επιλογές σε ένα τόπο, μπορεί πλέον να αξιολογήσει ο κάθε εργοδότης, καθώς και ο καθένας ξεχωριστά τις επιλογές που υπάρχουν έξω στη αγορά.</p>
                                        </div>
                                        <div className="writer">
                                            <img  width="63" height="63" src="/assets/images/testimonial-1.jpg" className="slider-image" alt="alt" />
                                            <h6>authorName</h6>
                                            <p>authorTitle</p>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="desc">
                                            <p>Επιτέλους ένας ιστότοπος επαγγελματικά δομημένος με στόχο να στηρίξει την προσωπική και επαγγελματική ανάπτυξη του κάθε επαγγελματία στην Κύπρο. Συγκεντρωμένες όλες οι επιλογές σε ένα τόπο, μπορεί πλέον να αξιολογήσει ο κάθε εργοδότης, καθώς και ο καθένας ξεχωριστά τις επιλογές που υπάρχουν έξω στη αγορά.</p>
                                        </div>
                                        <div className="writer">
                                            <img  width="63" height="63" src="/assets/images/testimonial-2.jpg" className="slider-image" alt="alt" />
                                            <h6>authorName</h6>
                                            <p>authorTitle</p>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="desc">
                                            <p>Επιτέλους ένας ιστότοπος επαγγελματικά δομημένος με στόχο να στηρίξει την προσωπική και επαγγελματική ανάπτυξη του κάθε επαγγελματία στην Κύπρο. Συγκεντρωμένες όλες οι επιλογές σε ένα τόπο, μπορεί πλέον να αξιολογήσει ο κάθε εργοδότης, καθώς και ο καθένας ξεχωριστά τις επιλογές που υπάρχουν έξω στη αγορά.</p>
                                        </div>
                                        <div className="writer">
                                            <img  width="63" height="63" src="/assets/images/testimonial-2.jpg" className="slider-image" alt="alt" />
                                            <h6>authorName</h6>
                                            <p>authorTitle</p>
                                        </div>
                                    </div>
                                </Swiper>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default TestimonialSlider
