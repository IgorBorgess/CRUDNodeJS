const sequence = {
    _id: 1,
    get id(){return this._id++}
}

const cursos = {}

getCurso = function(id){
    return cursos[id]
}

getCursos = function(){
    return Object.values(cursos)
}

salvarCurso = function(curso){
    if (!curso.id){
        curso.id = sequence.id
    }
    cursos[curso.id] = curso
    return curso
}

excluirCurso = function(id){
    const cursoDeletado = cursos[id]
    delete cursos[id]
    return cursoDeletado
}

module.exports = {getCurso, getCursos, salvarCurso, excluirCurso}