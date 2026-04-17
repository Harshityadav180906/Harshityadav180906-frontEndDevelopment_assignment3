import "./Home.css";
import performanceImg from "./PerformanceOverview.png";

function Home(){
    return(
        <div className="home">
            <h1 className="welcome">Welcome back, Harshit Yadav 👋</h1>

            <div className="card-container">
                <div className="card course">
                    <h3>Enrolled Courses</h3>
                    <h1>4</h1>
                </div>

                <div className="card assessment">
                    <h3>Total Assessments</h3>
                    <h1>4</h1>
                </div>
            </div>

            <div className="chart-card">
                <h3>Performance Overview</h3>
                <img src={performanceImg} alt="Performance Graph" className="graph-img" />
            </div>
        </div>
    )
}

export default Home;