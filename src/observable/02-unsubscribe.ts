import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (valor) => console.log(valor),
    error: (err) => console.warn(err),
    complete: () => console.info('completado [obs]')
}

const intervalo$ = new Observable<number>(subs => {

    let count = 0;
    const interval =setInterval(() => {
        count++;
        subs.next(count);
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }
})

const subscription =  intervalo$.subscribe (observer);
const subscription2 =  intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);


subscription.add(subscription2);
setTimeout(() => {
    // subscription.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('completado timeout');
}, 6000);