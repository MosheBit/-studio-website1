import { useState } from 'react';
import './footer.css';  // ייבוא עיצוב הפוטר
import ContactForm from './ContactForm'; // ייבוא קומפוננטת טופס יצירת קשר
import { FaWhatsapp, FaInstagram, FaEnvelope, FaTiktok, FaPhoneAlt , FaMapMarkerAlt} from 'react-icons/fa'; // ייבוא ספריית אייקונים;




const Footer = () => {
    
    const [reloadData, setReloadData] = useState(false);
    
    const handleNewData = () => {
        setReloadData(!reloadData); // כל פעם שתלחץ שלח, נעדכן את הנה תונים בטבלה
    }
    return (
        <footer className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 py-10 px-10 font-sans tracking-wide">
            <div className="max-w-full mx-auto text-center flex justify-between items-start">
          
          
          
            <div className="contact-form-container">
                {/* טופס יצירת קשר */}
                <div className="flex-shrink-0 w-1/2">
                    <h2 className="text-2xl text-white font-semibold">צרו קשר</h2>
                      <ContactForm onSubmit={handleNewData} key={reloadData} />
                </div>

                <div>
             

                        {/* לוגו של הסטודיו */}
                        <a href="javascript:void(0)" className="inline-block flex-shrink-0 w-1/2 text-left">
                            <img src="/logo.png" alt="Studio Logo" className="LogoLogo w-32" /> {/* הגדרת גודל ללוגו */}
                        </a>


                        {/* תפריט ניווט תחתון */}
                        {/* טקסט תיאור הסטודיו */}
                        <p className="text-sm mt-8 text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, mi eu pulvinar cursus, sem elit interdum mauris dipiscing elit. Aenean gravida, mi eu pulvinar cursus. <a href="javascript:void(0)" className="text-sm font-semibold text-blue-500">Read more...</a>
                        </p>

                        {/* אייקונים רשתות חברתיות
                        <ul className="social-icons flex items-center justify-center gap-4 mt-8">
                        <li><a href="javascript:void(0)">הוספת אייקון פייסבוק</a></li>
                        <li><a href="javascript:void(0)">הוספת אייקון לינקדאין</a></li>
                        <li><a href="javascript:void(0)">הוספת אייקון אינסטגרם</a></li>
                        <li><a href="javascript:void(0)">הוספת אייקון טוויטר</a></li>
                        </ul>
                     */}

                        {/* רשימת איקונים */}
                        {/* רשימת אייקונים */}
                        <div className="social-iconssss flex justify-center gap-6">
                            {/* אייקון טלפון */}
                            <a href="tel:+972534638675" className="social-icon text-white text-3xl hover:text-gray-300">
                                <FaPhoneAlt size={40} />
                            </a>
                            {/* אייקון וואטסאפ */}
                            <a href="https://wa.me/972534638675" target="_blank" rel="noopener noreferrer" className="social-icon text-white text-3xl hover:text-gray-300">
                                <FaWhatsapp size={40} />
                            </a>
                            {/* אייקון אינסטגרם */}
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon text-white text-3xl hover:text-gray-300">
                                <FaInstagram size={40} />
                            </a>
                            {/* אייקון מייל */}
                            <a href="mailto:d0548483562@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon text-white text-3xl hover:text-gray-300">
                                <FaEnvelope size={40} />
                            </a>
                            {/* אייקון טיקטוק */}
                            <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon text-white text-3xl hover:text-gray-300">
                                <FaTiktok size={40} />
                            </a>

                            {/* אייקון Waze */}
                        <a 
                        href="https://waze.com/ul?ll=31.789803,35.214998&navigate=yes" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon text-white text-3xl hover:text-gray-300"
                        >
                        <FaMapMarkerAlt size={40} />
                        </a>

                    </div>


                    </div>
                 </div>
            </div>
            </footer>

    );
};

export default Footer;




                            //      {/* //רשימת איקונים */}
                            //      <div className="social-iconssss">
                            //      {/* אייקון טלפון */}
                            //      <a href="tel:+972534638675" className="phone"><FaPhoneAlt size={30} /></a>
                            //      {/* אייקון וואטסאפ */}
                            //      <a href="https://wa.me/972534638675" target="_blank" rel="noopener noreferrer">
                            //      <FaWhatsapp size={30} />
                            //      </a>
                            //     <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                            //      {/* אייקון מייל */}
                            //      <a href="mailto:d0548483562@gmail.com" target="_blank" rel="noopener noreferrer">
                            //      <FaEnvelope size={30} />
                            //      </a>
                            //      <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer"><FaTiktok size={30} /></a>
                            //  </div>