function asigna(array, callback){
    //Ejecutamos algo
    console.log(`La clase es: ${array}`);
    setTimeout(() => {
        callback();
    }, 3000);
}
const clase = ["Jose","Ivan","Carlos","Ruben","Nerea","Sheila","Alejandro","Angel","Jose Luis","Anabel","Laura"];

asigna(clase,()=>{ 
    clase.push("Profe David");
    console.log(`Hemos asignado un profesor a la clase: ${clase}`);
});

asigna(clase, function(){

    clase.sort();
    console.log(clase);
});

asigna(clase,function(){
    clase.forEach(alumno=>console.log(`El alumno ${alumno} tiene una nota de 10`));
});

asigna(clase,function(){
    console.log("Nos cargamos al profesor...");
    let nuevaClase = clase.filter(alumno => !alumno.includes("Profe"));
    console.log(nuevaClase);
});