import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";

//toma todos los eventos y los ejecuta yt luego termina

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
 concatMap(() => interval$)
).subscribe(console.log)

