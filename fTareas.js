
const fs = require("fs") 

module.exports  = {
    archivo: "tareas.json",
    leer: function(){
         return JSON.parse(fs.readFileSync(this.archivo, "utf-8"));
    }

    guardar: function(nuevaTarea){
        const contenido = this.leer();

        contenido.push({
            descripcion : nuevaTarea,
            estado : "Pendiente"
        })
        fs.writeFileSync(this.archivo,  JSON.stringify(contenido))
        
    }
}

 
