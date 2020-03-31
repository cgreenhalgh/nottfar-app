import React from 'react';
import { useParams } from "react-router-dom";

function  ListView ()  {
    let { experienceId, listId } = useParams();
    return <h1>List View: list {listId} (experience {experienceId})</h1>;
}
export default ListView;
