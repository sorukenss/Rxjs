import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1'

ajax.get(url,{
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
}).subscribe(data => console.log('data:', data));

ajax.post(url,{
    body: {
        id: 1,
        nombre: 'Sorukens'
    },
    headers: {
        'mi-token': 'ABC123'
    }
}).subscribe(data => console.log('data:', data));

ajax.put(url,{
    body: {
        id: 1,
        nombre: 'Sorukens'
    },
    headers: {
        'mi-token': 'ABC123'
    }
}).subscribe(data => console.log('data:', data));

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Sorukens'
    }
}).subscribe(data => console.log('data:', data),)
