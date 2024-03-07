const LogIn = () => {
    return (
        <div className="pt-32 mx-auto">
            <form action="" className="p-16 bg-slate-200 text-black mx-auto my-10 rounded text-center">
                <h1 className="text-2xl pb-5 font-extrabold">Please Log in Fast</h1>
                <div>
                <p>Enter Your Email Address:</p>
                <input className="bg-white text-black px-10 py-4 w-96" type="email" name="Email" id="" placeholder="Email" required/>
                </div>
                <div>
                <p className="text-black mt-5">Enter Your Password:</p>
                <input className="bg-white text-black px-10 py-4 w-96" type="password" name="password" id="" placeholder="Password" required/>
                </div>
               <button className="bg-blue-500 rounded py-5 px-10 my-5" type="submit">Log In</button>
               <h1>Or,</h1>
               <p> Do not have an account? </p>
               <a className="text-yellow-700" href="/register">Register here </a>
            </form>
        </div>
    );
};

export default LogIn;