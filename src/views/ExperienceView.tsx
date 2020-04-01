import React from 'react';
import { RouteComponentProps, Link } from "react-router-dom";
import { connect,  ConnectedProps } from 'react-redux'
import { Data } from '../data/types';

// Single Experience view
// with react, redux, react-router-dom & typescript typing
// Experience identified in the path parameter experienceId

// state needed... (all data for now)
const mapState = ({data}:{data:Data}) => {
  return {
    data: data
  }
}
// callbacks -> dispatch actions (none for now)
const mapDispatch = {
}
// connector, so it can be typed...
const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

// path parameters
type TParams = { experienceId: string };

// combined component param type
type Props = PropsFromRedux & RouteComponentProps<TParams>

// Render the Experience identified in the path
function ExperienceView ({data, match}:Props) {
    let experience = data.experiences[ match.params.experienceId ]
    if ( !! experience ) 
        return (
            <div>
                <h1>Experience View: { experience.title } </h1>
                <ul>
                { experience.listIds.map((id, index) => (
                    <li key={id}>
                        <Link to={match.params.experienceId+"/"+id}>
                            { data.lists[id].title }
                         </Link>
                    </li>
                ))}
                </ul>
            </div>);
    else
        return <h1>Unknown experience: { match.params.experienceId }</h1>;
}

// connect it up
export default connector(ExperienceView)
