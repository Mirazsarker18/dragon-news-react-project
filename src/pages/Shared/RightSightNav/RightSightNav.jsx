import { FaFacebookF, FaGithub, FaGoogle, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSightNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full ">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full ">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            {/* Find Us On part */}
            <div className='p-4 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <a href='#' className=" flex p-4 text-sm items-center gap-2 w-full border rounded-t-lg border-gray-800">
                    <FaFacebookF></FaFacebookF>
                    Facebook
                </a>
                <a href='#' className="flex p-4 text-sm items-center gap-2 w-full border-x border-gray-800">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a href='#' className="flex p-4 text-sm items-center gap-2 w-full border rounded-b-lg border-gray-800">
                    <FaInstagramSquare></FaInstagramSquare>
                    Instagram
                </a>
            </div>
            {/* Q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSightNav;