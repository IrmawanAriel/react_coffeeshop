import React from 'react';
import { Link } from 'react-router-dom';
import bg_coffeLogin from "../images/loginBG.jpg"
import logoCoffee from "../images/logoCoffee.png";
import coffeeShop from "../images/coffeeShop.png";
import emailIcon from "../icons/email.png";
import passwordIcon from "../icons/password.png";
import googleIcon from "../icons/google.png";
import facebookIcon from "../icons/facebook.png";


import Input from '../components/Input';
import GoogleFacebook from '../components/GoogleFacebook';

const Login = () => {
    return (
        <div className="container-fluid">
            <div className="flex flex-col md:flex-row w-full">
                <div className="item itemImg object-cover basis-2/4 hidden md:block" style={{ flex: 1 }}>
                    <img src={bg_coffeLogin} alt="Logo Coffee" />
                </div>
                <div className="item itemForm flex flex-col basis-2/4 gap-4 items-center justify-center p-4">
                    <section className="Regisform flex flex-col gap-4 py-8">
                        <section className="logoJudul flex-logo flex flex-row gap-2">
                            <img className="itemLogo h-8" src={logoCoffee} alt="logoCoffee" />
                            <img className="itemTulisanCoffee h-8" src={coffeeShop} alt="Coffee Shop" />
                        </section>
                        <header className="flex flex-col gap-4">
                            <p className="bg-amber-700 text-3xl">Login</p>
                            <h3 style={{ fontFamily: 'Plus Jakarta Sans', color: 'rgba(142, 100, 71, 1)' }}>Fill out the form correctly</h3>
                        </header>
                        <form className="flex-form flex flex-col gap-4">
                                <Input
                                    img={{ src: emailIcon, alt: 'image gagal' }}
                                    input={{ type: 'text', name: 'email', placeholder: 'Enter your email' }}
                                    label="Email"
                                />
                                <Input
                                    img={{ src: passwordIcon, alt: 'image gagal' }}
                                    input={{ type: 'password', name: 'password', placeholder: 'Enter your password' }}
                                    label="password"
                                />
                            <button className="item font-semibold border-2 bg-oren w-full rounded rounded-lg" type="submit">Login</button>
                        </form>
                        <section className="login-container flex flex-col gap-2 md:gap-4 w-full items-center justify-center">
                            <div className="haveAccount flex flex-row gap-2">
                                <p>Doesn't have an account?</p> <Link className="text-oren" to="/register">Register</Link>
                            </div>
                            <div className="separator flex flex-row">
                                <hr className="line border-2 bor" />
                                <span className="or-text">or</span>
                                <hr className="line" />
                            </div>
                            <div className=" flex flex-col md:flex-row gap-4">
                                <GoogleFacebook 
                                    img={{
                                        src: googleIcon,
                                        atl: 'image google'
                                    }} 
                                    text={'Google'} 
                                    link={'#'}                                    
                                />
                                <GoogleFacebook 
                                    img={{
                                        src: facebookIcon,
                                        atl: 'image facebook'
                                    }} 
                                    text={'Facebook'} 
                                    link={'#'}                                    
                                />
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Login;