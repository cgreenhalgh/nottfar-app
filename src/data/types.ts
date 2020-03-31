// data - types thereof :-) see also README.md

// specifically audio
export interface AudioTrack {
    url         : string
    fromSeconds?: number // default 0
    toSeconds?  : number // default undefined(?!)
    gain?        : number // default 1
}
export const DEFAULT_GAIN = 1.0;

// a particular version, performance or implementation:
export interface Track {
    id : string
    audio? : AudioTrack[]
// (artist/attribution)
// (copyright?)
// (tempo)
// (time signature)
// (repeat?)
// (FX...)
// (sequencing...)
}

// a track as part of a work/playlist, e.g. a movement, section, song:
export interface Slot {
    key : string // for correlating Slots in different lists, i.e. only unique within a single List
    title : string
    description? : string // html?!
    trackId? : string //(Track.id), optional
    isHidden?: boolean // default false
// (composer/attribution?)
// (copyright?)
// (transition)
// (treatment?)
// (rank/order?)
// (version?)
}

// a potentially composite work, e.g. an album, piece:
export interface List { 
    id : string
    title : string
    description? : string // html?!
    slots: Slot[]
// (artist/attribution)
// (description)
// (copyright?)
}

export interface ViewMapping {
    isListView?: boolean // default false
    listId?: string // optional
    isSlotView?: boolean // default false
    slotKey?: string // optional
    viewKey: string //in URL, unique within list/slot
    viewComponent: string // component name
    rank: number // to sort
// (view parameters)
}

// the whole thing:
export interface Experience {
    id : string
    title : string
    version: number
    schemaVersion: string //(semver?)
    listIds: string[] //(List id)
    viewMappings: ViewMapping[]
// (artist/attribution)
// (description)
// (copyright?)
}

export interface TrackMap {
    [index:string]: Track;
}
export interface ListMap {
    [index:string]: List;
}
export interface ExperienceMap {
    [index:string]: Experience;
}

export interface Data {
    tracks: TrackMap
    lists: ListMap
    experiences: ExperienceMap
}
