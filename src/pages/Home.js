import '../styles/pages-css/home.css';
import MainSlideShow from '../components/MainSlideShow';
import MainContent from '../components/MainContent';
import TourPlan from '../components/tour/TourPlan';
import HomeContact from '../components/contactus/HomeContact';
import Footer from '../components/footer/Footer';



function Home() {
    return (
        <div>
            <MainSlideShow/>
            <MainContent/>
            <TourPlan/>
            <HomeContact/>
            <Footer/>
        </div>
    );
}

export default Home;
