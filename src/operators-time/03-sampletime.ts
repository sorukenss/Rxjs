import { fromEvent, map, sampleTime } from "rxjs";


const clicl$ = fromEvent<PointerEvent>(document, 'click');

clicl$.pipe(
    map(({x, y}) => ({x, y})),
    sampleTime(2000),
).subscribe(console.log)