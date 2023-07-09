import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Web3 from 'web3';
import contractABI from '../ABI.json';

function Nftfeature() {

	const { id } = useParams();
	const [images, setImages] = useState([]);
	const [transactionHash, setTransactionHash] = useState('')
	
	
	  // Mint a new NFT
	  const mintNFT = async () => {
		await window.ethereum.enable();
		const web3Instance = new Web3(window.ethereum);

		const networkId = await web3Instance.eth.net.getId();
		const contractInstance = new web3Instance.eth.Contract(
			contractABI, "0x2CA97CeB77D950034858D0336B591D0F6f6C8c2f"
		);
		console.log('contractInstance',contractInstance);

		try {
		  const accounts = await web3Instance.eth.getAccounts();
		  console.log(images);
		  const title = images[0].title;
		  const image = 'data:image/jpeg;base64,' + images[0].base64;
		  const price = Web3.utils.toWei((images[0].price).toString(), "ether");
		  const description = images[0].description;
	
		  	const result = await contractInstance.methods
			.mintNFT(title, image, price, description)
			.send({ from: accounts[0], value: price });

			if(result.transactionHash)
			{	
				window.location.href = 'https://etherscan.io/tx/' + result.transactionHash;
				setTransactionHash(result.transactionHash);
			}
		} catch (error) {
		  console.error(error);
		}
	
	  };
	
	const fetchImages = async () => {
		try {
			const res = await axios.get('https://api.democryppunkss.com/api/images?_id='+id);
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
	
		const image1 = renderImageById(1);

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
									<li className="breadcrumb-item"><Link to="/Cryppunks">Kryp.ai</Link></li>
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
											<div className="col-12 col-md-12 col-lg-4">
												<div className="imgBox">
												<div style={{ maxHeight: "171px", overflow: "hidden"}}>
													<div className="img-fluid" style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0, padding: "15px", display: "flex"}}> 
													{images.length > 0 && <img src={`data:image/jpeg;base64,${images[0].base64}`} alt={images[0].title} />}
													</div>
													<div className="absSec">
														<span>{images.length > 0 && images[0].price}</span>
													</div>
													<div className="absSec2">
														<p className="font10">{images.length > 0 && images[0].title}</p>
													</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-md-8 col-lg-8">
												<p className="font30">
												{images.length > 0 && images[0].title}
												</p>
												<p className="font14">
												{images.length > 0 && images[0].description}
												</p>
												<p className="py-3 font20">
													TIME LEFT
												</p>
												<div className="timeWrap">
													<img src="/assets/images/time.png" className="img-fluid" alt="timer" />
												</div>
												<div className="btnWrapper mt-4">
													<button  onClick={mintNFT} className="customBtn">
														<img src="/assets/images/btnBg.png" className="img-fluid" />
														<span>
															mint now <i className="fa-solid fa-arrow-right" ></i>
														</span> 
													</button>
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