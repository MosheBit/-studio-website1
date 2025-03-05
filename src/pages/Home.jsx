import About from './About'; // אם תרצה להציג את האודות כאן
import './Home.css';
import PanesContainer from '../Components/PanesContainer';
import IconBox from '../Components/IconBox';
import Schedule from '../Components/Schedule';
import StudioPrice from '../Components/StudioPrice'
import Allgallery from '../Components/Allgallery';
const Home = () => {
    return (
        <div className="home-container">
            <div className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src="CCC.mp4" type="video/mp4" />
                    הדפדפן שלך אינו תומך בווידאו
                </video>
                <div className="video-overlay">
                    <h1>
                        ברוכים הבאים <br />
                        לסטודיו נוות ישראל
                    </h1>
                </div>
            </div>

            <div className="studio-info">
                <h2 className="studio-title">גלו את הקסם של הסטודיו שלנו</h2>
                <p className="studio-description">
                    היכנסו לעולם של יצירתיות והשראה! הסטודיו שלנו מציע ציוד מתקדם, 
                    חללים נוחים לשיתופי פעולה, ואווירה שמעוררת חדשנות. בין אם הגעתם 
                    כדי ליצור, ללמוד או להתחבר, תמצאו אצלנו את כל מה שאתם צריכים 
                    כדי להפוך את החזון שלכם למציאות.
                </p>
            </div>


            PanesContainer
            <PanesContainer />
            PanesContainer
            {/* <button className="btn">Learn More</button> */}

            IconBox
            <IconBox />
            IconBox

            About
            <About />
            About

            Schedule
            <Schedule />
            Schedule

            StudioPrice
            <StudioPrice />
            StudioPrice

            קביעת תור
            Making an appointment
            קביעת תור
            
            
            <Allgallery />
            Allgallery

        </div>
    );
};

export default Home;
