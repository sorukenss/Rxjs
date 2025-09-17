import { distinct, distinctUntilChanged, from, of } from "rxjs";


const number$ = of(1,'1',3,3,2,2,4,5,5,1);

number$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    }
];

from(personajes).pipe(
    distinctUntilChanged((anterior,actual) => anterior.nombre === actual.nombre )
)
.subscribe(console.log)