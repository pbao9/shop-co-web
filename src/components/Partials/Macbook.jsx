import PropTypes from 'prop-types'

const Macbook = ({ data }) => {
    return (
        <div className="macbook">
            <div className="screen">
                <div
                    className="viewport"
                    style={{
                        backgroundImage: `url('${data}')`,
                    }}
                ></div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
        </div>
    )
}

Macbook.propTypes = {
    data: PropTypes.any,
}

export default Macbook
