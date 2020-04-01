import React from 'react';
import { connect,  ConnectedProps } from 'react-redux'
import { Experience, ExperienceMap, Data } from '../data/types';
import { Link } from 'react-router-dom'

// List of all Experiences
// with react, redux, react-router-dom & typescript typing

// state map helpers
const getTitle = (experience: Experience) => 
    experience ? experience.title : ''

function getSortedExperienceIds( experienceMap: ExperienceMap ) : string[] {
    let ids: string[] = []
    for (let ex in experienceMap) {
        ids.push( ex )
    }
    ids.sort((a, b) => 
      ( getTitle( experienceMap[a] )
        .localeCompare( getTitle( experienceMap[b] ) )
      ))
    return ids;
}

// map state - all experiences and sorted id list
const mapState = ({data}:{data:Data}) => {
    return {
        experiences: data.experiences,
        experienceIds: getSortedExperienceIds( data.experiences )
    }
}
// call callbacks to dispatch - none
const mapDispatch = {
}
// connector (for typing)
const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

// combined view params type
type Props = PropsFromRedux 

// simple view of experience list
const ExperienceList = ({experiences, experienceIds}:Props) => (
    <div>
        <h1>Experience List View</h1>
        <ul>
            { experienceIds.map((id, index) => (
              <li key={id}>
                <Link to={"/"+id}>
                    { experiences[id].title }, version { experiences[id].version }
                </Link>
              </li>
            ))}
        </ul>
    </div>
)

// connect component
export default connector(ExperienceList)
