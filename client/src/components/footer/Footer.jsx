import { Facebook, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"

const Footer = () => {
    return (
        <div className="bg-[#F8F9FA] mt-5">
            <div className="w-11/12 mx-auto py-5 flex flex-col md:grid md:grid-cols-12 gap-5">
                <div className="col-span-5">
                    <Image src="/logo.webp" alt="logo" width={180} height={180} />
                    <p>TutorSheba.com is a platform where parents, students and tutors can easily connect with each other. We provide qualified Home/Online tutors to help your child with studies and helping them perform better in exams. We are a group of 2,50,000+ Tutors and 30,000+ satisfied parents/students in Dhaka, Chattagram, Rajshahi, Sylhet, Khulna, Barishal, Rangpur, Mymensingh cities for different academic and professional subjects.</p>
                    <div className="flex items-center gap-3">
                        <i><Facebook /></i>
                        <i><Linkedin /></i>
                        <i><Youtube /></i>
                    </div>
                </div>
                <div className="col-span-3 flex justify-between">
                    <div className="">
                        <h3 className="font-bold">Resources</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Product</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="font-bold">More</h3>
                        <ul>
                            <li>Privacy</li>
                            <li>Help</li>
                            <li>Terms</li>
                            <li>FAQ</li>
                            <li>Play Now</li>
                            <Image src="/bkash.svg" alt="google-play" width={180} height={180} />
                        </ul>
                    </div>
                </div>
                <div className="col-span-4 place-content-end content-end flex flex-col items-end text-end">
                    <h3 className="font-bold">Download Our Mobile App</h3>
                    <Image src="/tsqrcode.webp" alt="google-play" width={180} height={180} />
                    <p>Our Android App is available right now. <br /> Scan the QR Code or Click the Button to Download</p>
                    <Image src="/playStore.svg" alt="google-play" width={180} height={180} />
                </div>
                <hr className="max-w-full" />
                <div className="col-span-12 text-center">
                    <p>© 2021 TutorSheba.com. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer