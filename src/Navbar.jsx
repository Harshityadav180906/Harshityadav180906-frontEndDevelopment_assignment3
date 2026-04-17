import "./Navbar.css";

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">MyApp</div>

            <div className="nav-links">
                <a href="/Home">Home</a>
                <a href="/Course">Course</a>
                <a href="/Assignment">Assignment</a>
                <a href="/Profile">Profile</a>
            </div>
        </div>
    )
}

export default Navbar;