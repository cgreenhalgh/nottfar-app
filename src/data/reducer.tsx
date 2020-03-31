import { sampleClimbData } from './loader';

export const NULL_ACTION = "NULL"
interface NullAction {
  type: typeof NULL_ACTION
}
export type DataActionTypes = NullAction // | ...


export function dataReducer( state = sampleClimbData, action : DataActionTypes ) {
    return state;
}
