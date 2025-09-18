import { auditTime, fromEvent, map, tap } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    auditTime(2000),
    map(({x}) => ({x}),
)).subscribe(console.log)