import React from 'react'
import { Link } from 'react-router-dom'


function Spacedinregister() {
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
					    <li className="breadcrumb-item"><Link to="/p">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">spaced in register</li>
					  </ol>
					</nav>	
				</section>

				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>

{/* <!--End Breadcrumb-->


<!-- SpaceIn-Misson-Section --> */}
<section className="SpaceIn_Misson_sec">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox">
						<div className="row text-center">
							<div className="col-12 col-md-12 col-lg-12">
								<div className="headingBg">
									<label className="subHeading font25">
										come into our space to see to new   
									</label>
								</div>
								</div>
								<div className="row align-items-baseline">
									<div className="col-12 col-md-2 col-lg-2">
										<img src="assets/images/alien.png" alt="spaced-in-img1" className="img-fluid" />
									</div>
									<div className="col-12 col-md-8 col-lg-8">
										<p className="Heading font30">
											SPACED iN  
										</p>
										<p className="font20 mt-3">
											Register now, At low price
										</p>
									</div>
									<div className="col-12 col-md-2 col-lg-2">
										<img src="assets/images/hourglass.png" alt="spaced-in-img1" className="img-fluid" />
									</div>	
								</div>
								<p className="peraBox font14 py-3">
									Diam Sit Amet Nisl Suscipit. A Condimentum Vitae Sapien Pellentesque Habitant Morbi Tristique Senectus. Odio Tempor Orci Dapibus Ultrices In Iaculis Nunc Sed. Massa Enim Nec Dui Nunc Mattis Enim Ut Tellus. Mattis Aliquam Faucibus Purus In Massa Tempor Nec Feugiat Nisl. Augue Lacus Viverra Vitae Congue Eu Conseqsnc Sed. Massa Enim Nec Dui Nunc Mattis Enim Ut Tellus. Mattis Aliquam Faucib
								</p>
								<div className="btnWrapper">
									{/* <Link to="/Spacedin" className="customBtn">
										<img src="assets/images/btnBg.png" className="img-fluid" />
										<span>
											Register Now <i className="fa-solid fa-arrow-right"></i>
										</span> 
									</Link> */}

									<Link to="/RegisterForm" className="customBtn">
										<img src="assets/images/btnBg.png" className="img-fluid" />
										<span>
											Register Now <i className="fa-solid fa-arrow-right"></i>
										</span> 
									</Link>
								</div>
								<p className="font12">
									<Link to="/login">ALREADY HAVE AN ACCOUNT?</Link>
								</p>
							</div>
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

export default Spacedinregister