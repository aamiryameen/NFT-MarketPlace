import React from 'react'
import { Link } from 'react-router-dom'


function RoadMap() {
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

{/* <!-- Road Map-Section1 --> */}
<section className="road_map_sec1">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox scrollBar mt-4 extraPadding">
						<div className="row">
							<div className="col-12 col-md-12 col-lg-12">
								<div className="headingBg text-center mb-3">
									<label className="subHeading font25">
										come into our space to see to new   
									</label>
								</div>
								<p className="Heading font30 text-center m-auto">
									roadmap
								</p>
								{/* <!-- Row-2 --> */}
								<div className="road_map_sec2">
									<div className="row">
										<div className="col-12 col-md-6 col-lg-5  offset-lg-lg-1">
											<div className="road_map_wrapper">
												<label>phase 1</label>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
													tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
													quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
													consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
													cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
													proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</p>
												<div className="absSec">
													<img src="assets/images/alien.png" className="img-fluid" />
												</div>
											</div>
										</div>	
										<div className="col-12 col-md-6 col-lg-5 offset-lg-2">
											<div className="road_map_wrapper">
												<label>phase 2</label>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
													tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
													quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
													consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
													cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
													proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</p>
												<div className="absSec">
													<img src="assets/images/rocket.png" className="img-fluid" />
												</div>
											</div>
										</div>	
										<div className="col-12 col-md-6 col-lg-5  offset-lg-lg-1">
											<div className="road_map_wrapper">
												<label>phase 3</label>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
													tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
													quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
													consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
													cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
													proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</p>
												<div className="absSec">
													<img src="assets/images/laser_gun.png" className="img-fluid" />
												</div>
											</div>
										</div>	
										<div className="col-12 col-md-6 col-lg-5 offset-lg-2">
											<div className="road_map_wrapper">
												<label>phase 4</label>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
													tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
													quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
													consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
													cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
													proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</p>
												<div className="absSec">
													<img src="assets/images/binoculars.png" className="img-fluid" />
												</div>
											</div>
										</div>	
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	    </div>
	</div>
</section>
{/* <!-- End-Road Map-Section1  --> */}

    </div>
  )
}

export default RoadMap