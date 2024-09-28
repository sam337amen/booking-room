import React from 'react';
import './RoomCSS/about.css';

const About = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">About Paradise Hotels</h1>
            <p className="lead text-center">
                Welcome to Paradise Hotels, where comfort meets luxury.
            </p>
            
            <h2>Our Mission</h2>
            <p>
                At Paradise Hotels, our mission is to provide an unforgettable experience for our guests. We strive to create a home away from home, offering unparalleled service and exceptional amenities.
            </p>

            <h2>Our Values</h2>
            <ul>
                <li>Customer Satisfaction: Our guests are our top priority, and we aim to exceed their expectations.</li>
                <li>Quality Service: We believe in delivering high-quality service to ensure a memorable stay.</li>
                <li>Sustainability: We are committed to environmentally friendly practices to preserve our beautiful planet.</li>
                <li>Community Engagement: We actively participate in community development and support local initiatives.</li>
            </ul>

            <h2>Features</h2>
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="Luxurious Rooms" />
                        <div className="card-body">
                            <h5 className="card-title">Luxurious Rooms</h5>
                            <p className="card-text">Experience comfort and elegance in our well-appointed rooms.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/2922312/pexels-photo-2922312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="Exquisite Dining" />
                        <div className="card-body">
                            <h5 className="card-title">Exquisite Dining</h5>
                            <p className="card-text">Savor gourmet meals prepared by our renowned chefs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200" className="card-img-top" alt="Relaxing Spa" />
                        <div className="card-body">
                            <h5 className="card-title">Relaxing Spa</h5>
                            <p className="card-text">Indulge in rejuvenating treatments at our full-service spa.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Join Us</h2>
            <p>
                Come experience the beauty and tranquility of Paradise Hotels. We look forward to welcoming you!
            </p>
        </div>
    );
};

export default About;