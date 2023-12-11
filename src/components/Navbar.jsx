import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" to="/">
                <img src={reactLogo} alt="react logo" className="h-6 w-6" />
                <span className="ml-2 text-xl font-semibold">Dev Loop</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="posts">
                    Posts
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="login">
                    Login
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="register">
                    Register
                </Link>

            </nav>
        </header>
    );
}

export default Navbar;

