// import React from 'react';
// import { Link } from 'react-router-dom'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Nftfeature() {

	const [images, setImages] = useState([]);
	  
		const fetchImages = async () => {
		  try {
			const res = await axios.get('http://localhost:5000/api/images');
			const imageData = res.data.map((image, index) => ({
			  id: index + 1,
			  ...image,
			  base64: arrayBufferToBase64(image.img.data.data),
			}));
			setImages(imageData);
		  } catch (err) {
			console.error(err);
		  }
		};
	  
		useEffect(() => {
		  fetchImages();
		}, []);
	  
		const arrayBufferToBase64 = (buffer) => {
		  let binary = '';
		  const bytes = new Uint8Array(buffer);
		  const len = bytes.byteLength;
	  
		  for (let i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i]);
		  }
	  
		  return window.btoa(binary);
		};
	  
		const renderImageById = (id) => {
			const image = images.find((img) => img.id === id);
			if (image) {
			  return {
				id: image.id,
				title: image.title,
				description: image.description,
				imageElement: <img src={`data:image/jpeg;base64,${image.base64}`} alt={image.title} />,
			  };
			}
			return null;
		  };
		
		  const image3 = renderImageById(8);

	// const MintForm = ({ mintNFT }) => {
	// 	const [title, setTitle] = useState('');
	// 	const [description, setDescription] = useState('');
	// 	const [price, setPrice] = useState('');
	// 	const handleSubmit = (e) => {
	// 		e.preventDefault();
	// 		mintNFT(title, description, parseInt(price));
	// 	  };

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
					    <li className="breadcrumb-item"><Link to="/Cryppunks">cryppunks</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">nft marketplace</li>
					  </ol>
					</nav>	
				</section>
				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>
{/* <!-- BreadCrumb & Heading  -->

<!-- nft_feature-Section1 --> */}
<section className="nft_feature_sec">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox scrollBar">
						<div className="img_sec">
							<div className="row">
								<div className="col-12 col-md-4 col-lg-4">
									<div className="imgBox">
										<div className="img-fluid"> 
										
										{image8 && image8.imageElement}
										</div>
										{/* <img src="assets/images/coin.png" className="img-fluid" alt="mission-img1" /> */}
										<div className="absSec">
											<span>ETH230</span>
										</div>
										<div className="absSec2">
											<p className="font10">{image8 && image8.title}</p>
											{/* <Link to="/Nftfeature/Nftfeature" className="font14">FEATURED</Link> */}
										</div>
									</div>
								</div>
								<div className="col-12 col-md-8 col-lg-8">
									<p className="font30">
									{image8 && image8.title}
									</p>
									<p className="font14">
									{image8 && image8.description}
									</p>
									<p className="py-3 font20">
										TIME LEFT
									</p>
									<div className="timeWrap">
										<img src="assets/images/time.png" className="img-fluid" alt="timer" />
									</div>
									<div className="btnWrapper mt-4">
										<Link to="Mission" className="customBtn">
											<img src="assets/images/btnBg.png" className="img-fluid" />
											<span>
												mint now <i className="fa-solid fa-arrow-right"></i>
											</span> 
										</Link>
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
{/* <!-- End-nft_feature-Section1  --> */}

    </div>
  );
}

export default Nftfeature;