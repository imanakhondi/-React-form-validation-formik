const SignUpForm = () => {
    return ( 
        <div className="u-section">
        <div className="u-container-layout">
        <form>
            <div className="formControl">
                <label>name</label>
                <input type="text" />
            </div>
            <div className="formControl">
                <label>email</label>
                <input type="text" />
            </div>
            <div className="formControl">
                <label>password</label>
                <input type="text" />
            </div>
            <button type="submit">add</button>
        </form>
        </div>
        </div>
     );
}
 
export default SignUpForm;