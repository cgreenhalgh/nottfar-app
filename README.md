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
- react
- typescript
- react-router-dom
- material-ui

