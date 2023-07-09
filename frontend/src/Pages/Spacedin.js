import React from 'react'
import { Link } from 'react-router-dom'


function Spacedin() {
  return (
    <div>

{/* <!-- BreadCrumb & Heading --> */}
<section className="breadcrumb_flexRow">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-4">
				{/* <!--Breadcrumb--> */}
				<section className="breadCrumb_wrapper">
					<nav aria-label="breadcrumb">
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Spaced in</li>
					  </ol>
					</nav>
				</section>

				{/* <!--End Breadcrumb--> */}
			</div>
			<div className="col-12 col-md-12 col-lg-8">
				<div className="headingBg">
					<label className="subHeading font20">
						come into our space to see to new   
					</label>
				</div>
				<p className="Heading pySpace font60">
					spaced in 
				</p>
			</div>
	    </div>
	</div>
</section>
{/* <!-- BreadCrumb & Heading  -->

<!-- SpaceShip-Section1 --> */}
<section className="spaceIn_sec1">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-6 col-lg-4 mb-4">
				<div className="spaceIn_wrapper">
					<div className="frame_contentBox">
						<label className="font25">basic</label>
						<p>
							<span className="font30"><b>$2</b></span> / month
						</p>
						<ul>
							<li>the point of using lorem</li>
							<li>the point of using lorem</li>
							<li>the point of using lorem</li>
						</ul>
						<div className="btnWrapper">
							<Link to="/Membershipform" className="customBtn">
								<img src="assets/images/btnBg.png" className="img-fluid" />
								<span>
									buy now <i className="fa-solid fa-arrow-right"></i>
								</span> 
							</Link>
						</div>	
						
					</div>
					<div className="absImg">
						<img src="assets/images/spacedin-abs-img1.png" className="img-fluid" />
					</div>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 mb-4">
				<div className="spaceIn_wrapper">
					<div className="frame_contentBox">
						<label>Standard</label>
						<p>
							<span><b>$2</b></span> / month
						</p>
						<ul>
							<li>the point of using lorem</li>
							<li>the point of using lorem</li>
							<li>the point of using lorem</li>
						</ul>	
						<div className="btnWrapper">
							<Link to="/Membershipform" className="customBtn">
								<img src="assets/images/btnBg.png" className="img-fluid" />
								<span>
									buy now <i className="fa-solid fa-arrow-right"></i>
								</span> 
							</Link>
						</div>	
					</div>
					<div className="absImg">
						<img src="assets/images/spacedin-abs-img2.png" className="img-fluid" />
					</div>
				</div>
			</div>
			<div className="col-12 col-md-6 col-lg-4 mb-4">
				<div className="spaceIn_wrapper">
					<div className="frame_contentBox">
						<label>Premium</label>
						<p>
							<span><b>$2</b></span> / month
						</p>
						<ul>
							<li>the point of using lorem</li>
							<li>the point of using lorem</li>
							<li>the point of using lorem</li>
						</ul>	
						<div className="btnWrapper">
							<Link to="/Membershipform" className="customBtn">
								<img src="assets/images/btnBg.png" className="img-fluid" />
								<span>
									buy now <i className="fa-solid fa-arrow-right"></i>
								</span> 
							</Link>
						</div>	
					</div>
					<div className="absImg">
						<img src="assets/images/spacedin-abs-img3.png" className="img-fluid" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/* <!-- End-SpaceShip-Section1  --> */}

    </div>
  )
}

export default Spacedin