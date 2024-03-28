import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
    return (
        <div className="">
             <Banner></Banner>
             <CategoryList></CategoryList>
             <FeaturedJob></FeaturedJob>
            <h2 className="text-7xl mb-14 mt-6 font-serif text-orange-400">This is Home</h2>
        </div>
    );
};

export default Home;