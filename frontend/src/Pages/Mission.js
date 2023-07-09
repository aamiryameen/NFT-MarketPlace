import React from 'react'
import { Link } from 'react-router-dom'

function Mission() {
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
					    <li className="breadcrumb-item active" aria-current="page">mission</li>
					  </ol>

					</nav>	
				</section>

				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>

{/* <!--End Breadcrumb-->


<!-- mission-Section1 --> */}
<section className="mission_sec1" id="trainingFrame">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox scrollBar">
						<div className="row">
							<div className="col-12 col-md-8 col-lg-8">
								<div className="headingBg">
									<label className="subHeading font20">
										come into our space to see to new   
									</label>
								</div>
								<p className="Heading font30 my-3">
									Making a Difference Through Metaverse and Virtual Reality 
								</p>
								<p className="font14 mt-5">
									At Kryp.ai, We Understand The Significance Of The Battle Against Plastic Pollution. With Plastics Ending Up In The Ocean, Humans And The Environment Will Remain Threatened. We Believe That You Can Make A Difference Through Metaverse And Virtual Reality.
								</p>
							</div>
							<div className="col-12 col-md-4 col-lg-4">
								<div className="mission_ryt_sec1">
									<img src="assets/images/planet02.png" className="img-fluid" alt="planet" />
								</div>
							</div>
							<div className="col-12 col-md-12 col-lg-12">
								<label className="font22 mt-3">Microplastics</label>
								<div className="peraBox">
									<p className="font14">
										Microplastics Cover Every Inch Of The World. There Is Scientific Calculations That Say Humans Might Eat 50,000 Particles A Year. People Are Finding Them In Breast Milk, In Newborns First Feces, In Our Blood. The Concern Now Is: Is It Getting Into Our Brains? We Have The Blood-Brain Barrier, Which Keeps Nasties Out Of Our Brain. But It’s Almost Certain That Nanoplastics Are Small Enough To Pass Through That. Matt Simon Has Said “The Less Plastic In Contact With Your Food The Better, Because Even If It’s Not Breaking Into Microplastics, It Could Be Leaching Chemicals Directly Into The Food.” The Tricky Thing About This Is That The Plastics Industry Is Not Required To Tell Us What’s In These Plastics. And Even Then, It Would Be Very Difficult Given The Diversity Of Plastic Products Around Us. A Bottle Is A Fundamentally Different Plastic Than Yoga Pants Or Something Like That. So What Chemists Have To Do Is They Actually Have To Reverse Engineer These Plastics In The Lab And Pick Apart Which Chemicals Are In Them. One Study Found That There Are At Least 10,500 Different Chemicals Used In Plastic, A Quarter Of Which Are Of Concern To Scientists — So They’re Either Known To Be Toxic Or Suspected To Be Toxic. We Just Need More Studies On What These Chemicals Are Doing To Our Bodies … Microplastics Sciences Is Very, Very New. We Didn’t Know About The Extent Of This Problem Until The Past Couple Of Decades.The Scientific Community Defines Microplastics As Fragments Of Any Type Of Plastic That Is Typically Less Than 5 Millimeters Long. Microplastics Can Further Break Down Into Nanoplastics, Typically Defined As Particles Smaller Than A Millionth Of A Meter.Scientists Are Finding That [Microplastics] Are Traveling Thousands Of Miles Because … It’s A Very Light, Less Dense Material. So We Are Now Finding These Things In All Sorts Of Environments That We Formally Thought To Be Pristine, [Like] Rain Forests. If You Have An Un-Contacted Tribe In South America, They Are Exposed To Microplastics … They’re Finding Tire Particles In Arctic Sea Ice, Far Away From Any Vehicles. You Can Ask Any Microplastics Scientist, Is There Anywhere That Is Untouched? And They Will Tell You, No, Nowhere. So When We Do Laundry [And] You Wash Your Synthetic Clothing, Millions Of These Fibers Break Off In A Single Load Of Laundry And Wash Out To A Wastewater-Treatment Facility. But Even When You And I Are Walking Down The Street — There Was One Calculation That Showed That We Shed Maybe A Billion Fibers A Year, Just By Moving Around In Our Synthetic Clothing. And Then The Other One, Obviously, Is When Microplastics, Like Bottles And Bags, Are Out There Floating Around, Breaking Down [Into Microplastics]. There Have Been A Number Of Studies That Have Quantified The Amount Of Microfibers … In The Home. When You Sit Down On A Couch That Is Made Out Of Synthetic Materials, Those Fibers Break Off As Well. Carpets Are A Major Source, But Even Vinyl Flooring. One Researcher Reckons That It Might Be Around 7,000 Particles That We’re Inhaling Each Day. And That Is For Adults. And When You Think About Toddlers Who Are Crawling Around On The Floor Where These Particles Are Settling.That Is The Extreme Concern Here. Microplastics In A State’s Air Could Equal To 3 Million Plastic Bottles A Year 	
									</p>
								</div>
							</div>
						</div>
						{/* <!-- Mission Row 2 --> */}
						<div className="mission_sec2">
							<div className="row text-center">
								<div className="col-12 col-md-12 col-lg-12">
									<div className="headingBg">
										<label className="subHeading font25">
											come into our space to see to new   
										</label>
									</div>
									<p className="Heading font30 my-3">
										supPORT OUR CAUSE
									</p>
									<p className="font14">
										You Can Contribute To The Realization Of Our Objectives By Subscribing To Our Membership Program At Cryppunkss.
									</p>
									<div className="btnWrapper mt-4">
										<Link to="#!" className="customBtn">
											<img src="assets/images/btnBg.png" className="img-fluid" />
											<span>
												Subscribe <i className="fa-solid fa-arrow-right"></i>
											</span> 
										</Link>
									</div>
								</div>
							</div>	
						</div>
						{/* <!-- End-Mission Row 2 -->
						<!-- Mission Row 3 --> */}
						<div className="mission_sec3 mt-3">
							<div className="row">
								<div className="col-12 col-md-12 col-lg-12">
									<div className="headingBg text-center">
										<label className="subHeading font25">
											come into our space to see to new   
										</label>
									</div>
									<p className="Heading font30 my-3">
										GRAB YOUR COPIES NOW
									</p>
									<div className="img_sec">
										<div className="row">
											{/* <!-- col --> */}
											<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
												<div className="imgBox">
													<img src="assets/images/mission-img1.png" className="img-fluid" alt="mission-img1" />
													<div className="absSec">
														<span>ETH230</span>
													</div>
													<div className="absSec2">
														<p className="font10">POPULAR BOOKS</p>
														<p className="font14">FEATURED</p>
													</div>
												</div>
											</div>
											{/* <!-- col --> */}
											<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
												<div className="imgBox">
													<img src="assets/images/mission-img2.png" className="img-fluid" alt="mission-img2" />
													<div className="absSec">
														<span>ETH230</span>
													</div>
													<div className="absSec2">
														<p className="font10">POPULAR BOOKS</p>
														<p className="font14">FEATURED</p>
													</div>
												</div>
											</div>
											{/* <!-- col --> */}
											<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
												<div className="imgBox">
													<img src="assets/images/mission-img3.png" className="img-fluid" alt="mission-img3" />
													<div className="absSec">
														<span>ETH230</span>
													</div>
													<div className="absSec2">
														<p className="font10">POPULAR BOOKS</p>
														<p className="font14">FEATURED</p>
													</div>
												</div>
											</div>
											{/* <!-- col --> */}
											<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
												<div className="imgBox">
													<img src="assets/images/mission-img4.png" className="img-fluid" alt="mission-img4" />
													<div className="absSec">
														<span>ETH230</span>
													</div>
													<div className="absSec2">
														<p className="font10">POPULAR BOOKS</p>
														<p className="font14">FEATURED</p>
													</div>
												</div>
											</div>
											{/* <!-- col --> */}
											<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
												<div className="imgBox">
													<img src="assets/images/mission-img1.png" className="img-fluid" alt="mission-img1" />
													<div className="absSec">
														<span>ETH230</span>
													</div>
													<div className="absSec2">
														<p className="font10">POPULAR BOOKS</p>
														<p className="font14">FEATURED</p>
													</div>
												</div>
											</div>
											{/* <!-- col --> */}
											<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
												<div className="imgBox">
													<img src="assets/images/mission-img2.png" className="img-fluid" alt="mission-img2" />
													<div className="absSec">
														<span>ETH230</span>
													</div>
													<div className="absSec2">
														<p className="font10">POPULAR BOOKS</p>
														<p className="font14">FEATURED</p>
													</div>
												</div>
											</div>
											{/* <!-- col --> */}
											<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
												<div className="imgBox">
													<img src="assets/images/mission-img3.png" className="img-fluid" alt="mission-img3" />
													<div className="absSec">
														<span>ETH230</span>
													</div>
													<div className="absSec2">
														<p className="font10">POPULAR BOOKS</p>
														<p className="font14">FEATURED</p>
													</div>
												</div>
											</div>
											{/* <!-- col --> */}
											<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
												<div className="imgBox">
													<img src="assets/images/mission-img4.png" className="img-fluid" alt="mission-img4" />
													<div className="absSec">
														<span>ETH230</span>
													</div>
													<div className="absSec2">
														<p className="font10">POPULAR BOOKS</p>
														<p className="font14">FEATURED</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>
						{/* <!-- End-Mission Row 3 --> */}
					</div>
					
				</div>
			</div>
	    </div>
	</div>
</section>
{/* <!-- End-Mission-Section1 --> */}

    </div>
  )
}

export default Mission