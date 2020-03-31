import React from 'react';
import { connect,  ConnectedProps } from 'react-redux'
import { Experience, ExperienceMap, Data } from '../data/types';

function getExperiences( experienceMap: ExperienceMap ) : Experience[] {
    let experiences: Experience[] = []
    for (let ex in experienceMap) {
        experiences.push( experienceMap[ex] )
    }
    experiences.sort((a, b) => ( a.title.localeCompare(b.title) ));
    //console.log('experienceMap', experienceMap)
    //console.log('experiences', experiences)
    return experiences;
}

const mapState = ({data}:{data:Data}) => {
  return {
    experiences: getExperiences(data.experiences)
  }
}
const mapDispatch = {
}
const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

// simple view of experience list
const ExperienceList = (props:Props) => (
    <div>
        <h1>Experience List View</h1>
        <ul>
            { props.experiences.map((experience, index) => (
              <li key={experience.id}>{ experience.title }, version { experience.version }</li>
            ))}
        </ul>
    </div>
)

export default connector(ExperienceList)
