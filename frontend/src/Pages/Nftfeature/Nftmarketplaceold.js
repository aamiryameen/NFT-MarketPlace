import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nftfeature from './Nftfeature';
import Nftfeature2 from './Nftfeature2';
import { Link } from 'react-router-dom';


function Nftmarketplace() {

	
		// linking tab
		const [activeTab, setActiveTab] = useState('nftTab1');
	  
		const handleTabClick = (tabId) => {
		  setActiveTab(tabId);
		};

		// second OLD
	
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
				price: image.price, // added price
				category: image.category, // added category
				imageElement: <img src={`data:image/jpeg;base64,${image.base64}`} alt={image.title} />,
			  };
			}
			return null;
		  };

		  // secound old code end here
	  
		// const renderImageById = (id) => {
		// 	const image = images.find((img) => img.id === id);
		// 	if (image) {
		// 	  return {
		// 		id: image.id,
		// 		title: image.title,
		// 		description: image.description,
		// 		imageElement: <img src={`data:image/jpeg;base64,${image.base64}`} alt={image.title} />,
		// 	  };
		// 	}
		// 	return null;
		//   };
		
		  const image1 = renderImageById(1);
		  const image2 = renderImageById(2);
		  const image3 = renderImageById(3);
		  const image4 = renderImageById(4);
		  const image5 = renderImageById(5);
		  const image6 = renderImageById(6);
		  const image7 = renderImageById(7);
		  const image8 = renderImageById(8);



	// Second code now working

		// const [images, setImages] = useState([]);
	  
		// const fetchImages = async () => {
		//   try {
		// 	const res = await axios.get('http://localhost:5000/api/images');
		// 	const imageData = res.data.map((image, index) => ({
		// 	  id: index + 1,
		// 	  ...image,
		// 	  base64: arrayBufferToBase64(image.img.data.data),
		// 	}));
		// 	setImages(imageData);
		//   } catch (err) {
		// 	console.error(err);
		//   }
		// };
	  
		// useEffect(() => {
		//   fetchImages();
		// }, []);
	  
		// const arrayBufferToBase64 = (buffer) => {
		//   let binary = '';
		//   const bytes = new Uint8Array(buffer);
		//   const len = bytes.byteLength;
	  
		//   for (let i = 0; i < len; i++) {
		// 	binary += String.fromCharCode(bytes[i]);
		//   }
	  
		//   return window.btoa(binary);
		// };
	  
		// const renderImageById = (id) => {
		//   const image = images.find((img) => img.id === id);
		//   if (image) {
		// 	return {
		// 	  title: image.title,
		// 	  description: image.description,
		// 	  renderedImage: (
		// 		<div key={image.id}>
		// 		  <img src={`data:image/jpeg;base64,${image.base64}`} alt={image.title} />
		// 		</div>
		// 	  ),
		// 	};
		//   }
		//   return null;
		// };
	  
		// const imageDetails = renderImageById(1);


		// first code

//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [images, setImages] = useState([]);

//   const fetchImages = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/images');
//       setImages(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('image', selectedFile);

//     try {
//       await axios.post('http://localhost:5000/api/upload', formData);
//       setTitle('');
//       setDescription('');
//       setSelectedFile(null);
//       fetchImages();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const arrayBufferToBase64 = (buffer) => {
//     let binary = '';
//     const bytes = new Uint8Array(buffer);
//     const len = bytes.byteLength;

//     for (let i = 0; i < len; i++) {
//       binary += String.fromCharCode(bytes[i]);
//     }

