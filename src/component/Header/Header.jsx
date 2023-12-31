import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div class="text-justify items-center">
            <h2> navber</h2>
            <nav>
                {/* Using <link></link> beacuse of loading data  */}
                <Link to="/">Home</Link> 
                <Link to="/about">about</Link> 
                <Link to="contact">contact</Link> 
                <Link to="users">users</Link> 

            </nav>
        </div>
    );
};

export default Header;