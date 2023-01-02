import React, { useState } from 'react';

function Form() {
    const [inputText, setInputText] = useState("");
    const [output, setOutput] = useState("");
    const [cursor, setCursor] = useState('pointer');

    const URL = 'http://localhost:4000/api/input/'

    const getData = (text) => {
        setCursor('wait');
        fetch(`${URL}${text}`)
            .then((response) => response.json())
            .then((res) => {
                setCursor('pointer');
                setOutput(res.data);
            });
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(inputText) getData(inputText);
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label className="label">
                    Pick a past job and enter your detailed experience here:
                    <textarea className="input" id="text" name="text" cols="82" rows="4"
                        onChange={(evt) => setInputText(evt.target.value)} >
                    </textarea>
                </label>
                <input className="button" type="submit" value="Snap it!" style={{ cursor: cursor }} />
            </form>
            <p className="output">{output}</p>
        </>
    )
}

export default Form;