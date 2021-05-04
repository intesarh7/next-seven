import React, { Component } from 'react';
import Datas from '../../../data/icon-box/icon-box';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "../../Styles/iconBox.js";

class IconBox extends Component {
    render() {
        return (
            <Styles>
                {/* Icon Box */}
                <section className="icon-box-area">
                    <Container className="icon-boxs">
                        <Row>
                            {
                                Datas.map((data, i) => (
                                    <Col md="4" key={i}>
                                        <div className={data.uniqClass + `` + ` full-icon-box`}>
                                            <div className="icon-box d-flex">
                                                <div className={data.uniqClass}>
                                                    <img  width="30" height="30" src={`/assets/images/${data.boxIcon}`} className="slider-image" alt={data.boxIcon} />
                                                </div>
                                                <div className="box-title">
                                                    <h6>{data.title}</h6>
                                                    <p>{data.subTitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default IconBox
