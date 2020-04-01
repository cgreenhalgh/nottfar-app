import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { connect,  ConnectedProps } from 'react-redux'
import { Data } from '../data/types';
import UnknownExperience from './UnknownExperience';
import UnknownList from './UnknownList';
import NavBar from './NavBar';
import { Typography, Button, Container, Grid } from '@material-ui/core';

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
        return <UnknownExperience experienceId={match.params.experienceId} />;
    let list = data.lists[ match.params.listId ]
    if ( ! list ) 
        return <UnknownList experience={experience} listId={ match.params.listId } />;
    let slot = list.slots.find( slot => match.params.slotKey === slot.key )
    if ( ! slot ) 
        return <h1>Unknown slot: { match.params.slotKey }</h1>;
    
    // TODO view key -> mapping -> component

    return (<div>
        <NavBar title={slot.title} />
        <Container maxWidth='sm'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body1">Slot View: {list.title}, {slot.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained'>Play track {slot.trackId}</Button>
                </Grid>
            </Grid>
        </Container>
    </div>);
}

// connect it up
export default connector(SlotView)
