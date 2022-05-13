import { Navbar, Header, Cities, PropertyList, FeaturedProperties, MailList, Footer } from "../../components/index"; 
import "./Home.scss"; 

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="home-container">
                <Cities />
                <h1 className="home-title">Browse by property type</h1>
                <PropertyList />
                <h1 className="home-title">Properties guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </>
    )
}

export default Home