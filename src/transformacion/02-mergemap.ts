import { fromEvent, fromEventPattern, interval, map, mergeMap, of, take, takeUntil } from "rxjs";


const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)
// .subscribe(
//     (next) => console.log('next', next),
//     null,
//     () => console.log('Terminamos la secuencia')
// );

const mousedown$ =fromEvent(document, 'mousedown');
const mouseup$ =fromEvent(document, 'mouseup');
const interval$ =interval();

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe(console.log);