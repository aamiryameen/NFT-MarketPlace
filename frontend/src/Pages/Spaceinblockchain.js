import React from 'react'
import { Link } from 'react-router-dom'

function Spaceinblockchain() {
  return (
    <div>

{/* <!--Breadcrumb--> */}
<section className="breadcrumb_flexRow">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				{/* <!--Breadcrumb--> */}
				<section className="breadCrumb_wrapper blockchain_breadCrumb">
					<nav aria-label="breadcrumb">
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item"><Link to="/Spacein">spacein</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">block chain smart contracts</li>
					  </ol>

					</nav>	
				</section>

				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>

{/* <!--End Breadcrumb--> */}


{/* <!-- BlacokChain-Section1 --> */}
<section className="blockchain_sec1">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox scrollBar">
						<div className="row text-center">
							<div className="col-12 col-md-12 col-lg-12">
								<div className="headingBg">
									<label className="subHeading font20 mb-3">
										come into our space to see to new   
									</label>
								</div>
								<p className="Heading font30 my-3 m-auto">
									BLOCKCHAIN SMART CONTRACTS
								</p>
								<div className="peraBox">	
									<p className="font14 my-5">
									 Ullamcorper Dignissim Cras Tincidunt Lobortis Feugiat Vivamus At Augue Eget. Netus Et Malesuada Fames Ac Turpis Egestas Integer. Non Sodales Neque Sodales Ut. Fermentum Iaculis Eu Non Diam Phasellus Vestibulum Lorem Sed Risus. Eleifend Quam Adipiscing Vitae Proin. Odio Pellentesque Diam Volutpat Commodo Sed Egestas Egestas. Sit Amet Massa Vitae Tortor Condimentum Lacinia. Nec Feugiat In Fermentum Posuere Urna. Pretium Viverra Suspendisse Potenti Nullam Ac.
									</p>	
								</div>
								
							</div>
						</div>
						{/* <!-- BlockChain Row 2 --> */}
						<div className="blockChain_sec2">
							<div className="row text-center">
								<div className="col-12 col-md-12 col-lg-12">
									<img src="assets/images/spacein-blockchain-img1.png" className="img-fluid" alt="spacein-blockchain-img1" />		
									<div className="peraBox">	
										<p className="font14">	
										 Ullamcorper Dignissim Cras Tincidunt Lobortis Feugiat Vivamus At Augue Eget. Netus Et Malesuada Fames Ac Turpis Egestas Integer. Non Sodales Neque Sodales Ut. Fermentum Iaculis Eu Non Diam Phasellus Vestibulum Lorem Sed Risus. Eleifend Quam Adipiscing Vitae Proin. Odio Pellentesque Diam Volutpat Commodo Sed Egestas Egestas. Sit Amet Massa Vitae Tortor Condimentum Lacinia. Nec Feugiat In Fermentum Posuere Urna. Pretium Viverra Suspendisse Potenti Nullam Ac.	
										</p>	
									</div>
									
								</div>
							</div>	
						</div>
						{/* <!-- End-BlockChain Row 2 --> */}
					</div>
					
				</div>
			</div>
	    </div>
	</div>
</section>
{/* <!-- End-BlacokChain-Section1 --> */}

    </div>
  )
}

export default Spaceinblockchain