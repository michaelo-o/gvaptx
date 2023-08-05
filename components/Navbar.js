import styles from './Components.module.css'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

    const [togglemenu, settogglemenu] = useState(false)

    const menu = () => {
        settogglemenu(!togglemenu)
    }


    return (
        <>
            <Head>
                <title>Grandview Apartments</title>
                <meta name="description" content="Grandview Apartments" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/gv favicon.ico" />
            </Head>
            <nav className={styles.navbar}>
                <Image src="/GV_Logo_-_Smaller-No-bg.png" width={200} height={75} alt='site logo' />

                <div className={styles.rightnav}>
                    <Link href="/" className={styles.navlink}><h3>Home</h3></Link>
                    <Link href="/" className={styles.navlink}><h3>Gallery</h3></Link>
                    <Link href="/" className={styles.navlink}><h3>Booking &#38; Enquiries</h3></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;