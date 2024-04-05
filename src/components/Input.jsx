import PropTypes from "prop-types"

function Input({ value, result }) {
    return (
        <div className="input-container h-[130px] flex flex-col">
            <input readOnly type="text" className="satu" value={value} />
            <input readOnly type="text" className="dua" value={result} />
        </div>
    )
}

Input.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    result: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

export default Input;