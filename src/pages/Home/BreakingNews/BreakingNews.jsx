import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex space-x-2">
            <button className="btn btn-secondary">Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to="/" className="mr-10">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link>
                <Link to="/" className="mr-10">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;