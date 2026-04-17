import "./Assessment.css";

function Assessment() {
  const data = [
    {
      title: "BCA Cyber Security",
      questions: "6h",
      date: "Apr 14, 2026",
      status: "Missed"
    },
    {
      title: "Cloud Computing Test 2",
      questions: "13 Questions • 13 Marks • 24h",
      status: "Results Released"
    },
    {
      title: "BCA DM Assessment 2",
      questions: "13 Questions • 13 Marks • 10m",
      date: "Mar 25, 2026",
      status: "Missed"
    },
  ];

  return (
    <div className="main full">
      <h2>My Assessments</h2>

      <input
        type="text"
        placeholder="Search assessments..."
        className="search"
      />

      <div className="grid">
        {data.map((item, index) => (
          <div className="card">
            <h3>{item.title}</h3>
            <p>{item.questions}</p>

            <p className="date">{item.date}</p>

            <span className={"status"}>
            {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assessment;