import deletePng from '../assets/delete.png';
import PropTypes from "prop-types"

function Button({ onButtonClick }) {

    function handleButtonOnClick(event) {
        const className = event.target.className.substring(4);
        const value = event.target.value;
        onButtonClick(className, value);
    }

    return (
        <div className="button-container mt-5 grid grid-cols-5 grid-rows-4 gap-2">
            <button className="box tujuh" onClick={handleButtonOnClick} value="7">7</button>
            <button className="box delapan" onClick={handleButtonOnClick} value="8">8</button>
            <button className="box sembilan" onClick={handleButtonOnClick} value="9">9</button>
            <button className="box delete" onClick={handleButtonOnClick} value="del">
                <img className='boxsdelete' src={deletePng} />  
            </button>
            <button className="box ac" onClick={handleButtonOnClick} value="AC">AC</button>
            <button className="box empat" onClick={handleButtonOnClick} value="4">4</button>
            <button className="box lima" onClick={handleButtonOnClick} value="5">5</button>
            <button className="box enam" onClick={handleButtonOnClick} value="6">6</button>
            <button className="box kali" onClick={handleButtonOnClick} value="×">×</button>
            <button className="box bagi" onClick={handleButtonOnClick} value="÷">÷</button>
            <button className="box satu" onClick={handleButtonOnClick} value="1">1</button>
            <button className="box dua" onClick={handleButtonOnClick} value="2">2</button>
            <button className="box tiga" onClick={handleButtonOnClick} value="3">3</button>
            <button className="box tambah" onClick={handleButtonOnClick} value="+">+</button>
            <button className="box kurang" onClick={handleButtonOnClick} value="-">-</button>
            <button className="box nol" onClick={handleButtonOnClick} value="0">0</button>
            <button className="box titik" onClick={handleButtonOnClick} value=".">.</button>
            <button className="box buka-kurung" onClick={handleButtonOnClick} value="(">(</button>
            <button className="box tutup-kurung" onClick={handleButtonOnClick} value=")">)</button>
            <button className="box sama-dengan" onClick={handleButtonOnClick} value="=">=</button>
        </div>
    )
}

Button.propTypes = {
    onButtonClick: PropTypes.func
}

export default Button;