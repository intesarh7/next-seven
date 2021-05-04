import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import StickyMenu from '../StickyMenu/StickyMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import TopBar from '../TopBar/TopBar';
import Ads from '../Ads/Ads';


export default function Header() {
    return (
        <div>
			<TopBar></TopBar>
			<Ads></Ads>
            <section className="logo-area">
			<div className="container">
		<div className="row">
			<div className="col-md-3">
				<div className="logo">
					<a href="/"><img  width="175" height="47" src="/assets/images/logo.png" alt="" /></a>
				</div>
			</div>
			<div className="main-menu col-md-9">
				<div className="main-menu-box">
					<div className="menu-box">
						<ul className="nav menu-nav">
							<li className="nav-item dropdown active"><a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/">Seminars <i className="las la-angle-down"></i></a>
								<ul className="dropdown list-unstyled">
									<li className="nav-item active"><a className="nav-link" href="Inner">Option 1</a></li>
								</ul>
							</li>
							<li className="nav-item"><a className="nav-link" href="/">Venues</a></li>
							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/">Organizers <i className="las la-angle-down"></i></a>
								<ul className="dropdown list-unstyled">
									<li className="nav-item"><a className="nav-link" href="/">Option 1</a></li>
									<li className="nav-item"><a className="nav-link" href="/">Option 2</a></li>
									<li className="nav-item"><a className="nav-link" href="/">Option 3</a></li>
								</ul>
							</li>
							<li className="nav-item"><a className="nav-link" href="/">Instructors</a></li>
							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/">Courses <i className="las la-angle-down"></i></a>
								<ul className="dropdown list-unstyled">
									<li className="nav-item"><a className="nav-link" href="/">Option 1</a></li>
									<li className="nav-item"><a className="nav-link" href="/">Option 1</a></li>
									<li className="nav-item"><a className="nav-link" href="/">Option 1</a></li>
								</ul>
							</li>
							<li className="nav-item"><a className="nav-link" href="/">eLearning</a></li>
							<li className="nav-item"><a className="nav-link" href="/">Contact Us</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

{/* Search Area */}
<section className="search-section">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<form>
					<div className="inline-form">
						<select className="form-control form-control-lg">
							<option>Seminar Categories</option>
						</select>
						<select className="form-control form-control-lg">
							<option>Seminar Language</option>
						</select>
						<select className="form-control form-control-lg">
							<option>Cities</option>
						</select>
						<input type="text" className="form-control form-control-lg" id="input2" placeholder="Search Seminars"/>
						<button type="submit" className="btn btn-primary">Search</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
<StickyMenu></StickyMenu>
<MobileMenu></MobileMenu>
        </div>
    )
}
