function infoAluno(id){
    console.log("ID: " + id);
    axios.get('/alunos/' + id)
         .then(res => window.location.assign('/alunos/'+ id))
         .catch(error => console.log("Não encontrado!"))
}