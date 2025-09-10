import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5);
// const obs$ = of(...[1,2,3,4,5],1,2,3);
const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

obs$.subscribe({
    next: (valor) => console.log(valor),
    error: (err) => console.warn(err),
    complete: () => console.info('completado [obs]')
});