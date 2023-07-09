import React from 'react'
import { Link } from 'react-router-dom';


function Faqs() {
  return (
    <div>
        {/* <!--Breadcrumb--> */}
<section className="breadcrumb_flexRow">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				{/* <!--Breadcrumb--> */}
				<section className="breadCrumb_wrapper">
					<nav aria-label="breadcrumb">
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">faqs</li>
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
<section className="SpaceIn_Misson_sec" id="faqs_sec">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox scrollBar">
						<div className="container">
							<div className="row text-center">	
								<div className="col-12 col-md-12 col-lg-12">
									<div className="headingBg mb-3">
										<label className="subHeading font25">
											come into our space to see to new   
										</label>
									</div>
									<p className="Heading font30 m-auto">
										FREQUENTLY ASKED QUESTIONS
									</p>
									{/* <!--Accordion--> */}
									<div className="accordion customAccordion mt-4" id="accordionExample">
									  <div className="accordion-item">
									    <h2 className="accordion-header" id="headingOne">
									      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									        How can I get a crypp?
									      </button>
									    </h2>
									    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
									      <div className="accordion-body">
									        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									      </div>
									    </div>
									  </div>
									  <div className="accordion-item">
									    <h2 className="accordion-header" id="headingTwo">
									      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									        How can I mint my nft ?
									      </button>
									    </h2>
									    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
									      <div className="accordion-body">
									        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									      </div>
									    </div>
									  </div>
									  <div className="accordion-item">
										    <h2 className="accordion-header" id="headingThree">
										      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										       How can my purchase help with microplastics ?
										      </button>
										    </h2>
										    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
										      <div className="accordion-body">
										        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										      </div>
										    </div>
									  </div>
									  <div className="accordion-item">
										    <h2 className="accordion-header" id="headingFour">
										      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
										       How can my purchase help with microplastics ?
										      </button>
										    </h2>
										    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
										      <div className="accordion-body">
										        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
{/* <!-- End-SpaceIn-Section1 --> */}

    </div>
  )
}

export default Faqs