import React, { useEffect } from 'react';
import Datas from '../../../data/course/latest_news.json';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "../../Styles/latestNews.js";

function LatestNews() {
    
    return (
        <Styles>
            {/* Course Area */}
            <section className="latestNews">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="sec-title text-center">
                                <h4>{Datas.secTitle}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                           
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
                                                        <div className="course-price"><p>{data.source}</p></div>
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
                                                            <p><i className="fas fa-user"></i>{data.authorName}</p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default LatestNews
