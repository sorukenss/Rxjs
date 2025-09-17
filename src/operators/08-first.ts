import { first, fromEvent, map, take, tap } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap(),
    // map(event => ({
    //     x: event.clientX,
    //     y: event.clientY
    // }))
    map(({clientX, clientY}) => ({clientX,clientY})),
    first(event => event.clientY >= 150)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});