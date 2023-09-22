import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/booking.module.css'
import { FaMapMarkerAlt, FaMapMarkedAlt, FaPhoneAlt, FaPhone, FaHome, FaInstagram, FaWhatsapp } from "react-icons/fa";


const BookingAndEnquiries = () => {
    return (
        <>
            <div className={styles.bookbanner}>
                <div className={styles.bookcaption}>
                    <h2>Reach Out and Discover a Seamless Stay.</h2><h2>Contact Us for Bookings Today!</h2>
                    <Link href="https://goo.gl/maps/hfpMWW4m5RBfvqqN6" target='_blank' className={styles.link}><h5><FaMapMarkerAlt /> Guzape, Abuja, Nigeria.</h5></Link>
                </div>
            </div>
            <div className={styles.bookingcontent}>
                <h1>Get in Touch: Your Gateway to Unforgettable <span className="und">Luxury</span>.</h1>
                <div className={styles.contactgrid}>
                    <div className={styles.location}>
                        <h2>Our Location</h2>
                        <p>574 Babagana Kingibe Street, Guzape 900110, Abuja, Federal Capital Territory, Nigeria</p>
                        <Link href="https://goo.gl/maps/hfpMWW4m5RBfvqqN6" target='_blank' className={styles.link}><span className={styles.icon}><FaMapMarkedAlt /></span></Link>
                        <p>&#40;Click the Map icon to open in Google Maps&#41;</p>
                    </div>
                    <div className={styles.phone}>
                        <h2><FaPhoneAlt />Our Phonelines<FaPhone /> </h2>
                        <p>07036664408 <br />
                            07068173217</p>
                    </div>
                    <div className={styles.socials}>
                        <h2>Our Socials</h2>
                        <h3>Instagram <FaInstagram />&#160; <Link href="https://www.instagram.com/grandviewaptx" target='_blank' className={styles.link}> &#64;grandviewaptx </Link></h3>
                        <h3>Whatsapp <FaWhatsapp />&#160; <Link href="https://wa.me/message/56JK3H5TTG6BO1" target='_blank' className={styles.link}> +234 916 096 2182 </Link></h3>
                        <p>&#40;Click to open in Socials&#41;</p>
                    </div>
                </div>
                <h1>We&apos;re looking forward to Having you over at our Apartments. <FaHome /></h1>
            </div>
        </>
    );
}

export default BookingAndEnquiries;