import React from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaGlobeAsia } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { SiYoutube } from 'react-icons/si';
import { BsLink45Deg } from 'react-icons/bs';


function Footer() {
    return (
        <footer className="bg-gray-900 text-zinc-50">
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1">
                        <div className="flex items-center justify-center mb-4">
                            <div className="relative w-20 h-20 md:w-32 md:h-32">
                                <Image src="/klogo.png" alt="Logo 1" layout="fill" objectFit="contain" />
                            </div>
                            <div className="relative w-20 h-20 md:w-32 md:h-32 ml-4">
                                <Image src="/sdg.jpg" alt="Logo 2" layout="fill" objectFit="contain" />
                            </div>
                            <div className="relative w-20 h-20 md:w-32 md:h-32 ml-4">
                                <Image src="/nssulogo.png" alt="Logo 2" layout="fill" objectFit="contain" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                        <ul className="contact-list">
                            <li className="flex items-center mb-2"><FaPhone className="mr-2" /> <span>+91 98613 66282 (Faculty Coordinator)</span></li>
                            <li className="flex items-center mb-2"><FaPhone className="mr-2" /> <span>+91 91141 30030 (Kartavya Coordinator)</span></li>
                            <li className="flex items-center mb-2"><FaPhone className="mr-2" /> <span>+91 82609 93909 (Nss Coordinator)</span></li>
                            <li className="flex items-center mb-2"><FaPhone className="mr-2" /> <span>+91 70643 56379 (Student Coordinator)</span></li>
                            <br/>
                            <li className="flex items-center mb-2"><FaEnvelope className="mr-2" /> <span>kartavya@tat.ac.in</span></li>
                            <br/>
                            <li className="flex flex-row items-center mb-2"><div><ImLocation className="mr-2" /></div> <div>Trident Academy of Technology, F2/A, Chandaka Industrial Estate, In front of Infocity,Bhubaneswar Odisha</div></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                        <ul className="social-list flex">
                            <li className="mr-4"><a href="https://www.facebook.com/profile.php?id=61551431754904&mibextid=ZbWKwL"><FiFacebook className="text-3xl text-blue-600" /></a></li>
                            <li className="mr-4"><a href="https://instagram.com/kartavya_club_trident?igshid=MmU2YjMzNjRlOQ=="><FiInstagram className="text-3xl text-fuchsia-400" /></a></li>
                            <li className="mr-4"><a href="https://youtube.com/@KartavyaClub?si=0zipnr43xqZGsbg5"><SiYoutube className="text-3xl text-red-600" /></a></li>
                            <li className="mr-4"><a href="#"><FaGlobeAsia className="text-3xl text-sky-400" /></a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-12 border-gray-600" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="col-span-1">
                        <p className="text-gray-400">&copy; 2023 Kartavya Blog. All Rights Reserved.</p>
                    </div>
                    <div className="col-span-1">
                        <ul className="footer-nav flex justify-end">
                            <li className="mr-4"><a href="/">Home</a></li>
                            <li className="mr-4"><a href="/events">Events</a></li>
                            <li className="mr-4"><a href="/about">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <hr className="my-12 border-gray-600" />
                        <p className="text-gray-400 text-center">Designed and Developed by <span className='text-[#50fe00] font-bold'>Suraj</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
