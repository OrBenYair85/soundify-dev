

export function Login(){
    return (
        <>
        <section className="login-container">
            <section className="up-part-login">
                <img src="src/assets/Soundify-files/logo.jpeg" />
                <h1>Log in to Soundify</h1>
            </section>

            <section className="bottom-part-login">
                <form>
                    <label for="email-field">Email or username</label>
                    <input 
                        type="email"
                        className="email-field"
                        id="email-field"
                        placeholder="Email or username"
                    />

                <label for="password-field">Password</label>
                    <input 
                        type="password"
                        className="password-field"
                        id="password-field"
                        placeholder="Password"
                    />

                <button className="login-btn">Log In</button>
                <button>Forgot Your Password?</button>
                <h2>
                    <span>Don't have an account? </span>
                    <a className="sign-up-btn">Sign up for Soundify</a>
                </h2>

                
                </form>
            </section>

        </section>


    </> 
    )
}