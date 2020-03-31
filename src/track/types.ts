// track = current traack (state) types

export interface TrackState {
    trackId? : string // Track id
    time : number
    canPlay: boolean
    isPlaying : boolean
    speed?: number // default 1
    slotKey?: string // Slot key
    listId?: string // List id
    experienceId?: string // Experience id
// (loop?)
// (segment/selection?)
}
