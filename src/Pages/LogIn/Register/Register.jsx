import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if(password === confirmPassword){
            createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user, error, name);
                form.reset();
                setError('');
                
                navigate('/');
                
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })       
        }
        else{
            setError('Password do not match')
        }
    }
    return (
        <div className="pt-28 mx-auto">
            <div className="hero bg-base-200 w-full py-32">
                <div className="hero-content flex flex-row gap-10">
                    <div className="text-center w-full">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shadow-2xl bg-base-100 px-10">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered w-96" required />
                            </div>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirmPassword" placeholder="confirmPassword" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                <p className='text-danger m-3'>{error}</p>
                                <h1 className="text-center mt-5">Or,</h1>
                                <p className="text-center"> Already have an account? </p>
                                <a className="text-yellow-600 text-center" href="/logIn">Please Log in here </a>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;