import React from 'react'
import Home from './Pages/Home'
import Bots from './Pages/Bots'
import Connectwallet from './Pages/Connectwallet'
import Contact from './Pages/Contact'
import Cryppunks from './Pages/Cryppunks'
import Faqs from './Pages/Faqs'
import Htmlcss from './Pages/Htmlcss'
import Javacript from './Pages/Javacript'
import Membershipform from './Pages/Membershipform'
import Mission from './Pages/Mission'
import Nftfeature from './Pages/Nftfeature'
import Nftfeature2 from './Pages/Nftfeature2'
import Nftmarketplace from './Pages/Nftmarketplace'
import Privacy from './Pages/Privacy'
import RoadMap from './Pages/RoadMap'
import Spacedin from './Pages/Spacedin'
import Spacedinregister from './Pages/Spacedinregister'
import Spacein from './Pages/Spacein'
import Spaceinblockchain from './Pages/Spaceinblockchain'
import Spaceinmission from './Pages/Spaceinmission'
import Termconditions from './Pages/Termconditions'
import Training from './Pages/Training'
import UnderConstruction from './Pages/UnderConstruction'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Components/Login'
import AdminDashboard from './Components/AdminDashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/Bots" element={<Bots />} />
          <Route path="/Connectwallet" element={<Connectwallet />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cryppunks" element={<Cryppunks />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Htmlcss" element={<Htmlcss />} />
          <Route path="/Javacript" element={<Javacript />} />
          <Route path="/Membershipform" element={<Membershipform />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/Nftfeature/:id" element={<Nftfeature />} />
          <Route path="/Nftfeature2" element={<Nftfeature2 />} />
          <Route path="/Nftmarketplace" element={<Nftmarketplace />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/RoadMap" element={<RoadMap />} />
          <Route path="/Spacedin" element={<Spacedin />} />
          <Route path="/Spacedinregister" element={<Spacedinregister />} />
          <Route path="/Spacein" element={<Spacein />} />
          <Route path="/Spaceinblockchain" element={<Spaceinblockchain />} />
          <Route path="/Spaceinmission" element={<Spaceinmission />} />
          <Route path="/Termconditions" element={<Termconditions />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/UnderConstruction" element={<UnderConstruction />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
