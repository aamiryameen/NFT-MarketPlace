import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>

{/* <!-- BreadCrumb & Heading --> */}
<section className="breadcrumb_flexRow">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				{/* <!--Breadcrumb--> */}
				<section className="breadCrumb_wrapper">
					<nav aria-label="breadcrumb">
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Connect Wallet</li>
					  </ol>
					</nav>	
				</section>
				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>
{/* <!-- BreadCrumb & Heading  --> */}

{/* <!-- SpaceIn-Misson-Section --> */}
<section className="SpaceIn_Misson_sec" id="contact_sec">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox">
						<div className="container">
							<div className="row align-items-baseline text-center">
								<div className="col-12 col-md-2 col-lg-2">
									<img src="assets/images/torus01.png" alt="spaced-in-img1" className="img-fluid" />
								</div>	
								<div className="col-12 col-md-8 col-lg-8">
									<div className="headingBg mb-3">
										<label className="subHeading font25">
											come into our space to see to new   
										</label>
									</div>
									<p className="Heading font30">
										Get in Touch
									</p>
								</div>
								<div className="col-12 col-md-2 col-lg-2">
									<img src="assets/images/binoculars.png" alt="spaced-in-img1" className="img-fluid contact_img2" />
								</div>	
							</div>	
						</div>
								
						<form action="">
							<div className="form_wrapper px-5">
								<div className="row">
									<div className="col-12 col-md-4 col-lg-4">
										<div className="contact_lytSec mb-2">
											<label className="font20">
												CONTACT NUMBER
											</label>
											<p>
												<b>(906) 227-6492</b>
											</p>
										</div>
										<div className="contact_lytSec mb-2">
											<label className="font20">
												Email Address
											</label>
											<p>
												<a href="mailto:#!"><b>frankcervantes@Kryp.ai</b></a>
											</p>
										</div>
										<div className="contact_lytSec mb-2">
											<label className="font20">
												Location
											</label>
											<p>
												<b>4650 Arrow Hwy G7 Montclair, CA 91763, US</b>
											</p>
										</div>
									</div>
									<div className="col-12 col-md-8 col-lg-8">
										<div className="row">
											<div className="col-12 col-md-6 col-lg-6">
												<div className="fieldWrap mb-3">
													<label for="fName">First Name</label>
													<input type="text" placeholder="Enter your name" className="form-control" />
												</div>
											</div>
											<div className="col-12 col-md-6 col-lg-6">
												<div className="fieldWrap mb-3">
													<label for="email">Email</label>
													<input type="number" placeholder="Enter your Email" className="form-control" />
												</div>
											</div>
											<div className="col-12 col-md-12 col-lg-12">
												<div className="fieldWrap mb-3">
													<label for="address">Message</label>
													<textarea id="msg" name="msg" className="form-control" rows="4" cols="50" placeholder="Enter your message"></textarea>
												</div>
											</div>
										</div>
										<div className="btnWrapper mt-4">
											<button type="submit" className="customBtn">
												<img src="assets/images/btnBg.png" className="img-fluid" />
												<span>
													Submit <i className="fa-solid fa-arrow-right"></i>
												</span> 
											</button>
										</div>
									</div>
								</div>
								
							</div>
						</form>
	
						</div>	
					</div>
					
				</div>

	    </div>
	</div>
</section>
{/* <!-- End-SpaceIn-Section1 --> */}

    </div>
  )
}

export default Contact