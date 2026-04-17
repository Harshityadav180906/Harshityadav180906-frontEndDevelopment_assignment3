import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-card">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
          alt="profile"
          className="profile-img"
        />

        <h2>Harshit Yadav</h2>
        <p className="role">BCA Student</p>

        <button className="edit-btn">Edit Profile</button>
      </div>

      <div className="profile-info">
        <h3>Personal Information</h3>

        <div className="info-grid">
          <div>
            <label>Email</label>
            <p>harshit@example.com</p>
          </div>

          <div>
            <label>Phone</label>
            <p>+91 9876543210</p>
          </div>

          <div>
            <label>Course</label>
            <p>BCA</p>
          </div>

          <div>
            <label>Year</label>
            <p>1st Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;