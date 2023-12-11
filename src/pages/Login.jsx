
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                   
                </div>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input id="email" placeholder="m@example.com" required type="email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="space-y-2">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input id="password" required type="password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="space-y-2">
                        <button className="btn  bg-black text-white">Login</button>
                    </div>
                </form>
                <p className="text-zinc-500 dark:text-zinc-400">
                        By logging in, you accept our
                        <Link className="text-blue-500 hover:text-blue-700" to="/">
                            terms
                        </Link>
                        and
                        <Link className="text-blue-500 hover:text-blue-700" href="#">
                            privacy policy
                        </Link>
                        .{"\n                            "}
                    </p>
            </div>
        </div>
    )
}



export default Login