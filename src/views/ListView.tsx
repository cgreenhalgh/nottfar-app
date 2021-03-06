import React from 'react';
import { RouteComponentProps, Link } from "react-router-dom";
import { connect,  ConnectedProps } from 'react-redux'
import { Data } from '../data/types';
import UnknownExperience from './UnknownExperience';
import UnknownList from './UnknownList';

// Single List view
// with react, redux, react-router-dom & typescript typing
// Experience/List/View identified in the path parameters 
// experienceId, listId, viewKey

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
type TParams = { 
    experienceId: string
    listId: string
    viewKey?: string
}

// combined component param type
type Props = PropsFromRedux & RouteComponentProps<TParams>

// Render the Experience identified in the path
function ListView ({data, match}:Props) {
    let experience = data.experiences[ match.params.experienceId ]
    if ( ! experience ) 
        return <UnknownExperience experienceId={match.params.experienceId} />;
    let list = data.lists[ match.params.listId ]
    if ( ! list ) 
        return <UnknownList experience={experience} listId={ match.params.listId } />;
    // TODO view key -> mapping -> component
    
    return (<div>
        <h1>List View: { list.title } </h1>
        <ul>
            { list.slots.map((slot, index) => (
                <li key={slot.key}>
                    <Link to={"/"+match.params.experienceId+"/"+match.params.listId+'/'+slot.key}>
                        { slot.title }
                     </Link>
                </li>
            ))}
        </ul>
    </div>);
}

// connect it up
export default connector(ListView)
