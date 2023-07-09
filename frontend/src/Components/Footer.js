import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
            <footer>
            <div class="container">
                <div class="d-flex justify-content-between footerWrap">
                    <div class="footerLyt_item">
                        <ul class="d-flex">
                            <li><a href="mailto:example@cryppunks.com">example@kryp.ai</a></li>
                            <li><a href="tel:+123 (456) 789">+123 (456) 789</a></li>
                        </ul>
                    </div>
                    <div class="footerRyt_item">
                        <ul class="d-flex">
                            <li><Link to="./Privacy">Privacy Policy</Link></li>
                            <li><Link to="./Termconditions">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer