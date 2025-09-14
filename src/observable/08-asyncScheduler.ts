import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`hola ${nombre}`);

// asyncScheduler.schedule(saludar,2000);
// asyncScheduler.schedule(saludar2,2000,'isaac');

const sub$ = asyncScheduler.schedule(function(state){

    console.log('state', state);
    this.schedule(state + 1, 1000);
},2000,0);


// setTimeout(() => {
//     sub$.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => sub$.unsubscribe(), 6000);

