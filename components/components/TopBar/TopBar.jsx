import React from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap';


export default function TopBar() {
    return (
        <div>
            <section className="top-bar">
				<Container>
					<Row>
						<Col md="5" lg="6">
							<div className="bar-left">
								<ul className="list-unstyled list-inline">
									<li className="list-inline-item"><i className="las la-phone"></i> (+357) 99398200</li>
									<li className="list-inline-item"><a href="/faq"><i className="las la-envelope"></i> info@myseminarsnew.com.cy</a></li>
								</ul>
							</div>
						</Col>
						<Col md="7" lg="6">
							<div className="bar-right d-flex justify-content-end">
								<ul className="list-unstyled list-inline bar-lang">
									<li className="list-inline-item">
										<Dropdown>
											<Dropdown.Toggle as="a" variant="success" id="dropdown-basic">
											<img src="/assets/images/us.png" alt=""/>English <i className="las la-angle-down"></i>
											</Dropdown.Toggle>

											<Dropdown.Menu as="ul">
												<Dropdown.Item as="li"><img src="/assets/images/us.png" alt="" /> English</Dropdown.Item>
												<Dropdown.Item as="li"><img src="/assets/images/fra.png" alt="" /> French</Dropdown.Item>
												<Dropdown.Item as="li"><img src="/assets/images/ger.png" alt="" /> German</Dropdown.Item>
												<Dropdown.Item as="li"><img src="/assets/images/spa.png" alt="" /> Spanish</Dropdown.Item>
												<Dropdown.Item as="li"><img src="/assets/images/bra.png" alt="" /> Brazilian</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</li>
								</ul>
								<ul className="list-unstyled list-inline bar-social">
									<li className="list-inline-item"><a href="/"><i className="fab fa-facebook-f"></i></a></li>
									<li className="list-inline-item"><a href="/"><i className="fab fa-twitter"></i></a></li>
									<li className="list-inline-item"><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
								</ul>
								<ul className="list-unstyled list-inline bar-login">
									<li className="list-inline-item"><a className="signup" href="/registration"> Register</a></li>
									<li className="list-inline-item"><a className="login" href="/login"> Log In</a></li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
        </div>
    )
}
