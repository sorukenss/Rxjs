import { of, take, tap } from "rxjs";


const numbers$ = of(1,2,3,4,5,6,7,8,9,10).pipe(
    // tap(t => console.log('tap', t))
);

numbers$.pipe(
    tap(t => console.log('tap',t)),
    take(3)
)
.subscribe({
    next: (value) => console.log('next:', value),
    complete: () =>  console.log('complete')
});

