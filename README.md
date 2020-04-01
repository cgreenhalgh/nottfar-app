# NottFAR App

An experimental music app, loosely linked to the Nottingham
Forum for Artistic Research.

Copyright (c) The University of Nottingham, 2020
by Chris Greenhalgh <chris.greenhalgh@nottingham.ac.uk>

Status: just starting...

## build

```
docker build -t nottfar-app .
docker run --rm --name nottfar \
 -v "`pwd`/src:/app/src" -v "`pwd`/public:/app/public" \
 -p 3000:3000 nottfar-app
```
```
docker run --it exec /bin/sh
npm start
```
[http://localhost:3000/](http://localhost:3000/)

## dependencies

So far, using:
- [react](https://reactjs.org/docs/)
- [typescript](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [redux](https://redux.js.org/basics/usage-with-react)
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [material-ui](https://material-ui.com/getting-started/usage/)

todo
- lots...
- [install roboto locally](https://material-ui.com/components/typography/#install-with-npm)

## design

### data model

`AudioTrack`, specifically audio:
- `url`
- `fromSeconds` : number, default 0
- `toSeconds` : number, default undefined(?!)
- `gain`: number, default 1

`Track`, i.e. a particular version, performance or implementation:
- `id` : string
- `audio` : AudioTrack[]
- (artist/attribution)
- (copyright?)
- (tempo)
- (time signature)
- (repeat?)
- (FX...)
- (sequencing...)

`Slot`, i.e. a track as part of a work/playlist, e.g. a movement, section, song:
- `key` : string - for correlating Slots in different lists, 
i.e. only unique within a single List
- `title` : string
- `description` : string - html?!
- `trackId`: string (Track.id), optional
- `isHidden`: boolean, default false
- (composer/attribution?)
- (copyright?)
- (transition)
- (treatment?)
- (rank/order?)
- (version?)

`List`, i.e. a potentially composite work, e.g. an album, piece:
- `id` : string
- `title` : string
- `description` : string - html?!
- `slots`: Slot[]
- (artist/attribution)
- (description)
- (copyright?)

`ViewMapping`:
- `isListView`: boolean, default false
- `listId`: string, optional
- `isSlotView`: boolean, default false
- `slotKey`: string, optional
- `viewKey`: string, default "default", in URL, unique within list/slot
- `viewComponent`: string - component name
- `rank`: number - to sort
- (view parameters)

`Experience`, i.e. the whole thing:
- `id` : string
- `title` : string
- `version`: number
- `schemaVersion`: string (semver?)
- `listIds`: string[] (List id)
- `viewMappings`: ViewMapping[]
- (artist/attribution)
- (description)
- (copyright?)

`Data`
- `tracks` : string (id) -> Track
- `lists`: string (id) -> List
- `experiences`: string (id) -> Experience

### state

`track`:
- `trackId` : string, Track id
- `time` : number
- `canPlay`: boolean
- `isPlaying` : boolean
- `speed`: number, default 1
- `slotKey`: string, Slot key
- `listId`: string, List id
- `experienceId`: string, Experience id
- (loop?)
- (segment/selection?)

(history)
(transition)
(favorites)

### paths

`/`
`/:experience`
`/:experience/as/:view`
`/:experience/:list`
`/:experience/:list/as/:view`
`/:experience/:list/:slot`
`/:experience/:list/:slot/as/:view`
