import React from 'react';
import { useParams } from "react-router-dom";

function ExperienceView () {
    let { experienceId } = useParams();
    return <h1>Experience View: {experienceId}</h1>;
}
export default ExperienceView;
