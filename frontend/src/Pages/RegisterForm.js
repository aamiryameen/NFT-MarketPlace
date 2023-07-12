import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {  useState } from 'react'
import { AuthApi } from '../services/AuthService'


function Registrationform() {

    const [firstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onRegister = async (e) => {
        console.log('click')
        e.preventDefault();
     const userDetails = {
        firstName: firstName,
        lastName: LastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
     }

     if(password != confirmPassword){
         alert('Passsword must be matach')
     }else {
        const res = await AuthApi.singUp(userDetails)
        navigate("/login");
        console.log('result', res)
     }

    }

  return (
    <div>

{/* <!--Breadcrumb--> */}
<section className="breadcrumb_flexRow">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-4 col-lg-4">
				{/* <!--Breadcrumb--> */}
				<section className="breadCrumb_wrapper">
					<nav aria-label="breadcrumb">
					  <ol className="breadcrumb">
					    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">MEMBERSHIP FORM</li>
					  </ol>
					</nav>	
				</section>

				{/* <!--End Breadcrumb--> */}
			</div>
	    </div>
	</div>
</section>

{/* <!--End Breadcrumb--> */}


{/* <!-- SpaceIn-Misson-Section --> */}
<section className="SpaceIn_Misson_sec" id="memberShip_sec">
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="frame">
					<div className="frame_contentBox">
						<div className="row text-center">
							<div className="col-12 col-md-12 col-lg-12">
								<div className="headingBg mb-3">
									<label className="subHeading font25">
										come into our space to see to new   
									</label>
								</div>
							</div>
						</div>	
						<div className="row align-items-baseline">
							<div className="col-12 col-md-6 col-lg-6 offset-md-4 offset-lg-4">
								<p className="Heading font30">
									MEMBERSHIP FORM 
								</p>
							</div>
							<div className="col-12 col-md-2 col-lg-2">
								<img src="assets/images/hourglass.png" alt="spaced-in-img1" className="img-fluid vector_img" />
							</div>	
						</div>
								
						<form action="">
							<div className="form_wrapper px-5">
								<div className="row">
									<div className="col-12 col-md-6 col-lg-6">
										<div className="fieldWrap mb-3">
											<label for="fName">First Name</label>
											<input type="text" 
                                            placeholder="Enter your name"
                                            id='firstName'
                                             value={firstName}
                                             onChange={(e)=>{setFirstName(e.target.value)}}
                                             className="form-control" />
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-6">
										<div className="fieldWrap mb-3">
											<label for="lastName">Last Name</label>
											<input type="text" 
                                             placeholder="Enter your last name"
                                             id='lastName'
                                             value={LastName}
                                             onChange={(e)=>{setLastName(e.target.value)}}
                                              className="form-control" />
										</div>

									</div>
									<div className="col-12 col-md-6 col-lg-6">
										<div className="fieldWrap mb-3">
											<label for="email">Email</label>
											<input 
                                            type="email"
                                             placeholder="Enter your Email"
                                             id='email'
                                             value={email}
                                             onChange={(e)=>{setEmail(e.target.value)}}
                                              className="form-control" 
                                              />
										</div>
									</div>
                                    <div className="col-12 col-md-6 col-lg-6">
										<div className="fieldWrap mb-3">
											<label for="email">Password</label>
											<input 
                                            type="text" 
                                            placeholder="Password"
                                            id='password'
                                             value={password}
                                             onChange={(e)=>{setPassword(e.target.value)}}
                                             className="form-control" />
										</div>
									</div>
                                    <div className="col-12 col-md-6 col-lg-6">
										<div className="fieldWrap mb-3">
											<label for="email">Confirm Password</label>
											<input 
                                            type="text" 
                                            placeholder="Confirm Password"
                                            id='confirmPassword'
                                             value={confirmPassword}
                                             onChange={(e)=>{setConfirmPassword(e.target.value)}}
                                             className="form-control" />
										</div>
									</div>

								</div>
								<div className="btnWrapper mt-4">
									<button onClick={onRegister} type="submit" className="customBtn">
										<img src="assets/images/btnBg.png" className="img-fluid" />
										<span>
											Submit <i className="fa-solid fa-arrow-right"></i>
										</span> 
									</button>
								</div>
							</div>
						</form>
	
						</div>	
					</div>
					
				</div>
			</div>
	    </div>
	
</section>
{/* <!-- End-SpaceIn-Section1 --> */}

    </div>
  )
}

export default Registrationform