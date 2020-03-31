import React from 'react';
import { useParams } from "react-router-dom";

function SlotView() {
    let { experienceId, listId, slotKey, viewKey } = useParams();
    return <h1>Slot View: slot {slotKey}, view {viewKey} (experience {experienceId}, list {listId})</h1>;
}
export default SlotView;
