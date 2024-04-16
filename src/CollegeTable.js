import React from "react";
import "./CollegeTable.css"; // Import CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
const CollegeTable = ({ data }) => {
  const handleLinkClick = (url) => {
    console.log("url",url)
    window.open(url); 
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Cd Rank</th>
            <th>Colleges</th>
            <th>Course Fees</th>
            <th>Placement</th>
            <th>User Review</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {data.map((college) => (
            <tr key={college.id}>
              <td>#{college.id}</td>
              <td style={{ color: "#4FB8DD" }}>
                <img src={college.img} alt="College" className="college-img" />
                {college.college}
                <div style={{ marginLeft: "35px" }}>
                  <span>{college.loction}</span>
                </div>
                <div className="compare">
                  <span className="apply-btn" style={{ color: "#f88542" }}>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" onClick={()=>handleLinkClick(college.url)} />
                    Apply Now
                  </span>
                  <span style={{color:"#3eae8d",margin:"0 20px 0 20px"}}>Download Brochure</span>
                  <input type="checkbox" />
                  <span style={{color:"black"}}>Add to compare</span>
                </div>
              </td>
              <td style={{ color: "#3eae8d" }}>{college.courseFees}</td>
              <td style={{ color: "#3eae8d" }}>{college.placement}</td>
              <td>
                <FontAwesomeIcon icon={faStar} className="star-icon" />
                {college.userReview}
              </td>
              <td>{college.collegeDuniaRank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeTable;
