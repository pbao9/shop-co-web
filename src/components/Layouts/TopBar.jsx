import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Marquee from 'react-fast-marquee'

const TopBar = ({ onClose }) => {
    const adsContent = [
        'Sign up and get 20% off on your first order!',
        'Free shipping for orders over $50!',
        'New arrivals are here! Check them out now!',
        'Limited-time sale: Up to 50% off on selected items!',
    ]
    return (
        <div className="bg-black w-full fixed z-[9999] top-0">
            <div className="flex flex-row justify-between items-center h-10">
                <div className="w-10"></div>
                <div className="flex-grow">
                    <Marquee
                        gradient={false}
                        speed={50}
                        className="text-white font-lexend text-[.6rem] xl:text-[1rem] md:text-[.8rem]"
                    >
                        {adsContent.map((ad, index) => (
                            <span key={index} className="mx-5">
                                {ad}
                            </span>
                        ))}
                    </Marquee>
                </div>
                <button className="text-white mx-3" onClick={onClose}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

TopBar.propTypes = {
    onClose: PropTypes.any,
}

export default TopBar
