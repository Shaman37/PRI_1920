function apagaAluno(id){
    console.log("ID: " + id);
    axios.delete('/alunos/' + id)
         .then(res => window.location.assign('/'))
         .catch(error => console.log(error))
}