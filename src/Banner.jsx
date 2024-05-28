import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
       <div>
         <div className="hero min-h-screen bg-white p-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OmKUnu2RacYQRG4Mi1iYwu0P5Y797O4UAg&s" className="min-w-[600px] min-h-[450px] rounded-lg shadow-2xl" />
    <div className='p-4'>
      <h1 className="text-5xl font-bold">keep Your data secure</h1>
      <p className="py-6">Empower healthcare innovation while safeguarding patient privacy with our cutting-edge approach: Federated Learning for Hospitals. Revolutionize machine learning models while prioritizing data security.</p>
      <Link to = "/train"><button className="btn btn-primary">Train You data Now</button> </Link> 
    </div>
  </div>
</div>


<div className="hero min-h-screen px-20">
  <div className="hero-content flex-col lg:flex-row">
    <img src="data:image/jpeg;base64,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" className="min-w-[600px] min-h-[450px] rounded-lg shadow-2xl" />
    <div className='p-4'>
      <h1 className="text-5xl font-bold">Why choose us?</h1>
      <p className="py-6">We are leading the way in Federated Learning, using advanced methods like Holomorphic Encryption and Differential Privacy. Your sensitive data stays safe and private every step of the way, giving you peace of mind and meeting all the necessary regulations. Trust us to help shape the future of healthcare responsibly, without ever sacrificing your confidentiality.</p>
      
    </div>
  </div>
</div>
       </div>



    );
};

export default Banner;