import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FaMapMarkerAlt, FaWineGlassAlt } from "react-icons/fa";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <main>

        <div className={styles.banner}>
          <div className={styles.caption}>
            <h1>Enjoy Luxury Living<FaWineGlassAlt /></h1>
            <h3>Live the Grand Life at Grandview Shortlets</h3>
            <Link href="https://goo.gl/maps/hfpMWW4m5RBfvqqN6" target='_blank' className={styles.link}><h5><FaMapMarkerAlt /> Abuja, Nigeria</h5></Link>
          </div>
        </div>
        <div className={styles.twocolgrid}>
          <div className={styles.gridtext}><h1>Step into Luxury today...</h1><p>From the moment you step inside, you&apos;ll be mesmerized by the elegant decor.</p> </div>
          <div className="gridimg"><Image src="/gridimg11.jpg" width={750} height={500} priority quality={100} /></div>

          <div className="gridimg"><Image src="/gridimg55.jpg" width={750} height={500} priority quality={100} /></div>
          <div className={styles.gridtext}><h1>...Relax in comfort and style.</h1><p>Our perfect blend of comfort and sophistication would make sure your nights with us would be ones you&apos;d never forget.</p></div>

          <div className={styles.gridtext}><h1>Indulge in the finest facilities and services...</h1>
            <p>Immerse yourself in elegance and tranquillity.</p></div>
          <div className="gridimg"><Image src="/gridimg22.jpg" width={750} height={500} priority quality={100} /></div>

          <div className="gridimg"><Image src="/gridimg33.jpg" width={750} height={500} priority quality={100} /></div>
          <div className={styles.gridtext}><h1>...Discover a world of opulence at Grandview Apartments.</h1><p>Indulge in our premium amenities and personalized services</p></div>

          <div className={styles.gridtext}><h1>We got the Power&#33; We got the Connection&#33;</h1> <p>24/7 Power Supply&#59;&#40;Generator&#41; &#38; &#40;Inverter&#41;, and Premuim Internet Connection</p></div>
          <div className="gridimg"><Image src="/gridimg48.jpg" width={750} height={500} priority quality={100} /></div>

          <div className="gridimg"><Image src="/gridimg66.jpg" width={750} height={500} priority quality={100} /></div>
          <div className={styles.gridtext}><h1>Escape to Grandview Apartments, where dreams meet reality&#33;</h1><p>Our exquisite bedrooms offer a truly enchanting escape into the realm of luxury and comfort.</p></div>

          <div className={styles.gridtext}><h1>Unwind and embrace the serenity of your stay.</h1> <p>Bask in the tranquility and enjoy moments of relaxation outside.</p></div>
          <div className="gridimg"><Image src="/gridimg77.jpg" width={750} height={500} priority quality={100} /></div>
        </div>
        <div className={styles.gradient}>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className={styles.propertylist}>
          <h2>Property Listing</h2>
          <h3> Property Type&#58; 4-Bedroom Duplex Apartment</h3>
          <h3>Avialable Units&#58; Two</h3>
          <h3>...Featuring...</h3>
          <p>24/7 Power Supply</p>
          <p>Reliable Internet Connection</p>
          <p>CCTV &#38; Security Guards</p>
          <p>Two Living Rooms per Unit</p>
          <p>Dining Area</p>
          <p>Outdoor Seating Area</p>
          <p>Fully Air-Conditioned</p>
          <p>Houskeeper</p>
        </div>
      </main>
    </>
  )
}
