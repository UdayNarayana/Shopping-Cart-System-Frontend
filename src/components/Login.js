import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const loginUser = {
            username,
            password
        }

        fetch(' http://localhost:8082/user/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginUser)
        })
            .then(() => console.log("User Logged In!"))
            .catch()

        setCurrentUser(username);
        setUsername("");
        setPassword("");

        // fetch('http://localhost:8082/user/get-user-by-username'+username)
        // .then(data => data.json())
        // .then()

    }

    return (
        <React.Fragment>

            <h2 className="login-header">Login</h2>

            <section className="login-form-wrapper">
                <form className="login-form" onSubmit={e => submitHandler(e)}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Username"
                            className="login-input"
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                        />
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <button className="login-btn">Login</button>
                </form>

                <Link className="links" to='/register'>
                    <p className="new-user">new user?register</p>
                </Link>
            </section>

            <p> User : {currentUser}</p>

        </React.Fragment>
    )
}

export default Login;