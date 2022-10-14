import React, { useState } from 'react';
import '../styles/register.css';

const Register = () => {


    const submitHandler = (e) => {

        e.preventDefault();

        const newUser = {
            fullName,
            username,
            emailId,
            password,
            mobileNumber,
            about,
            dob,
            gender,
            role
        }

        fetch(' http://localhost:8082/user/register-user', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
            .then(() => console.log("User Registered"))
            .catch()

        setStatus("User Registered Successfully!");

        setFullName("");
        setUsername("");
        setemailId("");
        setPassword("");
        setMobileNumber("");
        setAbout("");
        setDob("");
        setGender("");
        setRole("");
    }

    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [emailId, setemailId] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [about, setAbout] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("");

    return (
        <React.Fragment>

            <h2 className="register-header">Register Here</h2>

            <section className="form-wrapper">
                <form className="register-form" onSubmit={e => submitHandler(e)}>

                    <div className="field-wrapper" id="fullname-div">
                        <input
                            type="text"
                            id="fullname"
                            className="input"
                            placeholder="Full Name"
                            onChange={e => setFullName(e.target.value)}
                            value={fullName}
                        />
                    </div>

                    <div className="field-wrapper" id="username-div">
                        <input
                            type="text"
                            id="username"
                            className="input"
                            placeholder="Username"
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                        />
                    </div>

                    <div className="field-wrapper" id="email-div">
                        <input
                            type="text"
                            id="email"
                            className="input"
                            placeholder="Email"
                            onChange={e => setemailId(e.target.value)}
                            value={emailId}
                        />
                    </div>

                    <div className="field-wrapper" id="password-div">
                        <input
                            type="password"
                            id="password"
                            className="input"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <div className="field-wrapper" id="number-div">
                        <input
                            type="text"
                            id="number"
                            className="input"
                            placeholder="Mobile Number"
                            onChange={e => setMobileNumber(e.target.value)}
                            value={mobileNumber}
                        />
                    </div>

                    <div className="field-wrapper" id="about-div">
                        <textarea
                            id="about"
                            className="about-input"
                            placeholder="About"
                            onChange={e => setAbout(e.target.value)}
                            value={about}
                        />
                    </div>

                    <div className="field-wrapper" id="dob-div">
                        <input
                            type="text"
                            id="dob"
                            className="input"
                            placeholder="Date of Birth"
                            onChange={e => setDob(e.target.value)}
                            value={dob}
                        />
                    </div>

                    <div className="field-wrapper" id="gender-div">
                        <select
                            id="gender"
                            className="gender-input"
                            placeholder="Gender"
                            onChange={e => setGender(e.target.value)}
                            value={gender}
                        >
                            <option value="select">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="field-wrapper" id="role-div">
                        <select
                            id="role"
                            className="role-input"
                            placeholder="Role"
                            onChange={e => setRole(e.target.value)}
                            value={role}
                        >
                            <option value="select">Select Role</option>
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button className="submit-btn">Register</button>

                </form>
            </section>

            <p className="registration-confirmation">{status}</p>
        </React.Fragment>
    )
}

export default Register;