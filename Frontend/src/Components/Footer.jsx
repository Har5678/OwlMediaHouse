import React, {useState} from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import {  FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";


const Footer = () => {

    const [formData, setFormData] = useState({ name: "", email: "", phone: "", about: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        
        const response=await axios.post("http://localhost:4000"+"/api/email",{formData});
    
        if(response.data.success){
            toast.success("Details Sent Succesfully!");
            // Reset formData after successful submission
        setFormData({ name: "", email: "", phone: "", about: "" });
        }else{
            toast.error(response.data.message);
        }
          
        
      };

    return (
        <>
            {/* Main Footer */}
            <footer className="bg-black text-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">

                {/* Left Side - Heading */}
                <div className="max-w-2xl text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl sm:text-4xl font-extrabold leading-tight">
                        DON'T MONKEY AROUND
                        WITH YOUR MARKETING
                        TRUST THE EXPERTS AT &nbsp;
                        <span className="text-yellow-500">BRANDMONKEY</span>
                    </h2>
                </div>

                {/* Form Container */}
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch w-full lg:w-auto mt-10 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-4">
                    
                    {/* Input Fields */}
                   
                        <form className="flex flex-col space-y-4" action="" onSubmit={handleSubmit}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange}  placeholder="FULL NAME" className="bg-[#1a1a1a] text-white px-4 py-4 w-80 sm:w-100  font-bold outline-none border-none" required/>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}  placeholder="PHONE NO." className="bg-[#1a1a1a] text-white px-4 py-4 w-80 sm:w-100  font-bold outline-none border-none" />
                        <input type="phone" name="phone" value={formData.phone} onChange={handleChange}  placeholder="E-MAIL" className="bg-[#1a1a1a] text-white px-4 py-4 w-80 sm:w-100  font-bold outline-none border-none" />
                        <input type="text" name="about" value={formData.about} onChange={handleChange}  placeholder="SUBJECT" className="bg-[#1a1a1a] text-white px-4 py-4 w-80 sm:w-100  font-bold outline-none border-none" />
                        {/* Submit Button (Horizontally Placed in Mobile) */}
                    <button type="submit" className="bg-yellow-500 text-black font-bold px-6 py-4 lg:px-8 uppercase tracking-wide w-full lg:w-auto text-center">
                        Submit
                    </button>
                        </form>
                    
                    

                    

                </div>

            </footer>

            {/* Second Footer */}
            <footer className="bg-black text-white py-10">
                <div className="container mx-auto px-6 flex flex-wrap lg:flex-nowrap justify-between items-center text-md sm:text-sm">

                    {/* Left Side: Logo */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                        <img
                            
                            src={assets.logo3}
                            alt="Brand Monkey Logo"
                            className="h-48 md:h-52 lg:h-60 sm:h-36 -ml-5 sm:-ml-3 -mt-5"
                        />
                    </div>

                    {/* Right Side: Two Columns - Centered in Mobile */}
                    <div className="w-full lg:w-2/3 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center md:items-start mt-8 md:mt-0 text-center md:text-left">

                        {/* Column 1 */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 text-lg sm:text-xl">

                            {/* Business */}
                            <div className="leading-[1.8]">
                                <h3 className="font-bold mb-3">BUSINESS</h3>
                                <a href="mailto:info@owlmediahouse.com" className="hover:underline">info@owlmediahouse.com</a><br />
                                <a href="tel: +91 9045922719" >+91 9045922719</a>
                            </div>

                            {/* Quick Links */}
                            <div className="leading-[1.8] md:-ml-30 lg:ml-0">
                                <h3 className="font-bold mb-3">QUICK LINKS</h3>
                                <Link to="/blogs" className="hover:underline">Blogs</Link><br />
                                <Link to="/career" className="hover:underline">Career</Link><br />
                                <Link to="/services" className="hover:underline">Services</Link><br />
                                <Link to="/about" className="hover:underline">About Us</Link>
                            </div>

                            {/* Follow Us */}
                            <div className="sm:-ml-30 lg:ml-0">
                                <h3 className="font-bold mb-3">FOLLOW US</h3>
                                <div className="flex space-x-4 text-3xl ">
                                    <a href="https://www.linkedin.com/company/owlmediahouseofficial/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedin />
                                              </a>
                                              <a href="https://www.instagram.com/owlmediahouseofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                                <FaInstagram />
                                              </a>
                                              <a href="https://www.facebook.com/owlmediahouseofficial" target="_blank" rel="noopener noreferrer">
                                                <FaFacebook />
                                              </a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-9 text-lg sm:text-xl">

                            {/* Corporate Office */}
                            <div>
                                <h3 className="font-bold mb-3 mt-10 lg:mt-0">OWL MEDIA HOUSE</h3><br />
                                <h3 className="font-bold mb-3">HEAD OFFICE</h3>
                                <p>787/48, Lekhu Nagar , Tri Nagar, New Delhi- 110035
                                </p>
                            </div>

                            <div>
                            <h3 className="font-bold mb-3">BRANCH OFFICE</h3>
                                <p>1072/2, Central Market, Shastri Nagar Meerut , UP - 250004</p>
                            </div>

                            

                            {/* Career at BM */}
                            <div className="md:-ml-35 lg:ml-0">
                                <h3 className="font-bold mb-3">CAREER AT BM</h3>
                                <a href="mailto:hr@owlmediahouse.com" className="hover:underline ">hr@owlmediahouse.com</a>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Copyright & Policies */}
                <div className="container mx-auto px-6 mt-8 flex flex-col md:flex-row justify-center items-center text-gray-400 text-md text-center">
                    <p>&copy; 2022 Owl Media House. All Rights Reserved.
                        <Link to="/policy" className="hover:underline">&nbsp; Terms & Conditions</Link> 
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
