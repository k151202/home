import React from "react";

import { Col, Card } from "react-bootstrap";
const ExperienceCard = ({ data }) => {
  return (
    // <Col lg="6">
    //     <div className="pb-5 text-center">
    //         <img className=" bg-white mb-3" src={data.companylogo} alt=""/>
    //         <p className="lead">
    //             {data.role}
    //             <br/>
    //             {data.date}
    //         </p>

    //     </div>
    // </Col>
    <ul class="experience-tl">
      <li>
        <h2 className="lead">{data.date}</h2>
        <h3 className="lead">{data.role}</h3>
        <h4 className="lead">{data.location}</h4>
        <p className="lead">{data.description}</p>
      </li>
    </ul>
  );
};

export default ExperienceCard;
