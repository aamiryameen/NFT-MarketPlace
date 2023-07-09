import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

function Training() {
  const [activeTab, setActiveTab] = useState("Galaxical Space");
  const [categories, setCategories] = useState(['Galaxical Space', 'Bots', 'Training']);
  const [images, setImages] = useState([]);

  const handleTabChange = (tabId) => {
		setActiveTab(tabId);
		fetchImages(tabId)
	};

  const arrayBufferToBase64 = (buffer) => {
		let binary = '';
		const bytes = new Uint8Array(buffer);
		const len = bytes.byteLength;
	
		for (let i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
		}
	
		return window.btoa(binary);
	};

  const fetchImages = async (category) => {
		try {
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
	  
	useEffect(() => {
		fetchImages(categories[0]);
	}, []);
  

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
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/Spacein">spacein</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      training
                    </li>
                  </ol>
                </nav>
              </section>

              {/* <!--End Breadcrumb--> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!--End Breadcrumb--> */}

      {/* <!-- mission-Section1 --> */}
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
                        Comprehensive Information Around Digital Transformation
                      </p>
                      <p className="font14 mt-5">
                        Cryppunkss Is Your One-Stop Shop For Information About
                        NFT And Metaverse. We Have The Resources You Need To
                        Navigate Through The Transformation That’s Happening In
                        The Digital Sphere.
                      </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                      <div className="mission_ryt_sec1">
                        <img
                          src="assets/images/astronaut.png"
                          className="img-fluid"
                          alt="planet"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Tx`raining Row 2 --> */}
                  <div className="training_sec2">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="tabBox">
                          <ul
                            className="nav nav-pills justify-content-center my-4"
                            id="pills-tab"
                            role="tablist"
                          >
                            {
                              categories.map((category, index) => {
                                return (
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className={`nav-link ${activeTab === category ? 'active' : ''}`}
                                      id={`${category}-tab`}
                                      data-bs-toggle="pill"
                                      data-bs-target={`#${category}`}
                                      type="button"
                                      role="tab"
                                      aria-controls={category}
                                      aria-selected={activeTab === category}
                                      onClick={() => handleTabChange(category)}
                                    >
                                      {category}
                                    </button>
                                  </li>
                                  )
                                })
                            }
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            {/* <!-- List --> */}
                            <div
                              className="tab-pane fade show active"
                              id="traingTab1"
                              role="tabpanel"
                              aria-labelledby="traingTab1-tab"
                            >
                              <div className="img_sec">
                                <div className="row">
                                  {/* <!-- col --> */}
                                  {
                                    images.map((nft, index) => {
                                        return (
                                        <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                          <div className="imgBox">
                                          <div style={{ maxHeight: "171px", overflow: "hidden"}}>
                                            <img
                                              src={`data:image/jpeg;base64,${nft.base64}`} alt={nft.title}
                                              className="img-fluid"
                                            />
                                            <div className="absSec2">
                                            <Link to={`/Nftfeature/${nft._id}`} className="font14">{nft.title}</Link>
                                            </div>
                                          </div>
                                          </div>
                                        </div>
                                      )
                                    })
                                  }
                                  {/* <!-- col --> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End-Training Row 2 --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End-Mission-Section1 --> */}
    </div>
  );
}

export default Training;
