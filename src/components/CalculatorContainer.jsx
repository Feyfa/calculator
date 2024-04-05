import PropTypes from 'prop-types'

function CalculatorContainer({ children }) {
    return (
        <div className='bg-white border border-neutral-700 rounded w-[90%] p-2 shadow-xl sm:w-[65%] md:w-[55%] lg:w-[45%] xl:w-[30%]'>
            {children}
        </div>
    )
}

CalculatorContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node
    ])
}

export default CalculatorContainer;