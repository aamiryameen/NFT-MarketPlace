import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';

	const Connectwallet = () => {
		const [web3, setWeb3] = useState(null);
		const [accounts, setAccounts] = useState([]);
		const [selectedAccount, setSelectedAccount] = useState('');
	  
		const connectToMetaMask = async () => {
		  if (window.ethereum) {
			try {
			  await window.ethereum.request({ method: 'eth_requestAccounts' });
	  
			  const web3Instance = new Web3(window.ethereum);
			  setWeb3(web3Instance);
	  
			  const accounts = await web3Instance.eth.getAccounts();
			  setAccounts(accounts);
	  
			  setSelectedAccount(accounts[0]);
			} catch (error) {
			  console.error('Error connecting to MetaMask:', error);
			}
		  } else {
			console.error(
			  'MetaMask not found. Please install MetaMask and try again.'
			);
		  }
		};
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
					    <li className="breadcrumb-item active" aria-current="page">Connect Wallet</li>
					  </ol>
					</nav>	
				</section>
				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>
{/* <!-- BreadCrumb & Heading  --> */}

{/* <!-- Connect Wallet-Section1 --> */}
<section className="connect_wallet_sec1">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox mt-4">
						<div className="row">
							<div className="col-12 col-md-12 col-lg-12">
								<div className="headingBg text-center mb-3">
									<label className="subHeading font25">
										come into our space to see to new   
									</label>
								</div>
								<p className="Heading font30 text-center m-auto">
									Connect Wallet
								</p>
								{/* <!-- Connect Wallet Row2 --> */}
								<div className="connect_wallet_sec2 mt-5">
									<div className="row text-center justify-content-center">
										<div className="col-4 col-sm-3 col-md-2 col-lg-2 mb-4">
											<div className="walletBox mb-2">
												<img src="assets/images/walllet-img1.png" className="img-fluid" alt="Wallet-img1" />
											</div>	
										</div>
										<div className="col-4 col-sm-3 col-md-2 col-lg-2 mb-4">
											<div className="walletBox mb-2">
												<img src="assets/images/walllet-img2.png" className="img-fluid" alt="Wallet-img2" onClick={connectToMetaMask} />
											</div>	
										</div>
										<div className="col-4 col-sm-3 col-md-2 col-lg-2 mb-4">
											<div className="walletBox mb-2">
												<img src="assets/images/walllet-img3.png" className="img-fluid" alt="Wallet-img3" />
											</div>	
										</div>
									</div>
									<div className="row text-center justify-content-center">	
										<div className="col-4 col-sm-3 col-md-2 col-lg-2 mb-4">
											<div className="walletBox mb-2">
												<img src="assets/images/walllet-img4.png" className="img-fluid" alt="Wallet-img4" />
											</div>	
										</div>
										<div className="col-4 col-sm-3 col-md-2 col-lg-2 mb-4">
											<div className="walletBox mb-2">
												<img src="assets/images/walllet-img5.png" className="img-fluid" alt="Wallet-img5" />
											</div>	
										</div>
										<div className="col-4 col-sm-3 col-md-2 col-lg-2 mb-4">
											<div className="walletBox mb-2">
												<img src="assets/images/walllet-img6.png" className="img-fluid" alt="Wallet-img6" />
											</div>	
										</div>
									</div>	
								</div>
								{/* <!-- Row3 --> */}
								<div className="connect_wallet_sec3 mb-2">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label" for="flexCheckDefault">By ticking,you are confirming that you have read and agreed to <Link to="./termconditions">Teams and Conditions</Link> </label>
								</div>
								<div className="connect_wallet_sec3">
								  	<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								  	<label className="form-check-label" for="flexCheckDefault">
								   	 By ticking,you are confirming that you have read and agreed to
								   	 <Link to="./privacy">Privacy policy</Link>
								  	</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	    </div>
	</div>
</section>
{/* <!-- End-Connect Wallet-Section1  --> */}
</div>

  )
}

export default Connectwallet