import PropTypes from 'prop-types'
import { FaArrowRightLong } from 'react-icons/fa6'

const Iphone = ({ title, description, image }) => {
    return (
        <div className="contain-phone">
            <div className="phonebody-external phonebody-external-item">
                <div className="phonebody-internal">
                    <img className="screen-image" src={image} alt={title} />
                    <div className="intro-text">
                        <h1>
                            <a href="#" className="font-lexend">
                                {title}
                            </a>
                        </h1>
                        <p className="font-lexend">{description}</p>
                        <button className="btn">
                            Xem chi tiết
                            <FaArrowRightLong />
                        </button>
                    </div>
                    <div className="top-phone"></div>
                </div>
                <div className="bottom-phone"></div>
            </div>
        </div>
    )
}

Iphone.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Iphone
