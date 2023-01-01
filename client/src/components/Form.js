function Form() {
    return (
        <form className="form">
            <label className="label">
                Pick a past job and enter your experience here:
                <textarea className="input" id="text" name="text" cols="100" rows="20" ></textarea>
            </label>
            <input className="button" type="submit" value="Submit" />
        </form>
    )
}

export default Form;