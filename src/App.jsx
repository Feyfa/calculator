import { useEffect, useState } from "react"
import CalculatorContainer from "./components/CalculatorContainer"
import Input from "./components/Input"
import Button from "./components/Button"
import Heading from "./components/Heading";

function App() {

    const [inputMath, setInputMath] = useState("");
    const [resultMath, setResultMath] = useState("");

    useEffect(() => {
        if(inputMath !== '') {
            try {
                let inputMathFilter = inputMath.replace(/×/g, '*');
                inputMathFilter = inputMathFilter.replace(/÷/g, '/');

                setResultMath(eval(inputMathFilter).toString());
            } catch (error) {
                setResultMath('');
            } 
        } else {
            setResultMath("");
        }
    }, [inputMath]);

    function handleOnButtonCLick(classButton, value) {
        switch(classButton) {
            case 'delete' :
                if(inputMath.length > 0) {
                    setInputMath(i => 
                        i.substring(0, i.length - 1)  
                    );
                }
                break;
            case 'ac' :
                if(inputMath.length > 0) {
                    setInputMath("");
                    setResultMath("");
                }
                break;
            case 'sama-dengan' :
                if(inputMath !== '') {
                    if(Number(resultMath) || resultMath === '0') {
                        setInputMath(resultMath);
                    }
                    else {
                        setResultMath('Kesalahan Sintaks')
                    }
                }
                break;
            default :
                setInputMath(i => 
                    i + value
                );
        }
    }

    return (
        <>
            <Heading />
            <CalculatorContainer>
                <Input value={inputMath} result={resultMath} />
                <Button onButtonClick={handleOnButtonCLick} />
            </CalculatorContainer>
        </>
    )
}

export default App
