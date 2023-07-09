// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const NFTList = () => {
//   const [nfts, setNfts] = useState();

//   useEffect(() => {
//     fetchNFTs();
//     }, []);
    
//     const fetchNFTs = async () => {
//     try {
//     const response = await axios.get("http://localhost:5000/api/nfts");
//     setNfts(response.data);
//     } catch (error) {
//     console.error("Error fetching NFTs:", error);
//     alert("Error fetching NFTs.");
//     }
//     };
    
//     return (
//     <div>
//     <h2>NFT List</h2>
//     {nfts.length === 0 ? (
//     <p>No NFTs found.</p>
//     ) : (
//     <ul>
//     {nfts.map((nft) => (
//     <li key={nft._id}>
//     <p>{nft.fileName}</p>
//     <img src={http://localhost:5000/${nft.fileUrl}} alt={nft.fileName} width="100" />
//     </li>
//     ))}
//     </ul>
//     )}
//     </div>
//     );
//     };
    
//     export default NFTList;



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function NftCard({ nft, mintNft }) {
// //   const [minting, setMinting] = useState(false);

// //   async function handleMintNft() {
// //     setMinting(true);
// //     await mintNft(nft.id);
// //     setMinting(false);
// //   }

// //   return (
// //     <div className="nft-card">
// //       <img src={nft.image} alt={nft.name} />
// //       <h2>{nft.name}</h2>
// //       <p>{nft.meta}</p>
// //       <p>Price: {nft.price} MATIC</p>
// //       <button disabled={minting} onClick={handleMintNft}>
// //         {minting ? 'Minting...' : 'Mint NFT'}
// //       </button>
// //     </div>
// //   );
// // }

// // function NftList() {
// //   const [nfts, setNfts] = useState([]);

// //   useEffect(() => {
// //     async function fetchNfts() {
// //       const response = await axios.get('/api/nfts');
// //       setNfts(response.data);
// //     }

// //     fetchNfts();
// //   }, []);

// //   async function mintNft(id) {
// //     try {
// //       const response = await axios.post('/api/mint', { id });
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }

// //   return (
// //     <div>
// //       <h1>NFTs for Sale</h1>
// //       {nfts.length === 0 ? (
// //         <p>Loading NFTs...</p>
// //       ) : (
// //         <div>
// //           {nfts.map((nft) => (
// //             <NftCard key={nft.id} nft={nft} mintNft={mintNft} />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default NftList;
