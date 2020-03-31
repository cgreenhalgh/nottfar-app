import { Data } from './types';

export const sampleClimbData:Data = {
    tracks: {
        climbayb1_1: {
            id: "climbayb1_1",
            audio: [{
                url: "http://music-mrl.nott.ac.uk/1/recordings/Climb_AYB_Anne-front.mp4",
                fromSeconds: 2.0,
                toSeconds: 12.0
            }]
        },
        climbayb1_2: {
            id: "climbayb1_2",
            audio: [{
                url: "http://music-mrl.nott.ac.uk/1/recordings/Climb_AYB_Anne-front.mp4",
                fromSeconds: 12.0,
                toSeconds: 22.0
            }]
        },
        climbayb2_1: {
            id: "climbayb2_1",
            audio: [{
                url: "http://music-mrl.nott.ac.uk/1/recordings/Climb_AYB_Zubin-front.mp4",
                fromSeconds: 2.0,
                toSeconds: 12.0
            }]
        },
        climbayb2_2: {
            id: "climbayb2_2",
            audio: [{
                url: "http://music-mrl.nott.ac.uk/1/recordings/Climb_AYB_Zubin-front.mp4",
                fromSeconds: 12.0,
                toSeconds: 22.0
            }]
        }
    },
    lists: {
        climbayb1: {
            id: "climbayb1",
            title: "Climb! performed by Anne Veinberg",
            description: "...description...",
            slots: [{
                key: "basecamp",
                title: "Basecamp",
                description: "...basecamp description...",
                trackId: "climbayb1_1"
            },{
                key: "stones",
                title: "The Stones",
                description: "...the stones description...",
                trackId: "climbayb1_2"
            }]
        },
        climbayb2: {
            id: "climbayb2",
            title: "Climb! performed by Zubin Kanga",
            description: "...description...",
            slots: [{
                key: "basecamp",
                title: "Basecamp",
                description: "...basecamp description...",
                trackId: "climbayb2.1"
            },{
                key: "stones",
                title: "The Stones",
                description: "...the stones description...",
                trackId: "climbayb2.2"
            }]
        }
    },
    experiences: {
        climb: {
            id: "climb",
            version: 1,
            title: "Climb!",
            schemaVersion: "1.0",
            listIds: ["climbayb1","climbayb2"],
            viewMappings: [{
                isListView: true,
                viewKey: "description",
                viewComponent: "ListDescriptionView",
                rank: 1
            },{ 
                isSlotView: true,
                viewKey: "description",
                viewComponent: "SlotDescriptionView",
                rank: 1
            }]
        }
    }
}
// dummy loader for now

export function loadData() : Data {
    return sampleClimbData;
}

