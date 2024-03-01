import { useState } from "react";

export const CalculatorForm = () => {
    const [formValues, setFormValues] = useState({
        firtNumber: 0,
        secondNumber: 0
    });

    const [resut, setResult] = useState(0);

    const onInputChange = ({  target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const onButtonSumClick = () => {
        const { firtNumber, secondNumber } = formValues;

        setResult(parseInt(firtNumber) + parseInt(secondNumber));
    };

    const onButtonSubstractClick = () => {
        const { firtNumber, secondNumber } = formValues;

        setResult(parseInt(firtNumber) - parseInt(secondNumber));
    };

    const onButtonMultiply = () => {
        const { firtNumber, secondNumber } = formValues;

        setResult(parseInt(firtNumber) * parseInt(secondNumber));
    };

    const onButtonSplit = () => {
        const { firtNumber, secondNumber } = formValues;

        setResult(parseInt(firtNumber) / parseInt(secondNumber));
    };

    return (
        <>
            <input
            type="text"
            name="firtNumber"
            id="firstNumber"
            value={formValues.firtNumber}
            onChange={onInputChange}
            />

            
<input
            type="text"
            name="secondNumber"
            id="secondNumber"
            value={formValues.secondNumber}
            onChange={onInputChange}
            />

            <button name="buttonSum" onClick={onButtonSumClick}>SUM</button>
            <button name="buttonSubstract" onClick={onButtonSubstractClick}>SUBSTRACT</button>
            <button name="buttonSubstract" onClick={onButtonMultiply}>MULTIPLY</button>
            <button name="buttonSubstract" onClick={onButtonSplit}>SPLIT</button>



            <div>
                <h3>
                    <span>Result: {resut}</span>
                </h3>
            </div>

        </>
    )
}