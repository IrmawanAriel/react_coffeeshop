import forgotBG from "../images/forgotPasBG.png"
import emailIcon from "../icons/email.png";
import googleIcon from "../icons/google.png";
import facebookIcon from "../icons/facebook.png";
import logoCoffee from "../images/logoCoffee.png";
import coffeeShop from "../images/coffeeShop.png";

export default function ForgotPass() {
  return (
    <div className="container-fluid">

        <div className="flex flex-col md:flex-row">
            <div className="item itemImg object-cover basis-2/4 hidden md:block" >
                <img src={forgotBG} alt=""/>
            </div>

            <div className="item itemForm flex flex-col basis-2/4 gap-4 items-center justify-center p-4   ">

                <section className="Regisform flex flex-col gap-4 py-8">

                    <section className="logoJudul flex-logo flex flex-row gap-2">
                        <img className="itemLogo h-8" src={logoCoffee} alt="logoCoffee"/>
                        <img className="itemTulisanCoffee h-8" src={coffeeShop} alt=""/>
                    </section>

                    <header>
                        <h3 > Fill out
                            the form correctly</h3>
                    </header>

                    <p>We will send new password to your email</p>

                    <form className="flex-form flex flex-col gap-4">

                        <div className="item-form flex flex-col gap-4 font-semibold">
                            <label htmlFor="email">Email</label>
                            <div className="flex flex-row gap-2 border-2 rounded rounded-lg items-center p-2">
                                <img className="h-4" src={emailIcon} alt=""/>
                                <input className="email" type="email" id="email" placeholder="Enter Your Email"/>

                            </div>
                        </div>

                        <button className="item font-semibold border-2 bg-oren w-full rounded rounded-lg"
                            type="submit">submit</button>

                    </form>

                    <section className="login-container flex flex-col gap-2 md:gap-4 w-full items-center justify-center">
                        <div className="haveAccount flex flex-row gap-2">
                            <p>Doesn't have an account?</p> <a className=" text-oren" href="../register.html">Register</a>
                        </div>
                        <div className="separator flex flex-row">
                            <hr className="line" />
                            <span className="or-text">or</span>
                            <hr className="line" />
                        </div>
                        <div className="connectAccount flex flex-col md:flex-row gap-4">
                            <button
                                className="social-button google flex flex-row gap-2 items-center border-2 rounded-lg py-4 px-8">
                                <img className="h-4" src={googleIcon} alt="Facebook logo"/>
                                <p>Google</p>
                            </button>
                            <button
                                className="social-button facebook flex flex-row gap-2 items-center border-2 rounded-lg py-4 px-8">
                                <img className="h-4" src={facebookIcon} alt="Facebook logo"/>
                                <p>Facebook</p>
                            </button>
                        </div>

                    </section>

                </section>

            </div>

        </div>
        
    </div>
  )
}
