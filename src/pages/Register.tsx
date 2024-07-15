import React, { useState } from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom';
import bg_coffeLogin from "../images/loginBG.jpg"
import logoCoffee from "../images/logoCoffee.png";
import coffeeShop from "../images/coffeeShop.png";
import emailIcon from "../icons/email.png";
import passwordIcon from "../icons/password.png";
import googleIcon from "../icons/google.png";
import facebookIcon from "../icons/facebook.png";
import GoogleFacebook from '../components/GoogleFacebook';
import fullname from '../icons/fullname.png';
import axios from 'axios';

function Register() {

    type TRegist = {
        fullname: string;
        email: string;
        password: string;
    };

    const [registData, setRegistData] = useState<TRegist>({
        fullname: '',
        email: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegistData((prevRegistData) => ({
            ...prevRegistData,
            [name]: value,
        }));
    };

    const formSubmit = async (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        const url = 'http://localhost:8000/users/register'
        try {
            const result = await axios.post(url, {
                fullname: registData.fullname,
                email: registData.email,
                password: registData.password,
              }, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            )
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    
    <div className="container-fluid">

        <div className="flex flex-col md:flex-row w-full h-full">
            <div className="item itemImg  basis-1/4 hidden md:block" >
                <img className='h-screen object-cover' src={bg_coffeLogin} alt=""/>
            </div>

            <div className="item itemForm flex flex-col basis-3/4 gap-4 items-center justify-center p-4">
                    <section className="Regisform flex flex-col gap-4 py-8   w-3/4">
                        <section className="logoJudul flex-logo flex flex-row gap-2">
                            <img className="itemLogo h-8" src={logoCoffee} alt="logoCoffee" />
                            <img className="itemTulisanCoffee h-8" src={coffeeShop} alt="Coffee Shop" />
                        </section>
                        <header className="flex flex-col gap-4">
                            <p className="text-amber-700 text-3xl">Register</p>
                            <h3 className=''>Fill out the form correctly</h3>
                        </header>
                        <form onSubmit={formSubmit} className="flex-form flex flex-col gap-4">
                                <Input
                                    img={{ src: fullname, alt: 'image gagal' }}
                                    input={{ type: 'text', name: 'fullname', placeholder: 'Enter your Fulname', value: registData.fullname , onChange: handleChange}}
                                    label="fullname"
                                />
                                <Input
                                    img={{ src: emailIcon, alt: 'image gagal' }}
                                    input={{ type: 'text', name: 'email', placeholder: 'Enter your email', value: registData.email , onChange: handleChange }}
                                    label="Email"
                                />
                                <Input
                                    img={{ src: passwordIcon, alt: 'image gagal' }}
                                    input={{ type: 'password', name: 'password', placeholder: 'Enter your password', value: registData.password , onChange: handleChange }}
                                    label="password"
                                />
                            <button className="item font-semibold border-2 bg-oren w-2/4 rounded-lg p-4 text-lg self-center" type="submit">Register</button>
                        </form>
                        <section className="login-container flex flex-col gap-2 md:gap-4 w-full items-center justify-center">
                            <div className="haveAccount flex flex-row gap-2">
                                <p>Already have an account?</p> <Link className="text-oren" to="/login">Login</Link>
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
                                        alt: 'image google'
                                    }} 
                                    text={'Google'} 
                                    link={'#'}                                    
                                />
                                <GoogleFacebook 
                                    img={{
                                        src: facebookIcon,
                                        alt: 'image facebook'
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
  )
}


export default Register