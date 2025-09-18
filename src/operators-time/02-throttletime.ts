import {asyncScheduler, distinctUntilChanged, fromEvent, pluck, throttleTime } from "rxjs";
//funciona como un dilay al dar clicl lo emite rapido, pero despues de 3 segundo no emite ninguno los omite, leading primer valor, trailing ultimo valor en el tiempo

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    throttleTime(1000)
).subscribe(console.log);

//ejemplo2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(3000,asyncScheduler,{
        leading:true,
        trailing:true
    }),
    pluck('target', 'value'),
    distinctUntilChanged(),
).subscribe(console.log);