const fs = require('fs');
const color = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} is not a number.`);
            return;
        }

        let text = '';
        for (let i = 1; i <= limite; i++) {
            let multi = base * i;
            text += `${base} * ${i} = ${multi} \n`;
        }

        const data = new Uint8Array(Buffer.from(text));
        fs.writeFile(`out/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} is not a number.`);
            return;
        }
        console.log(color.blue('======================================'));
        console.log(color.yellow(`             Tabla: ${color.white(base)}           `));
        console.log(color.blue('======================================'));

        let text = '';
        for (let i = 1; i <= limite; i++) {
            let multi = base * i;
            text += `${color.yellow(base)} ${color.blue('*')} ${color.yellow(i)} = ${color.red(multi)} \n`;
        }
        resolve(text);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};