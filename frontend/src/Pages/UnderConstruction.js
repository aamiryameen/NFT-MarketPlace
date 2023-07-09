import React from 'react'
import { Link } from 'react-router-dom'


function UnderConstruction() {
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
					    <li className="breadcrumb-item active" aria-current="page">under construction</li>
					  </ol>
					</nav>	
				</section>

				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>

{/* <!--End Breadcrumb--> */}


{/* <!-- Under-Construction-Section --> */}
<section className="under_construction_sec">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox">
						<div className="row text-center align-items-baseline mb-3">
								<div className="col-12 col-md-2 col-lg-2">
								<img src="assets/images/hourglass.png" alt="uc-img1" className="img-fluid" />
							</div>
							
							<div className="col-12 col-md-8 col-lg-8">
								<div className="headingBg">
									<label className="subHeading font25">
										come into our space to see to new   
									</label>
								</div>
							</div>
							<div className="col-12 col-md-2 col-lg-2">
								<img src="assets/images/chain.png" alt="uc-img2" className="img-fluid" />
							</div>	
						</div>
								<p className="Heading font60">
									Under Construction  
								</p>
										
								<p className="peraBox font14 py-3">
									Diam Sit Amet Nisl Suscipit. A Condimentum Vitae Sapien Pellentesque Habitant Morbi Tristique Senectus. Odio Tempor Orci Dapibus Ultrices In Iaculis Nunc Sed. Massa Enim Nec Dui Nunc Mattis Enim Ut Tellus. Mattis Aliquam Faucibus Purus In Massa Tempor Nec Feugiat Nisl. Augue Lacus Viverra Vitae Congue Eu Conseqsnc Sed. Massa Enim Nec Dui Nunc Mattis Enim Ut Tellus. Mattis Aliquam Faucib
								</p>
							</div>
						</div>	
					</div>
	    </div>
	</div>
</section>
{/* <!-- End-Under-Construction-Section1 --> */}

    </div>
  )
}

export default UnderConstruction