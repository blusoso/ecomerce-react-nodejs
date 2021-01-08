import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { UserContext } from "@/store/userContext";
import { useRouter } from "next/router";

const SignIn = ({ redirectLocation }) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [userInfo, setUserInfo] = useContext(UserContext);

    const redirect = redirectLocation ? redirectLocation.split("=")[1] : "/";

    const router = useRouter();

    const onSubmit = async (user) => {
        await axios
            .post("/api/users/signin", user)
            .then((res) => {
                setErrorMessage(null);
                setUserInfo(res.data);
                localStorage.setItem("userInfo", JSON.stringify(res.data));
                router.push("/");
            })
            .catch((err) => {
                setErrorMessage("Email or password is incorrect. Please try again.");
            });
    };

    return (
        <React.Fragment>
            <div className="sign-in-wrapper">
                <div className="signin-grid">
                    <div className="m-auto">
                        <h1>Sign In to Recharge Direct</h1>
                        <p className="my-5">
                            If you don't have an account
                            <br />
                            You can{" "}
                            <Link href="/signup">
                                <a className="blue-link">Sign up here!</a>
                            </Link>
                        </p>
                    </div>
                    <div className="signin-form-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control-secondary"
                                    ref={register({ required: true })}
                                    placeholder="Enter email"
                                />
                                {errors.email && <span>Email is required</span>}
                            </div>

                            <div className="form-group">
                                <input
                                    type={`${showPassword ? "text" : "password"}`}
                                    name="password"
                                    className="form-control-secondary"
                                    ref={register({ required: true })}
                                    placeholder="Password"
                                />
                                <i
                                    className={`far fa-eye${showPassword ? "" : "-slash"}`}
                                    onClick={() => setShowPassword(!showPassword)}
                                ></i>
                                {errors.password && <span>Password is required</span>}
                            </div>

                            <div className="text-right">
                                <Link href="/">
                                    <a className="sub-text">Recover password</a>
                                </Link>
                            </div>

                            <button className="btn btn-secondary w-100 mt-3">Sign in</button>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}

                            <hr className="mt-5 mb-3 " />
                            <div className="position-relative">
                                <p className="sign-in-social-text">or continue with</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .signin-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    user-select: none;
                }

                .signin-form-wrapper {
                    margin: 5rem;
                }

                .form-group {
                    position: relative;
                }

                i {
                    color: var(--color-midgray);
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding: 1rem;
                    cursor: pointer;
                    z-index: 2;
                }

                .sign-in-social-text {
                    color: var(--color-midgray);
                    font-size: 14px;
                    position: absolute;
                    top: -28px;
                    right: 5.6rem;
                    background-color: #fff;
                    padding: 0 0.3rem;
                }

                .error-message {
                    color: var(--color-red);
                    text-align: center;
                    font-size: 0.8rem;
                    margin: 0.6rem 0;
                }
            `}</style>
        </React.Fragment>
    );
};

export default SignIn;
