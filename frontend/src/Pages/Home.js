import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* <!-- Index-Section1 --> */}
<section className="index_sec1">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="headingBg mb-4">
					<label className="subHeading">
						Come into our space to see to new technology and trends    
					</label>
				</div>
				<p className="Heading pySpace">
					Come join us to ex<span className='text_stroke'>plore</span> our world in 3D-fu<span className='text_stroke'>ll</span> digital spectrum        
				</p>
				<div className="btnWrapper">
					{/* <Link to="/Spacein" className="customBtn">
						<img src="assets/images/btnBg.png" className="img-fluid" />
						<span>
							spaced in <i className="fa-solid fa-arrow-right"></i>
						</span> 
					</Link> */}
					<Link to="/Spacedinregister" className="customBtn">
						<img src="assets/images/btnBg.png" className="img-fluid" />
						<span>
							spaced in <i className="fa-solid fa-arrow-right"></i>
						</span> 
					</Link>
					<Link to="/Cryppunks" className="customBtn">
						<img src="assets/images/btnBg.png" className="img-fluid" />
						<span>
							cryppunks <i className="fa-solid fa-arrow-right"></i>
						</span> 
					</Link>
				</div>
			</div>
	    </div>
	</div>
</section>
{/* <!-- End-Index-Section1 -->
<!-- Index-Section2 --> */}
<section className="index_sec2">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-6 col-lg-6">
				<div className="index_sec2_lyt_item">
					<p className="pera16">
				      Our Magical World in 3D
					</p>
					<p className="pera14">
						Diam sit amet nisl suscipit. A condimentum vitae sapien pellentesque habitant morbi tristique
					</p>
				</div>
			</div>
			
			<div className="col-12 col-md-6 col-lg-6">
				<div className="index_sec2_ryt_item">
					<div className="row">
						<div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-4">
							<p className="pera12">
						      NFTs Minted
							</p>
							<p className="pera50">
								25
							</p>
						</div>
						<div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-4">
							<p className="pera12">
						      MEMBERS REGISTERED
							</p>
							<p className="pera50">
								230
							</p>
						</div>
						<div className="col-12 col-sm-4 col-md-4 col-lg-4 mb-4">
							<p className="pera12">
						     MEMBERS ONLINE
							</p>
							<p className="pera50">
								56
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


    </div>
  )
}

export default Home