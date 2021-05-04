import React from 'react'
import Header from '../components/components/Header/Header';
import Footer from '../components/components/Footer/Footer';
import NewsletterForm from '../components/components/NewsletterForm/NewsletterForm';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';


function Inner() {
    return (
        <div>
			<Header></Header>
            <div className="innerpage">
            <section className="home-blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <h4>Σχετικά</h4>
                                <p>Η MySeminars αποτελεί τη μοναδική εξειδικευμένη ιστοσελίδα στη Κύπρο για εντοπισμό και εγγραφή σε Επαγγελματικά Σεμινάρια στη χώρα μας αλλά και σε σημαντικά Συνέδρια, Εκθέσεις και προγράμματα Εξ’ Αποστάσεως Εκπαίδευσης στη Κύπρο, Ελλάδα και Ευρώπη.</p> 
                                <p>Υπάρχουν εξειδικευμένοι κατάλογοι Διοργανωτών και Εκπαιδευτών τους οποίους μπορεί ο επισκέπτης να αξιοποιήσει για συνεργασίες όπως έργα Συμβουλευτικής, Μονοεπιχειρησιακά Σεμινάρια, Μελέτες και άλλα. Η MySeminars αποτελεί τη μοναδική εξειδικευμένη ιστοσελίδα στη Κύπρο για εντοπισμό και εγγραφή σε Επαγγελματικά Σεμινάρια στη χώρα μας αλλά και σε σημαντικά Συνέδρια, Εκθέσεις και προγράμματα Εξ’ Αποστάσεως Εκπαίδευσης στη Κύπρο, Ελλάδα και Ευρώπη. Υπάρχουν εξειδικευμένοι κατάλογοι Διοργανωτών και Εκπαιδευτών τους οποίους μπορεί ο επισκέπτης να αξιοποιήσει για συνεργασίες όπως έργα Συμβουλευτικής, Μονοεπιχειρησιακά Σεμινάρια, Μελέτες και άλλα.</p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="blog-post">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="blog-img">
                                        <a href="/"><img src="/assets/images/blog-1.jpg" alt="" className="img-fluid"/></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="blog-content">
                                            <div className="content-box">
                                                <div className="top-content d-flex">
                                                    <div className="blog-title">
                                                        <h6><a href="/">Σχετικά</a></h6>
                                                    </div>
                                                </div>
                                                <div className="blog-desk">
                                                    <p>
                                                    Η MySeminars αποτελεί τη μοναδική εξειδικευμένη ιστοσελίδα στη Κύπρο για εντοπισμό και εγγραφή σε Επαγγελματικά Σεμινάρια στη χώρα μας αλλά και σε σημαντικά Συνέδρια, Εκθέσεις και προγράμματα Εξ’ Αποστάσεως Εκπαίδευσης στη Κύπρο, Ελλάδα και Ευρώπη. Υπάρχουν εξειδικευμένοι κατάλογοι Διοργανωτών και Εκπαιδευτών τους οποίους μπορεί ο επισκέπτης να αξιοποιήσει για συνεργασίες όπως έργα Συμβουλευτικής, Μονοεπιχειρησιακά Σεμινάρια, Μελέτες και άλλα.
                                                    </p>
                                                    <p>
                                                    Υπάρχουν εξειδικευμένοι κατάλογοι Διοργανωτών και Εκπαιδευτών τους οποίους μπορεί ο επισκέπτης να αξιοποιήσει για συνεργασίες όπως έργα Συμβουλευτικής, Μονοεπιχειρησιακά Σεμινάρια, Μελέτες και άλλα.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="blog-post right">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="blog-content">
                                            <div className="content-box">
                                                <div className="top-content d-flex">
                                                    <div className="blog-title">
                                                        <h6><a href="/">Σχετικά</a></h6>
                                                    </div>
                                                </div>
                                                <div className="blog-desk">
                                                    <p>
                                                    Η MySeminars αποτελεί τη μοναδική εξειδικευμένη ιστοσελίδα στη Κύπρο για εντοπισμό και εγγραφή σε Επαγγελματικά Σεμινάρια στη χώρα μας αλλά και σε σημαντικά Συνέδρια, Εκθέσεις και προγράμματα Εξ’ Αποστάσεως Εκπαίδευσης στη Κύπρο, Ελλάδα και Ευρώπη. Υπάρχουν εξειδικευμένοι κατάλογοι Διοργανωτών και Εκπαιδευτών τους οποίους μπορεί ο επισκέπτης να αξιοποιήσει για συνεργασίες όπως έργα Συμβουλευτικής, Μονοεπιχειρησιακά Σεμινάρια, Μελέτες και άλλα.
                                                    </p>
                                                    <p>
                                                    Υπάρχουν εξειδικευμένοι κατάλογοι Διοργανωτών και Εκπαιδευτών τους οποίους μπορεί ο επισκέπτης να αξιοποιήσει για συνεργασίες όπως έργα Συμβουλευτικής, Μονοεπιχειρησιακά Σεμινάρια, Μελέτες και άλλα.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="blog-img">
                                        <a href="/"><img src="/assets/images/blog-1.jpg" alt="" className="img-fluid"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latestNews">
            <div className="container">
            <div className="filter-items">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div class="course-item">
                            <div class="course-image" style={{backgroundImage: `url(/assets/images/course-1.jpg)`}}></div>
                            <div class="course-content">
                                <h6 class="heading"><a href="/">ELTC: Το European Legal Training Center εξάγγειλε τα νέα του εκπαιδευτικά προγράμματα</a></h6>
                                <p class="desc">Το ELTC, εξάγγειλε σειρά νέων σεμιναρίων, εργαστηρίων και προγραμμάτων που αφορουν αποκλειστικά τον Νομικό κόσμο της.</p>
                               
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div class="course-item">
                            <div class="course-image" style={{backgroundImage: `url(/assets/images/course-1.jpg)`}}></div>
                            <div class="course-content">
                                <h6 class="heading"><a href="/">ELTC: Το European Legal Training Center εξάγγειλε τα νέα του εκπαιδευτικά προγράμματα</a></h6>
                                <p class="desc">Το ELTC, εξάγγειλε σειρά νέων σεμιναρίων, εργαστηρίων και προγραμμάτων που αφορουν αποκλειστικά τον Νομικό κόσμο της.</p>
                               
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div class="course-item">
                            <div class="course-image" style={{backgroundImage: `url(/assets/images/course-1.jpg)`}}></div>
                            <div class="course-content">
                                <h6 class="heading"><a href="/">ELTC: Το European Legal Training Center εξάγγειλε τα νέα του εκπαιδευτικά προγράμματα</a></h6>
                                <p class="desc">Το ELTC, εξάγγειλε σειρά νέων σεμιναρίων, εργαστηρίων και προγραμμάτων που αφορουν αποκλειστικά τον Νομικό κόσμο της.</p>
                               
                            </div>
                        </div>
                    </div>

                    {/* 4 box set  */}

                    <div className="col-md-6 col-lg-3">
                        <div class="course-item">
                            <div class="course-image" style={{backgroundImage: `url(/assets/images/course-1.jpg)`}}></div>
                            <div class="course-content">
                                <h6 class="heading"><a href="/">ELTC: Το European Legal Training Center εξάγγειλε τα νέα του εκπαιδευτικά προγράμματα</a></h6>
                                <p class="desc">Το ELTC, εξάγγειλε σειρά νέων σεμιναρίων, εργαστηρίων και προγραμμάτων που αφορουν αποκλειστικά τον Νομικό κόσμο της.</p>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-3">
                        <div class="course-item">
                            <div class="course-image" style={{backgroundImage: `url(/assets/images/course-1.jpg)`}}></div>
                            <div class="course-content">
                                <h6 class="heading"><a href="/">ELTC: Το European Legal Training Center εξάγγειλε τα νέα του εκπαιδευτικά προγράμματα</a></h6>
                                <p class="desc">Το ELTC, εξάγγειλε σειρά νέων σεμιναρίων, εργαστηρίων και προγραμμάτων που αφορουν αποκλειστικά τον Νομικό κόσμο της.</p>
                               
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div class="course-item">
                            <div class="course-image" style={{backgroundImage: `url(/assets/images/course-1.jpg)`}}></div>
                            <div class="course-content">
                                <h6 class="heading"><a href="/">ELTC: Το European Legal Training Center εξάγγειλε τα νέα του εκπαιδευτικά προγράμματα</a></h6>
                                <p class="desc">Το ELTC, εξάγγειλε σειρά νέων σεμιναρίων, εργαστηρίων και προγραμμάτων που αφορουν αποκλειστικά τον Νομικό κόσμο της.</p>
                               
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div class="course-item">
                            <div class="course-image" style={{backgroundImage: `url(/assets/images/course-1.jpg)`}}></div>
                            <div class="course-content">
                                <h6 class="heading"><a href="/">ELTC: Το European Legal Training Center εξάγγειλε τα νέα του εκπαιδευτικά προγράμματα</a></h6>
                                <p class="desc">Το ELTC, εξάγγειλε σειρά νέων σεμιναρίων, εργαστηρίων και προγραμμάτων που αφορουν αποκλειστικά τον Νομικό κόσμο της.</p>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            </section>
            <sectio className="faqs">
                <div className="container">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Μάθετε πρώτοι τα νέα μας!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Η MySeminars αποτελεί τη μοναδική εξειδικευμένη ιστοσελίδα στη Κύπρο για εντοπισμό και εγγραφή σε Επαγγελματικά Σεμινάρια στη χώρα μας αλλά και σε σημαντικά Συνέδρια, Εκθέσεις και προγράμματα Εξ’ Αποστάσεως Εκπαίδευσης στη Κύπρο, Ελλάδα και Ευρώπη. Υπάρχουν εξειδικευμένοι κατάλογοι Διοργανωτών και Εκπαιδευτών τους οποίους μπορεί ο επισκέπτης να αξιοποιήσει για συνεργασίες όπως έργα Συμβουλευτικής, Μονοεπιχειρησιακά Σεμινάρια, Μελέτες και άλλα.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Μάθετε πρώτοι τα νέα μας!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Η MySeminars αποτελεί τη μοναδική εξειδικευμένη ιστοσελίδα στη Κύπρο για εντοπισμό και εγγραφή σε Επαγγελματικά Σεμινάρια στη χώρα μας αλλά και σε σημαντικά Συνέδρια, Εκθέσεις και προγράμματα Εξ’ Αποστάσεως Εκπαίδευσης στη Κύπρο, Ελλάδα και Ευρώπη. Υπάρχουν εξειδικευμένοι κατάλογοι Διοργανωτών και Εκπαιδευτών τους οποίους μπορεί ο επισκέπτης να αξιοποιήσει για συνεργασίες όπως έργα Συμβουλευτικής, Μονοεπιχειρησιακά Σεμινάρια, Μελέτες και άλλα.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Μάθετε πρώτοι τα νέα μας!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Η MySeminars αποτελεί τη μοναδική εξειδικευμένη ιστοσελίδα στη Κύπρο για εντοπισμό και εγγραφή σε Επαγγελματικά Σεμινάρια στη χώρα μας αλλά και σε σημαντικά Συνέδρια, Εκθέσεις και προγράμματα Εξ’ Αποστάσεως Εκπαίδευσης στη Κύπρο, Ελλάδα και Ευρώπη. Υπάρχουν εξειδικευμένοι κατάλογοι Διοργανωτών και Εκπαιδευτών τους οποίους μπορεί ο επισκέπτης να αξιοποιήσει για συνεργασίες όπως έργα Συμβουλευτικής, Μονοεπιχειρησιακά Σεμινάρια, Μελέτες και άλλα.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    </div>
            </sectio>
            <NewsletterForm></NewsletterForm>
            <Footer></Footer>
        </div>
        </div>
    )
}

export default Inner