//     return window.btoa(binary);
//   };
  
  return (
	<div>
		{/* <!-- BreadCrumb & Heading --> */}
<section class="breadcrumb_flexRow">
	<div class="container">
		<div class="row">
			<div class="col-12 col-md-12 col-lg-12">
				{/* <!--Breadcrumb--> */}
				<section class="breadCrumb_wrapper">
					<nav aria-label="breadcrumb">
					  <ol class="breadcrumb">
					    <li class="breadcrumb-item"><a href="/">Home</a></li>
					    <li class="breadcrumb-item"><a href="/cryppunks">cryppunks</a></li>
					    <li class="breadcrumb-item active" aria-current="page">nft marketplace</li>
					  </ol>
					</nav>	
				</section>
				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>
{/* <!-- BreadCrumb & Heading  --> */}

{/* <!-- nft_market-Section1 --> */}
<section class="nft_market_sec1">
	<div class="container">
		<div class="row">
			<div class="col-12 col-md-12 col-lg-12">
				<div class="frame">
					<div class="frame_contentBox scrollBar">
						<div class="row">
							<div class="col-12 col-md-12 col-lg-12 text-center">
								<div class="headingBg mb-3">
									<label class="subHeading font25">
										come into our space to see to new   
									</label>
								</div>
								<p class="Heading font30 text-center m-auto">
									Our NFTS
								</p>
							</div>
						</div>
						<div class="tabBox">
							<ul class="nav nav-pills justify-content-center my-4" id="pills-tab" role="tablist">
							  <li class="nav-item" role="presentation">
							  <button
								className={`nav-link ${activeTab === 'nftTab1' ? 'active' : ''}`}
								id="nftTab1-tab"
								data-bs-toggle="pill"
								data-bs-target="#nftTab1"
								type="button"
								role="tab"
								aria-controls="nftTab1"
								aria-selected={activeTab === 'nftTab1'}
								onClick={() => handleTabClick('nftTab1')}
							>
								Galaxical space
							</button>
							    {/* <button class="nav-link active" id="nftTab1-tab" data-bs-toggle="pill" data-bs-target="#nftTab1" type="button" role="tab" aria-controls="nftTab1" aria-selected="true">Galaxical space</button> */}
							  </li>
							  <li class="nav-item" role="presentation">
							  <button
									className={`nav-link ${activeTab === 'nftTab2' ? 'active' : ''}`}
									id="nftTab2-tab"
									data-bs-toggle="pill"
									data-bs-target="#nftTab2"
									type="button"
									role="tab"
									aria-controls="nftTab2"
									aria-selected={activeTab === 'nftTab2'}
									onClick={() => handleTabClick('nftTab2')}
								>
									ufo
								</button>
							    {/* <button class="nav-link" id="nftTab2-tab" data-bs-toggle="pill" data-bs-target="#nftTab2" type="button" role="tab" aria-controls="nftTab2" aria-selected="false">ufo</button> */}
							  </li>
							  <li class="nav-item" role="presentation">
							  <button
									className={`nav-link ${activeTab === 'nftTab3' ? 'active' : ''}`}
									id="nftTab3-tab"
									data-bs-toggle="pill"
									data-bs-target="#nftTab3"
									type="button"
									role="tab"
									aria-controls="nftTab3"
									aria-selected={activeTab === 'nftTab3'}
									onClick={() => handleTabClick('nftTab3')}
								>
									animation
								</button>

							    {/* <button class="nav-link" id="nftTab3-tab" data-bs-toggle="pill" data-bs-target="#nftTab3" type="button" role="tab" aria-controls="nftTab3" aria-selected="false">animation</button> */}
							  </li>
							  <li class="nav-item" role="presentation">

								<button
										className={`nav-link ${activeTab === 'nftTab4' ? 'active' : ''}`}
										id="nftTab4-tab"
										data-bs-toggle="pill"
										data-bs-target="#nftTab4"
										type="button"
										role="tab"
										aria-controls="nftTab4"
										aria-selected={activeTab === 'nftTab4'}
										onClick={() => handleTabClick('nftTab4')}
									>
										coins
									</button>
							    {/* <button class="nav-link" id="nftTab4-tab" data-bs-toggle="pill" data-bs-target="#nftTab4" type="button" role="tab" aria-controls="nftTab4" aria-selected="false">coins</button> */}
							  </li>
							</ul>
							<div class="tab-content" id="pills-tabContent">

							  {/* <!-- Tab1 --> */}
							  <div
								className={`tab-pane fade ${activeTab === 'nftTab1' ? 'show active' : ''}`}
								id="nftTab1"
								role="tabpanel"
								aria-labelledby="nftTab1-tab"
								>
							  {/* <div class="tab-pane fade show active" id="nftTab1" role="tabpanel" aria-labelledby="nftTab1-tab"> */}
							  	<div class="mission_sec3 mt-3">
							  		<div class="container">
							  				<div class="row">
										<div class="col-12 col-md-12 col-lg-12">
											<div class="img_sec">
												<div class="row">
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
														<div>
														<div>
														{image1 && image1.imageElement}
	   
    </div>
														</div>
													
															{/* <img src="assets/images/mission-img1.png" class="img-fluid" alt="mission-img1" /> */}
															<div class="absSec">
																<span>{image1 && image1.price}</span>
															</div>
															<div class="absSec2">
																<p class="font10">{image1 && image1.title}</p>
																<Link to="/Nftfeature" class="font14">FEATURED</Link>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
														<div>
														
														 {image2 && image2.imageElement}

	  
    
														
														</div>
															{/* <img src="assets/images/mission-img2.png" class="img-fluid" alt="mission-img2" /> */}
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">{image2 && image2.title}</p>
																<a href="/Nftfeature2" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															{image3 && image3.imageElement}
															{/* <img src="assets/images/mission-img3.png" class="img-fluid" alt="mission-img3" /> */}
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">{image3 && image3.title}</p>
																<a href="/Nftfeature3" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															{image4 && image4.imageElement}
															{/* <img src="assets/images/mission-img4.png" class="img-fluid" alt="mission-img4" /> */}
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">{image4 && image4.title}</p>
																<a href="/Nftfeature4" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															{image5 && image5.imageElement}
															{/* <img src="assets/images/mission-img1.png" class="img-fluid" alt="mission-img1" /> */}
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">{image5 && image5.title}</p>
																<a href="/Nftfeature5" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
														{image6 && image6.imageElement}
															{/* <img src="assets/images/mission-img2.png" class="img-fluid" alt="mission-img2" /> */}
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">{image6 && image6.title}</p>
																<a href="/Nftfeature6" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
														{image7 && image7.imageElement}
															{/* <img src="assets/images/mission-img3.png" class="img-fluid" alt="mission-img3" /> */}
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">{image7 && image7.title}</p>
																<a href="/Nftfeature7" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
														{image8 && image8.imageElement}
															{/* <img src="assets/images/mission-img4.png" class="img-fluid" alt="mission-img4" /> */}
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">{image8 && image8.title}</p>
																<a href="/Nftfeature8" class="font14">FEATURED</a>
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
							  {/* <!--Tab2 --> */}
							  <div
								className={`tab-pane fade ${activeTab === 'nftTab2' ? 'show active' : ''}`}
								id="nftTab2"
								role="tabpane2"
								aria-labelledby="nftTab2-tab"
								>
							  {/* <div class="tab-pane fade" id="nftTab2" role="tabpanel" aria-labelledby="nftTab2-tab"> */}
							  	{/* <!-- ufosection --> */}
							  </div>
							  {/* <!-- Tab3 --> */}
							  <div
								className={`tab-pane fade ${activeTab === 'nftTab3' ? 'show active' : ''}`}
								id="nftTab3"
								role="tabpane3"
								aria-labelledby="nftTab3-tab"
								>
							  {/* <div class="tab-pane fade" id="nftTab3" role="tabpanel" aria-labelledby="nftTab3-tab"> */}
							  	{/* <!-- animationsection --> */}
							  </div>
							  {/* <!-- Tab4 --> */}
							  {/* <div class="tab-pane fade" id="nftTab4" role="tabpanel" aria-labelledby="nftTab4-tab"> */}
							  <div
								className={`tab-pane fade ${activeTab === 'nftTab4' ? 'show active' : ''}`}
								id="nftTab4"
								role="tabpane4"
								aria-labelledby="nftTab4-tab"
								>
							  	<div class="mission_sec3 mt-3">
							  		<div class="container">
							  				<div class="row">
										<div class="col-12 col-md-12 col-lg-12">
											<div class="img_sec">
												<div class="row">
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															<img src="assets/images/coin.png" class="img-fluid" alt="mission-img1" />
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">POPULAR BOOKS</p>
																<a href="nft-feature.php" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															<img src="assets/images/coin2.png" class="img-fluid" alt="mission-img2" />
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">POPULAR BOOKS</p>
																<a href="nft-feature.php" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															<img src="assets/images/coin.png" class="img-fluid" alt="mission-img1" />
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">POPULAR BOOKS</p>
																<a href="nft-feature.php" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															<img src="assets/images/coin2.png" class="img-fluid" alt="mission-img2" />
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">POPULAR BOOKS</p>
																<a href="nft-feature.php" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															<img src="assets/images/coin.png" class="img-fluid" alt="mission-img1" />
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">POPULAR BOOKS</p>
																<a href="nft-feature.php" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															<img src="assets/images/coin2.png" class="img-fluid" alt="mission-img2" />
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">POPULAR BOOKS</p>
																<a href="nft-feature.php" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															<img src="assets/images/coin.png" class="img-fluid" alt="mission-img1" />
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">POPULAR BOOKS</p>
																<a href="nft-feature.php" class="font14">FEATURED</a>
															</div>
														</div>
													</div>
													{/* <!-- col --> */}
													<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
														<div class="imgBox">
															<img src="assets/images/coin2.png" class="img-fluid" alt="mission-img2" />
															<div class="absSec">
																<span>ETH230</span>
															</div>
															<div class="absSec2">
																<p class="font10">POPULAR BOOKS</p>
																<a href="nft-feature.php" class="font14">FEATURED</a>
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
					</div>
				</div>
			</div>
			</div>
			</div>
</section>
	</div>
  )
}

export default Nftmarketplace