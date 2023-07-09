import React from 'react'
import { Link } from 'react-router-dom'

function Membershipform() {
  return (
    <div>

{/* <!--Breadcrumb--> */}
<section className="breadcrumb_flexRow">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-4 col-lg-4">
				{/* <!--Breadcrumb--> */}
				<section className="breadCrumb_wrapper">
					<nav aria-label="breadcrumb">
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">MEMBERSHIP FORM</li>
					  </ol>
					</nav>	
				</section>

				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>

{/* <!--End Breadcrumb--> */}


{/* <!-- SpaceIn-Misson-Section --> */}
<section className="SpaceIn_Misson_sec" id="memberShip_sec">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox">
						<div className="row text-center">
							<div className="col-12 col-md-12 col-lg-12">
								<div className="headingBg mb-3">
									<label className="subHeading font25">
										come into our space to see to new   
									</label>
								</div>
							</div>
						</div>	
						<div className="row align-items-baseline">
							<div className="col-12 col-md-6 col-lg-6 offset-md-4 offset-lg-4">
								<p className="Heading font30">
									MEMBERSHIP FORM 
								</p>
							</div>
							<div className="col-12 col-md-2 col-lg-2">
								<img src="assets/images/hourglass.png" alt="spaced-in-img1" className="img-fluid vector_img" />
							</div>	
						</div>
								
						<form action="">
							<div className="form_wrapper px-5">
								<div className="row">
									<div className="col-12 col-md-6 col-lg-6">
										<div className="fieldWrap mb-3">
											<label for="fName">First Name</label>
											<input type="text" placeholder="Enter your name" className="form-control" />
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-6">
										<div className="fieldWrap mb-3">
											<label for="lastName">Last Name</label>
											<input type="text" placeholder="Enter your last name" className="form-control" />
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-6">
										<div className="fieldWrap mb-3">
											<label for="phone">Phone Number</label>
											<input type="number" placeholder="Enter your Phone Number" className="form-control" />
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
											<label for="address">Address</label>
											<input type="number" placeholder="Enter your Address" className="form-control" />
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-6">
										<div className="fieldWrap mb-3">
											<label for="payment">Payment Method</label>
											<select className="form-select" aria-label="Default select example">
											  <option selected>select here.</option>
											  <option value="1">Select One</option>
											  <option value="2">Select Two</option>
											  <option value="3">Select Three</option>
											</select>
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-6">
										<div className="fieldWrap mb-3">
											<label for="date">Payment Date</label>
											<input type="date" name="date" id="date" className="form-control" placeholder="Enter Payment Date" />
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

export default Membershipform