import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (valor) => console.log(valor),
    error: (err) => console.warn(err),
    complete: () => console.info('completado [obs]')
}

const intervalo$ = new Observable<number>(subs => {

    const intervalId = setInterval(() => subs.next(Math.random()), 1000);

    return () => clearInterval(intervalId);
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe( rnd => console.log('sub1', rnd) );
const subs3 = intervalo$.subscribe( rnd => console.log('sub2', rnd) );