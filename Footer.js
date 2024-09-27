import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Paradise Hotel</h5>
                        <p>Your comfort is our priority. Enjoy a relaxing stay at Paradise Hotel, where luxury meets tranquility.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><strong>Email:</strong> info@paradisehotel.com</li>
                            <li><strong>Phone:</strong> +251 0000111122</li>
                            <li><strong>Address:</strong> Bole, Addis Ababa City, Ethiopia</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">Facebook</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} Paradise Hotel. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;