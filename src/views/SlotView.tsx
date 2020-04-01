import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { connect,  ConnectedProps } from 'react-redux'
import { Data } from '../data/types';

// Single Slot view
// with react, redux, react-router-dom & typescript typing
// Experience/List/Slot/View identified in the path parameters 
// experienceId, listId, slotKey, viewKey

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
    slotKey: string
    viewKey?: string
}

// combined component param type
type Props = PropsFromRedux & RouteComponentProps<TParams>

// Render the Slot identified in the path
function SlotView ({data, match}:Props) {
    let experience = data.experiences[ match.params.experienceId ]
    if ( ! experience ) 
        return <h1>Unknown experience: { match.params.experienceId }</h1>;
    let list = data.lists[ match.params.listId ]
    if ( ! list ) 
        return <h1>Unknown list: { match.params.listId }</h1>;
    let slot = list.slots.find( slot => match.params.slotKey === slot.key )
    if ( ! slot ) 
        return <h1>Unknown slot: { match.params.slotKey }</h1>;
    
    // TODO view key -> mapping -> component

    return (<div>
            <h1>Slot View: {list.title}, {slot.title}</h1>
            <p> (track {slot.trackId})</p>
        </div>);
}

// connect it up
export default connector(SlotView)
