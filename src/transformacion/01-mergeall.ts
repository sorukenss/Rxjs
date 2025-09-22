import { debounce, debounceTime, fromEvent, map, mergeAll, Observable, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";



//referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);


const mostrarUsuario= (usuarios:GithubUser[])=> {
    console.log(usuarios);
    orderList.innerHTML= '';
    for(const usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';
        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);
        orderList.append(li);

    }

}

//stream
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    // pluck('target', 'value'),
    map<KeyboardEvent, string>(evento => evento.target['value']),
    map<string, Observable<GithubUsersResp>>(event => ajax.getJSON(
            `https://api.github.com/search/users?q=${event}`
        )),
        mergeAll<Observable<GithubUsersResp>>(),
        map<GithubUsersResp, GithubUser[]>(item => item.items)
).subscribe(mostrarUsuario);