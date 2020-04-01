import React from 'react';
import { Experience } from '../data/types';

function UnknownList ({ experience, listId }:{experience: Experience, listId:string}) {
    return (<div>
        <h1>Unknown list: { listId }</h1>
        <p>In experience { experience.title }</p>
    </div>);
}
export default UnknownList