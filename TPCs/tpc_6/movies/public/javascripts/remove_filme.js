function apagaFilme(id){
    console.log("ID: " + id);
    axios.delete('/filmes/' + id)
         .then(res => window.location.assign('/filmes'))
         .catch(error => console.log(error))
}