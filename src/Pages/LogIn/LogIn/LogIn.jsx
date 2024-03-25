import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
    const {signIn, providerLogIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const naviget = useNavigate()
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user, error);
            naviget(from, {replace: true});
            form.reset();
         
             setError('');
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);}
        )
    }
    const handleGoogleSignin = () =>{
        providerLogIn(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            naviget('/');
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="pt-28 mx-auto">
            <div className="hero bg-base-200 w-full py-32">
                <div className="hero-content flex flex-row gap-10">
                    <div className="text-center w-full">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shadow-2xl bg-base-100 px-10">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p className='text-danger m-3'>{error}</p>
                                <button onClick={handleGoogleSignin} className="btn btn-warning mt-5"> Sign in with Goagle</button>
                                <h1 className="text-center mt-5">Or,</h1>
                                <p className="text-center"> Do not have an account? </p>
                                <a className="text-yellow-700 text-center" href="/register">Register here </a>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default LogIn;