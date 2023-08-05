import styles from './Components.module.css'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkedAlt, FaInstagram, FaWhatsapp, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.location}>
                    <h2>Location</h2>
                    <Link href="https://goo.gl/maps/hfpMWW4m5RBfvqqN6" target='_blank' className={styles.footlink}><h3><FaMapMarkedAlt /> 574 Babagana Kingibe St, Guzape 900110, Abuja, Federal Capital Territory</h3></Link>
                </div>
                <div className={styles.contact}>
                    <h2>Contact Us</h2>
                    <h3>Instagram <FaInstagram />&#160; <Link href="https://www.instagram.com/grandviewaptx" target='_blank' className={styles.footlink}> &#64;grandviewaptx </Link></h3>
                    <h3>Whatsapp <FaWhatsapp />&#160; <Link href="https://wa.me/message/56JK3H5TTG6BO1" target='_blank' className={styles.footlink}> +234 916 096 2182 </Link></h3>
                    <h3>Calls <FaPhoneAlt /> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;07036664408, 07068173217</h3> <br />
                </div>
            </footer>
            <div className={styles.attribution}>
                <h4><em>Created By</em> &#160; Michael Okwuosah <Link href="https://github.com/michaelo-o" target='_blank' className={styles.attrfootlink}><FaGithub /></Link> <Link href="https://www.linkedin.com/in/michael-okwuosah/" target='_blank' className={styles.attrfootlink}><FaLinkedin /></Link></h4>
            </div>
            {/* &#58; */}
        </>
    );
}

export default Footer;