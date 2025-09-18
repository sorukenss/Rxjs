import { fromEvent, interval, sample } from "rxjs";

//emite el valor luego de un evento 
const interval$ = interval(5000);

const clicl$ = fromEvent(document, 'click');

interval$.pipe(
    sample(clicl$)
).subscribe(console.log);
