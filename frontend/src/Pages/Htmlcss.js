import React from 'react'
import { Link } from 'react-router-dom'

function Htmlcss() {
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
					    <li className="breadcrumb-item"><Link to="/Spacein">spacein</Link></li>
					    <li className="breadcrumb-item"><Link to="/Training">Training</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Html + Css</li>
					  </ol>

					</nav>	
				</section>

				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>

{/* <!--End Breadcrumb-->


<!-- Javascript-Section1 --> */}
<section className="javascript_sec1">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox scrollBar">
						<div className="row">
							<div className="col-12 col-md-8 col-lg-6 mb-4">
								<div className="headingBg mb-3">
									<label className="subHeading font20">
										come into our space to see to new   
									</label>
								</div>
								<p className="Heading font30 my-3">
									the complete HTML-CSS course-begin profesnersional 
								</p>
								<p className="font14 mt-5">
									One Time Payment Discounted Rate  $$$$ 
									<br />
									 3-5-Month Payment Plans

								</p>
								<div className="javascript_sec3 mt-3">
									<div className="row">
										<div className="col-12 col-md-6 col-lg-6">
											<div className="javascript_sec3_wrap">
												<p className="font18">
													3-Month plan
												</p>
												<ul>
													<li>1St $</li>
													<li>2Nd $$</li>
													<li>3Rd $$$</li>
												</ul>
											</div>
										</div>
										<div className="col-12 col-md-6 col-lg-6">
											<div className="javascript_sec3_wrap">
												<p className="font18">
													5-Month plan
												</p>
												<ul>
													<li>1St $</li>
													<li>2Nd $$</li>
													<li>3Rd $$$</li>
													<li>4Th $$$$</li>
													<li>5Th $$$$$</li>
												</ul>
											</div>
										</div>
									</div>	
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-6 mb-4">
								<div className="mission_ryt_sec1">
									<img src="assets/images/html-css.jpg" className="img-fluid" alt="planet" />
								</div>
							</div>
						</div>
						{/* <!-- HTML-Css Row 2 --> */}
						<div className="html_css_sec2 mt-4">
							<div className="row">
								<div className="col-12 col-md-6 col-lg-6">
									<div className="javascript_sec3_wrap">
										<p className="font20">
											Self-Directed    
										</p>
										<ul>
											<li>HTML & CSS – Self-Directed</li>
											<li>-Help With 2 Personal Projects</li>
											<li>-Get To Know Other classNamemates</li>
											<li>-Help With Resume And Interview Prep.</li>
											<li>-Unlimited Email And Chat Q&A.</li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-md-6 col-lg-6">
									<div className="border_padding javascript_sec3_wrap">
										<p className="font20">
											Live-classNamees
										</p>
										<ul>
											<li>HTML & CSS -Live classNamees</li>
											<li>-Everything From The Self-Directed Plan</li>
											<li>- 8 Weeks Of Live classNamees (2 Hrs. Per Week )</li>
											<li>- 6 Hours Of Dedicated Live Q&A. </li>
											<li>-Access To All Future Videos And Code </li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- HTML-Css Row 2 -->
						<!-- Html-Css Row 3 --> */}
						<div className="html_css_sec3 mt-5">
							<div className="row">
								<div className="col-12 col-md-12 col-lg-12">
									<div className="headingBg">
										<label className="subHeading font20">
											come into our space to see to new   
										</label>
									</div>
									<p className="Heading font30 my-3">
										When you will learn
									</p>
									<p className="font14 mt-2">
										This Course Covers The Fundamentals Of HTML & CSS. It Is The Best Way To Learn HTML & CSS In 2022. The Entire Course Was Re-Written In 2021.
										The Lessons & Challenges Will Guide You Through These Topics Step By Step And Its Project-Based Approach Will Help You Reinforce These Concepts. HTML And CSS

									</p>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col-12 col-md-12 col-lg-12">
									<div className="html_css_sec3_li">
										<ul>
											<li>Introduction To HTML</li>
											<li>Introduction To HTML Overview</li>
											<li>Getting Started With HTML</li>
											<li>What's In The Head? Metadata In HTML</li>
											<li>HTML Text Fundamentals</li>
											<li>Creating Hyperlinks</li>
											<li>Advanced Text Formatting</li>
											<li>Document And Website Structure</li>
											<li>Debugging HTML</li>
											<li>Assessment: Marking Up A Letter</li>
											<li>Assessment: Structuring A Page Of Content</li>
											<li>Multimedia And Embedding</li>
											<li>HTML Tables</li>
											<li>CSS — Styling The Web</li>
											<li>CSS First Steps</li>
											<li>CSS Building Blocks</li>
											<li>Styling Text</li>
											<li>CSS Layout</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- End-Html-Css Row 3 --> */}
					</div>
					
				</div>
			</div>
	    </div>
	</div>
</section>

    </div>
  )
}

export default Htmlcss