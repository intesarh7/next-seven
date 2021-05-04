import React, { useEffect } from 'react';
import Datas from '../../../data/course/filter.json';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "../../Styles/courseFilter.js";



function CourseFilter() {
    useEffect(() => {
        const buttons = document.querySelector(".filter-btn-list").children;
        const items = document.querySelector(".filter-items").children;

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {

                for (let j = 0; j < buttons.length; j++) {
                    buttons[j].classList.remove("active");
                }

                this.classList.add("active");
                const target = this.getAttribute("data-target");

                for (let k = 0; k < items.length; k++) {
                    items[k].style.display = "none";

                    if (items[k].getAttribute("data-id") === target) {
                        items[k].style.display = "block";
                    }

                    if (target === "*") {
                        items[k].style.display = "block";
                    }
                }
            })
        }
    });

    

    return (
        <Styles>
            {/* Course Area */}
            <section className="course-filter">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="sec-title text-center">
                                <h4>{Datas.secTitle}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            <div className="filter-btns text-center">
                                <div className="cata-sub-nav">
                                    <div className="nav-prev arrow">
                                    <i className="fa fa-arrow-left float-left arrow-icons"></i>
                                    </div>                                
                                    <ul className="filter-btn-list list-unstyled list inline">
                                    <li data-target="*" className="nav-item list-inline-item active">All Courses</li>
                                        <li data-target="oml" className="nav-item list-inline-item"><a>Organization / Management / Leadership</a></li>
                                        <li data-target="oml" className="nav-item list-inline-item">Soft Skills / Communication</li>
                                        <li data-target="hr" className="nav-item list-inline-item">Human Resources (HR)</li>
                                        <li data-target="sw" className="nav-item list-inline-item">Shopping / Warehouse</li>
                                    </ul>
                                    <div className="nav-next arrow"><i className="fa fa-arrow-right float-right arrow-icons"></i></div>
                                </div>
                            </div>

                            <Row className="filter-items">
                                {
                                    Datas.dataList.map((data, i) => (
                                        <Col lg="4" md="6" key={i} data-id={data.targetId}>
                                            <div className="course-item">
                                                <Link href={data.courseLink}>
                                                    <div className="course-image" style={{backgroundImage: `url(/assets/images/${data.imgUrl})`}}>
                                                        <div className="author-img d-flex">                                                            
                                                            <div className="title">
                                                                <p className={data.tag}>{data.tag}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="course-content">
                                                    <h6 className="heading"><Link href={data.courseLink}>{data.courseTitle}</Link></h6>
                                                    <p className="desc">{data.courseDesc}</p>
                                                    <div className="course-face d-flex justify-content-between">
                                                        <div className="duration">
                                                            <p><i className="las la-calendar"></i>{data.date}</p>
                                                        </div>
                                                        <div className="duration">
                                                            <p><i className="las la-globe"></i>{data.location}</p>
                                                        </div>
                                                        
                                                        <div className="student">
                                                            <p><i className="las la-clock"></i>{data.time}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                        <Col md="12" className="text-center">
                            <div className="viewall-btn">
                                <Link href={"/course-grid"}>View All Courses</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default CourseFilter
