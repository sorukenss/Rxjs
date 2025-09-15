import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et dignissim velit. Cras consectetur orci vitae porttitor tincidunt. Ut tincidunt venenatis venenatis. Ut sit amet vestibulum ante. Donec dignissim, lacus sit amet placerat luctus, nulla risus tristique diam, vitae venenatis lacus augue sit amet urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus sed lorem dignissim ornare. Quisque venenatis lacus sed lacus euismod, vitae elementum lorem vehicula. Mauris blandit vehicula dolor sit amet accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ornare neque in mauris semper porta. Suspendisse placerat nibh est, tincidunt tristique sapien commodo at. Aenean vel consectetur nisl.
<br/><br/>
Nullam ornare faucibus ligula, ut rutrum metus dictum a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec viverra mi ipsum, a malesuada leo elementum a. Sed libero magna, bibendum vitae finibus non, finibus varius lectus. Nunc egestas fermentum felis, ac ornare magna tempus id. Integer libero metus, euismod sed vestibulum ut, feugiat a ipsum. Donec eu lectus sem. Nulla imperdiet, magna eget ornare aliquam, lacus nibh pellentesque purus, vitae semper lorem lorem eget libero. Aliquam erat volutpat. Curabitur venenatis enim non purus dignissim hendrerit. Integer ultrices porttitor sem. Donec quis felis non ante fringilla dapibus in a dolor.
<br/><br/>
Donec vitae aliquam arcu. Sed sed erat ut nulla varius sollicitudin. Morbi semper lectus dolor, ut tincidunt erat consectetur a. In in posuere sem, ac dignissim risus. Aliquam dictum quam eget tempus finibus. Proin a lacus quis lectus accumsan volutpat. Cras vehicula facilisis diam, et dignissim nulla dictum dictum. Vivamus vitae vestibulum risus. Fusce purus nisl, molestie vitae cursus eget, iaculis euismod erat. Sed maximus est vel mauris vestibulum, vel porta nibh sodales. Aenean mi eros, blandit eget semper a, hendrerit nec augue. Vivamus rutrum nulla at ex malesuada blandit nec a magna.
<br/><br/>
Cras leo odio, ornare porttitor finibus ac, faucibus at ante. Morbi gravida et ante id rutrum. Nam ligula turpis, efficitur ac laoreet quis, condimentum id enim. Fusce quis orci sed ligula sodales suscipit sit amet id lorem. Sed id sem sed risus ultrices finibus. Maecenas in nisl imperdiet, lacinia diam et, fermentum purus. Sed viverra dolor in vulputate pulvinar. Integer iaculis tristique justo ut luctus. Suspendisse potenti. Quisque luctus aliquam lobortis.
<br/><br/>
Proin aliquet nisl non pulvinar cursus. Quisque vel massa dignissim, venenatis orci vestibulum, iaculis lorem. Cras efficitur auctor maximus. Suspendisse molestie mattis ex et vestibulum. Duis et lorem fringilla, imperdiet enim non, euismod eros. Sed scelerisque, ante ut condimentum suscipit, sapien arcu volutpat leo, in tincidunt nulla ligula id nisl. Mauris luctus porta arcu nec mollis. Nullam consequat mi libero, ac dapibus magna faucibus ac. Vivamus ultrices eros sed nunc efficitur, eget lobortis purus maximus. Nulla dolor purus, porta viverra congue vel, imperdiet at justo. Cras ultrices orci vel dui pellentesque pharetra. Phasellus interdum magna ac nibh sodales, non cursus augue placerat. Pellentesque quis maximus urna. Sed vulputate porta nisi, id consequat tellus faucibus non. Maecenas finibus dignissim magna et vulputate. Sed pharetra, mi in scelerisque mollis, justo eros ornare libero, eu commodo nibh mi in metus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et dignissim velit. Cras consectetur orci vitae porttitor tincidunt. Ut tincidunt venenatis venenatis. Ut sit amet vestibulum ante. Donec dignissim, lacus sit amet placerat luctus, nulla risus tristique diam, vitae venenatis lacus augue sit amet urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus sed lorem dignissim ornare. Quisque venenatis lacus sed lacus euismod, vitae elementum lorem vehicula. Mauris blandit vehicula dolor sit amet accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ornare neque in mauris semper porta. Suspendisse placerat nibh est, tincidunt tristique sapien commodo at. Aenean vel consectetur nisl.
<br/><br/>
Nullam ornare faucibus ligula, ut rutrum metus dictum a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec viverra mi ipsum, a malesuada leo elementum a. Sed libero magna, bibendum vitae finibus non, finibus varius lectus. Nunc egestas fermentum felis, ac ornare magna tempus id. Integer libero metus, euismod sed vestibulum ut, feugiat a ipsum. Donec eu lectus sem. Nulla imperdiet, magna eget ornare aliquam, lacus nibh pellentesque purus, vitae semper lorem lorem eget libero. Aliquam erat volutpat. Curabitur venenatis enim non purus dignissim hendrerit. Integer ultrices porttitor sem. Donec quis felis non ante fringilla dapibus in a dolor.
<br/><br/>
Donec vitae aliquam arcu. Sed sed erat ut nulla varius sollicitudin. Morbi semper lectus dolor, ut tincidunt erat consectetur a. In in posuere sem, ac dignissim risus. Aliquam dictum quam eget tempus finibus. Proin a lacus quis lectus accumsan volutpat. Cras vehicula facilisis diam, et dignissim nulla dictum dictum. Vivamus vitae vestibulum risus. Fusce purus nisl, molestie vitae cursus eget, iaculis euismod erat. Sed maximus est vel mauris vestibulum, vel porta nibh sodales. Aenean mi eros, blandit eget semper a, hendrerit nec augue. Vivamus rutrum nulla at ex malesuada blandit nec a magna.
<br/><br/>
Cras leo odio, ornare porttitor finibus ac, faucibus at ante. Morbi gravida et ante id rutrum. Nam ligula turpis, efficitur ac laoreet quis, condimentum id enim. Fusce quis orci sed ligula sodales suscipit sit amet id lorem. Sed id sem sed risus ultrices finibus. Maecenas in nisl imperdiet, lacinia diam et, fermentum purus. Sed viverra dolor in vulputate pulvinar. Integer iaculis tristique justo ut luctus. Suspendisse potenti. Quisque luctus aliquam lobortis.
<br/><br/>
Proin aliquet nisl non pulvinar cursus. Quisque vel massa dignissim, venenatis orci vestibulum, iaculis lorem. Cras efficitur auctor maximus. Suspendisse molestie mattis ex et vestibulum. Duis et lorem fringilla, imperdiet enim non, euismod eros. Sed scelerisque, ante ut condimentum suscipit, sapien arcu volutpat leo, in tincidunt nulla ligula id nisl. Mauris luctus porta arcu nec mollis. Nullam consequat mi libero, ac dapibus magna faucibus ac. Vivamus ultrices eros sed nunc efficitur, eget lobortis purus maximus. Nulla dolor purus, porta viverra congue vel, imperdiet at justo. Cras ultrices orci vel dui pellentesque pharetra. Phasellus interdum magna ac nibh sodales, non cursus augue placerat. Pellentesque quis maximus urna. Sed vulputate porta nisi, id consequat tellus faucibus non. Maecenas finibus dignissim magna et vulputate. Sed pharetra, mi in scelerisque mollis, justo eros ornare libero, eu commodo nibh mi in metus.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');

progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

//funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // console.log({scrollTop,scrollHeight,clientHeight})
    return (scrollTop / (scrollHeight - clientHeight))* 100
}


//streams

const scroll$ = fromEvent(document,'scroll');

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map( (event) => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll),
    tap(console.log),
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
})
