import Header from "../Shared/Header/Header";
import LeftSightNav from "../Shared/LeftSightNav/LeftSightNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSightNav from "../Shared/RightSightNav/RightSightNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10">

            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <h2 className="text-2xl font-poppins">Home page</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="border">
                    <LeftSightNav></LeftSightNav>
                </div>
                <div className="col-span-2 border">
                    <h2 className="text-3xl">News Coming Soon</h2>
                </div>
                <div className="border">
                    <RightSightNav></RightSightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;