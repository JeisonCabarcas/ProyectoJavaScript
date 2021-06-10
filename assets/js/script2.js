let usuarioPrompt = prompt("Ingrese su usuario");
let contraseñaPrompt = prompt("Ingrese su contraseña");


let usuarios = [
    {
        usuarioNombre: "jeison",
        contraseña: "alteru1"
    },

    {
        usuarioNombre: "johan",
        contraseña: "alteru2"
    },

    {
        usuarioNombre: "catalina",
        contraseña: "alteru3"
    },

    {
        usuarioNombre: "karina",
        contraseña: "alteru4"
    },

    {
        usuarioNombre: "invitado",
        contraseña: "alteru5"
    }
];
let cuenta = [
    {
        nombre: "Jeison",
        saldo: "1.232.000"
    },
    {
        nombre: "Johan",
        saldo: "4.583.474"
    },
    {
        nombre: "Catalina",
        saldo: "7.485.485"
    },
    {
        nombre: "Karina",
        saldo: "9.586.384"
    },
    {
        nombre: "Invitado",
        saldo: "999.999.999"
    }
];
function loggin(user, pass) {
    let tagUser = 0;
    let tagID = 0;
    let control=0;
    for (let i = 0; i < 5; i++) {
        tagUser++;
        if (user.toLowerCase() === usuarios[i].usuarioNombre && pass === usuarios[i].contraseña) {
            tagID = tagUser - 1;
            alert("Hola " + cuenta[tagID].nombre + " su saldo es: " + cuenta[tagID].saldo);
            console.log("Hola " + cuenta[tagID].nombre + " su saldo es: " + cuenta[tagID].saldo);
            control=1;
        } 
        if (tagUser===5 && control === 0) {
            alert("Ops, tu usuario o contrasela es inconrrecto");
            console.log("Ops, tu usuario o contrasela es inconrrecto");
           
        }
    }

};
loggin(usuarioPrompt, contraseñaPrompt);