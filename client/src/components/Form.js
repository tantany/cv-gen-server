import React, {useState} from 'react';

function Form() {
    const [inputText, setInputText] = useState("");
    const [output, setOutput] = useState("");

    const URL = 'http://localhost:4000/api/input/'
    
    const getData = async (text) => {
        fetch(`${URL}${text}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const data = await getData(inputText);
        setOutput(data);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="label">
                Pick a past job and enter your experience here:
                <textarea className="input" id="text" name="text" cols="100" rows="20" 
                    onChange={(evt) => setInputText(evt.target.value)} >
                </textarea>
            </label>
            <input className="button" type="submit" value="Submit" />
        </form>
    )
}

export default Form;