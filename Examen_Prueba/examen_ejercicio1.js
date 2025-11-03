const estudiantes = [
        {nombre: "Ana", nota: 8},
        {nombre: "Luis", nota: 10},
        {nombre: "Pepe", nota: 0},
        {nombre: "Heidi", nota: 2},
        {nombre: "Mohamed", nota: 6}
];

//Monstrar lista de estudiantes y sus notas 
const mostrarNotaEstudiantes = (estudiantes) => {
    estudiantes.forEach(estudiantes => {
        let {nombre, nota} = estudiantes;
        console.log(`El estudiante ${nombre} tiene una nota de ${nota}`);
        /*console.log(`EL estudiante ${estudiantes.nombre} tiene de nota: ${estudiantes.nota}`);*/
    });
}


// Nota media de los estudiantes
const calcularMediaEstudiantes = (estudiantes) => {
    let sumaNotas = 0;
    estudiantes.forEach(estudiantes =>{
        sumaNotas += estudiantes.nota;
    })
    let mediaNota = sumaNotas / estudiantes.length;
    console.log(`La nota media de los estudiantes es : ${mediaNota}`);
    return mediaNota;
}

//Estudiantes aprobados
const aprobadosEstudiantes = (estudiantes) => {
    let estudiantesAprobados = estudiantes.filter(estudiantes => estudiantes.nota >= 5);
    console.log("Estudiantes aprobados:");
    estudiantesAprobados.forEach(estudiantes =>{
        console.log(`El estudiante ${estudiantes.nombre} ha aprobado con una nota de ${estudiantes.nota}`);
    })
}
mostrarNotaEstudiantes(estudiantes);
calcularMediaEstudiantes(estudiantes);
aprobadosEstudiantes(estudiantes);


