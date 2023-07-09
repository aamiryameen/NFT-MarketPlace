import React from 'react'
import { Link } from 'react-router-dom';

function Cryppunks() {
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
					    <li className="breadcrumb-item active" aria-current="page">Kryp.ai</li>
					  </ol>
					</nav>
				</section>

				{/* <!--End Breadcrumb--> */}
			</div>
			<div className="col-12 col-md-12 col-lg-8">
				<div className="headingBg mb-3">
					<label className="subHeading font20">
						come into our space to see to new   
					</label>
				</div>
				<p className="Heading font60">
					Kryp.ai
				</p>
			</div>
	    </div>
	</div>
</section>
{/* <!-- BreadCrumb & Heading  --> */}

{/* <!-- SpaceShip-Section1 --> */}
<section className="spaceShip_sec1" id="shipTwo_sec1">
	<div className="container-fluid">
		<div className="spaceShip_imgBox position-relative">
			{/* <!--<img src="assets/images/space-ship-2.png" className="img-fluid">--> */}
			<div className="abs_sec">
				{/* <!-- <img src="assets/images/circle.png" className="img-fluid circleImg"> --> */}
				<img src="assets/images/line1.png" className="img-fluid line1Img" />
				<div className="btnWrapper">
					<Link to="/Bots" className="customBtn">
						<img src="assets/images/btnBg.png" className="img-fluid" />
						<span>
							bots <i className="fa-solid fa-arrow-right"></i>
						</span> 
					</Link>
				</div>
			</div>
			<div className="abs_sec2">
				{/* <!-- <img src="assets/images/circle.png" className="img-fluid circleImg"> --> */}
				<img src="assets/images/line2.png" className="img-fluid line2Img" />
				<div className="btnWrapper">
					<Link to="/Nftmarketplace" className="customBtn">
						<img src="assets/images/btnBg.png" className="img-fluid" />
						<span>
							Nft marketplace <i className="fa-solid fa-arrow-right"></i>
						</span> 
					</Link>
				</div>
			</div>
			<div className="abs_sec3 doubleLine_btn">
				<img src="assets/images/line3.png" className="img-fluid line3Img" />
				<div className="btnWrapper">
					<Link to="/Spaceinblockchain" className="customBtn">
						<img src="assets/images/btnBg.png" className="img-fluid" />
						<p>
							block chain <i className="fa-solid fa-arrow-right"></i>
						</p> 
						<p>smart contracts</p>
					</Link>
				</div>
			</div>
			<div className="abs_sec4">
				{/* <!-- <img src="assets/images/circle.png" className="img-fluid circleImg"> --> */}
				<img src="assets/images/line4.png" className="img-fluid line4Img" />
				<div className="btnWrapper">
					<Link to="/Training" className="customBtn">
						<img src="assets/images/btnBg.png" className="img-fluid" />
						<span>
							Training  <i className="fa-solid fa-arrow-right"></i>
						</span> 
					</Link>
				</div>
			</div>
			<div className="abs_sec5">
				<img src="assets/images/line5.png" className="img-fluid line5Img" />
				<div className="btnWrapper">
					<Link to="/RoadMap" className="customBtn">
						<img src="assets/images/btnBg.png" className="img-fluid" />
						<span>
							road map <i className="fa-solid fa-arrow-right"></i>
						</span> 
					</Link>
				</div>
			</div>
		</div>
	</div>
</section>
{/* <!-- End-SpaceShip-Section1  --> */}

    </div>
  )
}

export default Cryppunks