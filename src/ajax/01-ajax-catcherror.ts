import { catchError, map, of, pluck } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax'

const url = 'https://api.github.com/users?per_page=5';

const manejaErrors = (resp: Response) => {
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp;
}

const atrapaError =(err: AjaxError) =>  {
            console.warn('Error en:', err.message);
            return of([])
        }

const fetchPromesa = fetch(url);

// fetchPromesa
// .then(manejaErrors)
// .then(resp => resp.json())
// .then(resp => {
//     console.log(resp);
// })
// .catch(
//     err => console.warn(err)
// );

ajax(url).pipe(
    // map(resp => resp.response)
    pluck('response'),
    catchError(atrapaError)
)
.subscribe(
    users => console.log('Usuarios:', users)
);