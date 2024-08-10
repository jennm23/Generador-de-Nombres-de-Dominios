let pronombre = ['mi', 'tu', 'nuestro', 'su', ];
let adjetivo = ['moderno', 'clasico', 'divertido', 'elegante', 'sencillo', 'nuevo'];
let sujeto = ['blog', 'sitio', 'proyecto', 'espacio', 'diseño', 'juego'];
let extension = ['.com', '.es', '.cl', '.ve', '.net', '.org']

for(let p = 0; p < pronombre.length; p++) {
    for(let a = 0; a < adjetivo.length; a++) {
        for(let s = 0; s < sujeto.length; s++) {
            for(let e = 0; e < extension.length; e++) {
                console.log(pronombre[p] + adjetivo[a] + sujeto[s] + extension[e])
            }
        }
    }
}