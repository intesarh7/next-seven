import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from '../BackToTop/BackToTop';


class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer Area */}
                {/* <footer className="footer1" style={{ backgroundImage: `url(assets/images/${process.env.PUBLIC_URL + Datas.backgroundImage})` }}> */}
                <footer className="footer">
                    <Container>
                        <Row>
                        <Col md="12">
                            <div className="footer-logo-info">
                                <img  width="180" height="64" src="/assets/images/f-logo.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                            <Col md="3">
                                <div className="footer-logo-info">
                                    <p>
                                        Η MySeminars αποτελεί τη μοναδική εξειδικευμένη ιστοσελίδα στη Κύπρο για εντοπισμό και εγγραφή σε Επαγγελματικά Σεμινάρια στη 
                                        χώρα μας αλλά και σε σημαντικά Συνέδρια, Εκθέσεις και προγράμματα Εξ’ Αποστάσεως Εκπαίδευσης στη Κύπρο, Ελλάδα και Ευρώπη. 
                                        Υπάρχουν εξειδικευμένοι κατάλογοι Διοργανωτών και Εκπαιδευτών τους οποίους μπορεί ο επισκέπτης να αξιοποιήσει για συνεργασίες 
                                        όπως έργα Συμβουλευτικής, Μονοεπιχειρησιακά Σεμινάρια, Μελέτες και άλλα.
                                    </p>
                                    
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="f-links">
                                    <ul className="list-unstyled">
                                        <li><a href="/"><i className="las la-angle-right"></i>General Info</a></li>
                                        <li><a href="/"><i className="las la-angle-right"></i>Help Center</a></li>
                                        <li><a href="/"><i className="las la-angle-right"></i>Our Services</a></li>
                                        <li><a href="/"><i className="las la-angle-right"></i>Privacy Policy</a></li>
                                        <li><a href="/"><i className="las la-angle-right"></i>Online Support</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="f-post">
                                    <h5>ΕΠΙΚΟΙΝΩΝΙΑ</h5>
                                    <ul className="list-unstyled">
                                        <li><i className="las la-envelope"></i>info@myseminars.com.cy</li>
                                        <li><i className="las la-phone"></i>(+357) 99 398200</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="f-post">
                                    <h5 className="noOpacity">Recent Post</h5>
                                    <img  width="155" height="38" src="/assets/images/paypal-logo.png" alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                {/* Copyright Area */}
                <section className="copyright-area">
                    <Container>
                        <Row>
                            <Col md="8">
                                <div className="copy-text">
                                    <p>Copyright &copy; 2021 | MySeminars.com.cy - 
                                        <a href="/" target="_blank" rel="noopener noreferrer"> Όροι Χρήσης</a> -
                                        <a href="/" target="_blank" rel="noopener noreferrer"> Πολιτική Προστασίας Δεδομένων</a>
                                     
                                    </p>
                                </div>
                            </Col>
                            <Col md="4" className="text-right">
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="/"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <BackToTop></BackToTop>
                </section>
            </div>
        )
    }
}

export default Footer
