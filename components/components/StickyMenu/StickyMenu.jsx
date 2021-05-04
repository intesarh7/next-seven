import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import { Styles } from "../../Styles/stickyMenu.js";


function StickyMenu() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stickyMenu = document.querySelector(".sticky-menu");

            if (window.scrollY > 160) {
                stickyMenu.classList.add("sticky");
            } else {
                stickyMenu.classList.remove("sticky");
            }
        });
    });

    return (
        <Styles>
            {/* Sticky Menu */}
            <section className="sticky-menu">
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="logo">
                                <a href="/"><Image  width="175" height="47" src="/assets/images/logo.png" alt="" /></a>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="menu-box d-flex justify-content-end">
                            <ul className="nav menu-nav">
                                            <li className="nav-item dropdown active">
                                                <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">Seminars <i className="las la-angle-down"></i></a>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item active"><a className="nav-link" href="/">Option 1</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">Venues</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">Organizers <i className="las la-angle-down"></i></a>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><a className="nav-link" href="/">Option 1</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/">Option 2</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/">Option 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">Instructors</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">Courses <i className="las la-angle-down"></i></a>
                                                <ul className="dropdown list-unstyled">
                                                    <li className="nav-item"><a className="nav-link" href="/">Option 1</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/">Option 2</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/">Option 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">eLearning</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">Contact Us</a>
                                            </li>
                                            
                                        </ul>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default StickyMenu