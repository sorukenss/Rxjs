import { from, map, reduce, scan } from "rxjs";



const numbers = [1,2,3,4,5]; 

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// }

const totalAcumulador = (acc, cur) => acc + cur;

//reduce 
from(numbers).pipe(
    reduce(totalAcumulador, 0),
)
.subscribe(console.log);

//scan
from(numbers).pipe(
    scan(totalAcumulador, 0)
)
.subscribe(console.log);

//Redux patron 
interface User {
    id?: string;
    auth?: boolean;
    token?: string;
    age?: number;

}

const users: User[] = [
    {id: 'fer', auth: false, token: null},
    {id: 'fer', auth: true, token: 'ABC' },
    {id: 'fer', auth: true, token: 'ABC123'},
];

const state$ = from(users).pipe(
    scan<User,User>((acc, cur) => {
        return {...acc, ...cur}
    }, {age:33})
);

const id$ = state$.pipe(
  map(state => state)
);

id$.subscribe(console.log);

