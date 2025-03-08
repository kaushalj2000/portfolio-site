import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date={<span style={{ marginLeft: '50px' }}>May 2024 - July 2024</span>}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Project Management Institute
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Data Analyst Intern
          </h6>
          <p>• Analyzed participant engagement, satisfaction scores, and skill improvement metrics using Power BI and Excel to
          derive actionable insights that enhanced program effectiveness by 20%.</p>
          <p>• Monitored sponsorship status, sentiment analysis, and job postings through SQL queries, contributing to the
          formation of 15 new partnerships and 400 job opportunities for PMI members.</p>
          <p>• Created interactive dashboards to support PMI coordinators in organizing Career Quest programs, optimizing
          strategic planning and improving participant outcomes.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="September 2021 - June 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Infosys Limited
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Data Analyst
          </h6>
          <p>• Performed data analysis and SQL querying to resolve 90%+ production issues, extracting customer insights from
          Telstra’s databases to address cross-functional team inquiries, improving resolution efficiency by 25% and customer satisfaction.</p>
          <p>• Developed monthly KPI dashboards using Excel to visualize critical metrics and presented actionable insights to
          stakeholders, enabling data-driven operational decisions for Telstra.</p>
          <p>• Automated issue resolution workflows by permanently fixing recurring system errors (PKEs), reducing repeat
          incidents by 30% through root-cause analysis, regression testing, and documentation of standardized solutions.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date={<span style={{ marginLeft: '50px' }}>May 2024 - July 2024</span>}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Darwinbox
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Product Specialist Intern
          </h6>
          <p>• Contributed as a valued member of the Account Management team, dedicated to analyzing and resolving intricate business use cases related to modules such as 
          payroll, time management, and talent management. Utilized a proprietary cloud-based HRMS software for these tasks.</p>
          <p>• Assisted clients in addressing system quality issues, aligning the tool with their business goals, and suggesting relevant features that streamlined processes, ultimately leading to enhancements.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
