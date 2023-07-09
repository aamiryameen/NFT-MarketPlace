import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nftfeature from './Nftfeature';
import Nftfeature2 from './Nftfeature2';
import { Link } from 'react-router-dom';


function Nftmarketplace() {

	// linking tab
	const [activeTab, setActiveTab] = useState('Galaxical Space');
	const [categories, setCategories] = useState(['Galaxical Space', 'UFO', 'Animation', 'Coins']);

	// second OLD
	const [images, setImages] = useState([]);
	
	const fetchImages = async (category) => {
		try {
		// you need to change with backend api
		const res = await axios.get('https://api.democryppunkss.com/api/images?category='+category);
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

	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
		fetchImages(tabId)
	};
	
	useEffect(() => {
		fetchImages(categories[0]);
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
		<section className="breadcrumb_flexRow">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-12 col-lg-12">
						{/* <!--Breadcrumb--> */}
						<section className="breadCrumb_wrapper">
							<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="/">Home</a></li>
								<li className="breadcrumb-item"><a href="/cryppunks">Kryp.ai</a></li>
								<li className="breadcrumb-item active" aria-current="page">nft marketplace</li>
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
		<section className="nft_market_sec1" id="nftMarketPlace">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-12 col-lg-12">
						<div className="frame">
							<div className="frame_contentBox scrollBar">
								<div className="row">
									<div className="col-12 col-md-12 col-lg-12 text-center">
										<div className="headingBg mb-3">
											<label className="subHeading font25">
												come into our space to see to new   
											</label>
										</div>
										<p className="Heading font30 text-center m-auto">
											Our NFTS
										</p>
									</div>
								</div>
								<div className="tabBox">
									<ul className="nav nav-pills justify-content-center my-4" id="pills-tab" role="tablist">
										{
											categories.map((category, index) => {
												return (
												<li key={index} className="nav-item" role="presentation">
													<button
														className={`nav-link ${activeTab === category ? 'active' : ''}`}
														id={`${category}-tab`}
														data-bs-toggle="pill"
														data-bs-target={`#${category}`}
														type="button"
														role="tab"
														aria-controls={category}
														aria-selected={activeTab === category}
														onClick={() => handleTabClick(category)}
													>{category}</button>
													{/* <button class="nav-link active" id="nftTab1-tab" data-bs-toggle="pill" data-bs-target="#nftTab1" type="button" role="tab" aria-controls="nftTab1" aria-selected="true">Galaxical space</button> */}
												</li>
												)
											})
										}
									</ul>
									<div className="tab-content" id="pills-tabContent">
									{/* <!-- Tab1 --> */}
									<div
										className={`tab-pane fade show active`}
										id="nftTab1"
										role="tabpanel"
										aria-labelledby="nftTab1-tab"
										>
										{/* <div class="tab-pane fade show active" id="nftTab1" role="tabpanel" aria-labelledby="nftTab1-tab"> */}
										<div className="mission_sec3 mt-3">
											<div className="container">
												<div className="row">
													<div className="col-12 col-md-12 col-lg-12">
														<div className="img_sec">
															<div className="row">
																{/* <!-- col --> */}
																{
																	images.map((nft, index) => {
																		return (
																			<div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
																				<div className="imgBox">
																					<div style={{ maxHeight: "171px", overflow: "hidden"}}>
																						<img src={`data:image/jpeg;base64,${nft.base64}`} alt={nft.title} />
																					</div>
																					{/* <img src="assets/images/mission-img1.png" className="img-fluid" alt="mission-img1" /> */}
																					<div className="absSec">
																						<span>{nft.price}</span>
																					</div>
																					<div className="absSec2">
																						<p className="font10">{nft.title}</p>
																						<Link to={`/Nftfeature/${nft._id}`} className="font14">FEATURED</Link>
																					</div>
																				</div>
																			</div>
																		)
																	})
																}
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