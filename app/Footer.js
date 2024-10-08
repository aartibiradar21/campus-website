import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="footer-content">
                    <div class="logo-section">
                        <img src="navgurukul-logo.png" alt="Navgurukul Logo" class="logo" />
                        <p>Registered as Navgurukul Foundation for Social Welfare</p>
                        <p>CIN: U85300HR2016NPL066468</p>
                        <p>Let's talk at <a href="mailto:hi@navgurukul.org" className='link'>hi@navgurukul.org</a></p>
                    </div>

                    <div class="footer-links">
                        <div class="footer-column">
                            <h4>ABOUT US</h4>
                            <ul>
                                <li><a href="#">Who We Are</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h4>SCHOOLS</h4>
                            <ul>
                                <li><a href="#">School of Programming</a></li>
                                <li><a href="#">School of Design</a></li>
                                <li><a href="#">School of Business</a></li>
                                <li><a href="#">School of Finance</a></li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h4>DIGITAL INITIATIVES</h4>
                            <ul>
                                <li><a href="#">Zuvy</a></li>
                                <li><a href="#">Meraki</a></li>
                                <li><a href="#">Code India Fellowship</a></li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h4>GET INVOLVED</h4>
                            <ul>
                                <li><a href="#">Be a Partner</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h4>CSR ENQUIRIES</h4>
                            <ul>
                                <li><a href="#">Hire from Us</a></li>
                                <li><a href="#">Donate</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p><a href="#">Legal & Privacy Policy</a></p>
                    <p>&copy; 2022 Navgurukul</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
