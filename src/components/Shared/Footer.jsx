import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 container mx-auto text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col mb-4 lg:mb-0">
                            <h3 className="text-lg font-bold mb-2">About Us</h3>
                            <p className="text-sm">We are a restaurant dedicated to providing delicious food and exceptional service.</p>
                        </div>
                        <div className="flex flex-col mb-4 lg:mb-0">
                            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                            <p className="text-sm">123 Main St<br />New York, NY 10001<br />(123) 456-7890</p>
                        </div>
                        <div className="flex flex-col mb-4 lg:mb-0">
                            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                            <div className="flex">
                                <a href="#" className="mr-4"><FaFacebook className="text-2xl" /></a>
                                <a href="#" className="mr-4"><FaTwitter className="text-2xl" /></a>
                                <a href="#" className="mr-4"><FaInstagram className="text-2xl" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-600 pt-4 text-sm flex flex-col lg:flex-row justify-between items-center">
                        <p className="mb-2 lg:mb-0">© 2023 Restaurant. All rights reserved.</p>
                        <ul className="flex text-gray-500">
                            <li className="mr-4"><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                            <li className="mr-4"><a href="#" className="hover:text-gray-300">Terms of Use</a></li>
                            <li className="mr-4"><a href="#" className="hover:text-gray-300">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;