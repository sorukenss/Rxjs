import { concatMap, exhaustMap, fromEvent, interval, switchMap, take } from "rxjs";

//omitir todos los eventos solo toma el primero

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
 exhaustMap(() => interval$)
).subscribe(console.log)

