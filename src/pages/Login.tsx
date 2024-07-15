import { Link } from 'react-router-dom';
import bg_coffeLogin from "../images/loginBG.jpg";
import logoCoffee from "../images/logoCoffee.png";
import coffeeShop from "../images/coffeeShop.png";
import emailIcon from "../icons/email.png";
import passwordIcon from "../icons/password.png";
import googleIcon from "../icons/google.png";
import facebookIcon from "../icons/facebook.png";
import GoogleFacebook from '../components/GoogleFacebook';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { useState } from 'react';
import { AppDispatch,  } from '../redux/store';
import { setToken, setIMG } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/thunks';

interface User {
    email: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [user, setUser] = useState<User>({ email: '', password: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        try {
            const url = 'http://localhost:8000/users/login';
            const resultAction = await dispatch(fetchData({ serviceApi: url, data: user }));
        
            if (fetchData.rejected.match(resultAction)) {
              throw new Error('Failed to login');
            }
        
            const { data } = resultAction.payload;
        
            dispatch(setToken(data[0].token));
            dispatch(setIMG(resultAction.payload.image));
            navigate("/home");
          } catch (error) {
            console.error(error);
          }

    };


    return (
        <div className="container-fluid">
            <div className="flex flex-col md:flex-row w-full">
                <div className="item itemImg object-cover basis-1/4 hidden md:block" style={{ flex: 1 }}>
                    <img className='h-screen object-cover' src={bg_coffeLogin} alt="Logo Coffee" />
                </div>
                <div className="item itemForm flex flex-col basis-3/4 gap-4 items-center justify-center p-4">
                    <section className="Regisform flex flex-col gap-4 py-8 w-3/4">
                        <section className="logoJudul flex-logo flex flex-row gap-2">
                            <img className="itemLogo h-8" src={logoCoffee} alt="logoCoffee" />
                            <img className="itemTulisanCoffee h-8" src={coffeeShop} alt="Coffee Shop" />
                        </section>
                        <header className="flex flex-col gap-4">
                            <p className="text-amber-700 text-3xl">Login</p>
                            <h3 className="text-amber-700">Fill out the form correctly</h3>
                        </header>
                        <form onSubmit={handleSubmit} className="flex-form flex flex-col gap-4">
                            <Input
                                img={{ src: emailIcon, alt: 'Email Icon' }}
                                input={{ type: 'text', name: 'email', placeholder: 'Enter your email', value: user.email, onChange: handleChange }}
                                label="Email"
                            />
                            <Input
                                img={{ src: passwordIcon, alt: 'Password Icon' }}
                                input={{ type: 'password', name: 'password', placeholder: 'Enter your password', value: user.password, onChange: handleChange }}
                                label="Password"
                            />
                            <button className="item font-semibold border-2 bg-oren w-2/4 rounded-lg p-4 text-lg self-center" type="submit" disabled={!user.email || !user.password}>Login</button>
                        </form>
                        <section className="login-container flex flex-col gap-2 md:gap-4 w-full items-center justify-center">
                            <div className="haveAccount flex flex-row gap-2">
                                <p>Don't have an account?</p> <Link className="text-oren" to="/register">Register</Link>
                            </div>
                            <div className="separator flex flex-row">
                                <hr className="line border-2" />
                                <span className="or-text">or</span>
                                <hr className="line" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <GoogleFacebook
                                    img={{
                                        src: googleIcon,
                                        alt: 'Google Icon'
                                    }}
                                    text="Google"
                                    link="#"
                                />
                                <GoogleFacebook
                                    img={{
                                        src: facebookIcon,
                                        alt: 'Facebook Icon'
                                    }}
                                    text="Facebook"
                                    link="#"
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
