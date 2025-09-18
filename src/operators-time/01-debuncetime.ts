import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";
//emite luego de cada click en el tiempo, espera luego de que nada se emite se toma su tiempo y lo emite

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    debounceTime(1000)
)
.subscribe(console.log);

//ejemplo2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    debounceTime(3000),
    pluck('target', 'value'),
    distinctUntilChanged(),
).subscribe(console.log);