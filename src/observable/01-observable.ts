import { Observable, Observer } from 'rxjs';


// const obs$ = Observable.create();

const observer: Observer<string> = {
    next: (valor) => console.log(valor),
    error: (err) => console.warn(err),
    complete: () => console.info('completado [obs]')
}

const obs$ = new Observable<string>(subs => {
    
    subs.next('hola');
    subs.complete();
});

obs$.subscribe(observer);
// obs$.subscribe(
//     valor => console.log(valor),
//     error => console.warn(error),
//     () => console.info('completado')
// );

