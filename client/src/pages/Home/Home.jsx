import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Cities from "../../components/Cities/Cities";
import "./Home.scss"; 
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="home-container">
                <Cities />
                <h1 className="home-title">Browse by property type</h1>
                <PropertyList />
                <h1 className="home-title">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </>
    )
}

export default Home