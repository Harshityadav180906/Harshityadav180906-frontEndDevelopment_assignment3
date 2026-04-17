import "./Course.css";
function Home(){
    return(
        <div>
            <h1>Enrolled Course</h1>
            <div>
                <h2>Enrolled Courses</h2>
                <div className="course1">
                    <h4>Web Devlopment</h4>
                    <p>Prof. Gyan Chandra</p>
                    <p>Monday , Tuesday , Friday</p>
                </div>
                <div className="course2">
                    <h4>DSA</h4>
                    <p>Prof. Kumar Vishal</p>
                    <p>Monday To Wednesday</p>
                </div>
                <div className="course1">
                    <h4>Rural Development</h4>
                    <p>Prof. Tomar Anjali</p>
                    <p>Monday , Tuesday , Friday</p>
                </div>
                <div className="course1">
                    <h4>Discrete Mathematics</h4>
                    <p>Prof. Neha Kaushik</p>
                    <p>Monday , Tuesday , Friday</p>
                </div>
            </div>

        </div>
    )
}
export default Home;