import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: (valor) => console.log(valor),
    error: (err) => console.warn(err),
    complete: () => console.info('completado [obs]')
}

const intervalo$ = new Observable<number>(subs => {

    const intervalId = setInterval(() => subs.next(Math.random()), 5000);

    return () =>{ 
        console.log('intervalo destruido');
        clearInterval(intervalId);
   }
});

// const subs1 = intervalo$.subscribe(observer);
// const subs2 = intervalo$.subscribe( rnd => console.log('sub1', rnd) );
// const subs3 = intervalo$.subscribe( rnd => console.log('sub2', rnd) );

//** 
// 1- casteo multiple
// 2- tambien es un observer
// 3- next, error y complete */

const subject$ = new Subject();
const subcription = intervalo$.subscribe(subject$);

const sub1 = subject$.subscribe(observer);
const sub2 = subject$.subscribe(observer);



setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subcription.unsubscribe();
}, 3500);