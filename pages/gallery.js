import Image from 'next/image'
import styles from '@/styles/gallery.module.css'
import { FaHome } from "react-icons/fa";

const Gallery = () => {
    return (
        <>
            <div className={styles.gallerybanner}>
                <div className={styles.galcaption}>
                    <h1>Our Apartments<FaHome /></h1>
                    <h3>Take A Sneak Peek Into Luxury and Elegance!</h3>
                </div>
            </div>
            <div className={styles.gallerygrid}>
                <div className={styles.gridg4}>
                    <h2>G4 Apartment</h2>
                    <div><Image src="/gallery/g4/G4 Ground Floor Living Room (3).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Ground Floor Living Room & Dining Area (2).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Dining Area and Ground Floor Living Room (2).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Dining Area (1).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Kitchen (1).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Kitchen (2).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Kitchen (3).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 First Floor Living Room (1).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 First Floor Living Room (2).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Master Bedroom (2).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Master Bedroom (4).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Master Bedroom (5).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Master Bedroom (7).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Master Bedroom Dressing Room (2).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 First Floor Bedroom (4).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Second Floor Bedroom (2).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Second Floor Bedroom (6).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Master Bedroom Toilet.jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Second Floor Bedroom Toilet (2).jpg" width={500} height={600} priority quality={100} /></div>
                    <div><Image src="/gallery/g4/G4 Second Floor Bedroom Toilet (3).jpg" width={750} height={500} priority quality={100} /></div>
                </div>

                <div className={styles.gridg5}>
                    <h2>G5 Apartment</h2>
                    <div><Image src="/gallery/g5/G5 Ground Floor Living Room (3).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Ground Floor Living Room (4).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Ground Floor Living Room (6).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Dining Area (1).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Dining Area & Ground Floor Living Room.jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Kitchen (1).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Kitchen (2).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 First Floor Living Room (1).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 First Floor Living Room (4).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 First Floor Bedroom (1).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 First Floor Bedroom (5).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Second Floor Bedroom (3).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Second Floor Bedroom (4).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Second Floor Bedroom (14).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Second Floor Bedroom (15).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Second Floor Bedroom Dressing Room.jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Second Floor Bedroom (17).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Second Floor Bedroom Toilet (2).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 Second Floor Bedroom (1).jpg" width={750} height={500} priority quality={100} /></div>
                    <div><Image src="/gallery/g5/G5 First Floor Bedroom Toilet.jpg" width={500} height={600} priority quality={100} /></div>
                </div>
            </div>
            <div className={styles.gazebogrid}>
                <h2>Gazebo</h2>
                <div><Image src="/gallery/gazebo/gazebo (1).jpg" width={750} height={500} priority quality={100} /></div>
                <div><Image src="/gallery/gazebo/gazebo (2).jpg" width={750} height={500} priority quality={100} /></div>
                <div><Image src="/gallery/gazebo/gazebo (3).jpg" width={750} height={500} priority quality={100} /></div>
                <div><Image src="/gallery/gazebo/gazebo (4).jpg" width={750} height={500} priority quality={100} /></div>
                <div><Image src="/gallery/gazebo/gazebo (5).jpg" width={750} height={500} priority quality={100} /></div>
                <div><Image src="/gallery/gazebo/gazebo (6).jpg" width={750} height={500} priority quality={100} /></div>
            </div>
            <div className={styles.galgradient}>
                <br />
                <br />
                <br />
                <br />
            </div>
        </>
    );
}

export default Gallery;