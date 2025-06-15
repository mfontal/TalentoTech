dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break
    case "viernes":
        console.log("Fin de semana laboral");
        break;
    case "sabado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Dia no valido");
        break;
}