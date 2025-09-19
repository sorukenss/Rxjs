import { catchError, of } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax'

const url = 'https://httpbin.org/delay/1'
// const url = 'https://api.github.com/users?per_page=5';

const manejaError = (resp : AjaxError) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs2$.subscribe(data => console.log('data2:',data));

obs$.pipe(
    catchError(manejaError)
)
.subscribe({
        next: val => console.log('next:', val),
        error: err => console.warn('error en subs:', err),
        complete: () => console.log('complete')
});