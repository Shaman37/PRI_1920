function infoObras(id){
    axios.get('/api/compositores/' + id)
         .then(res => window.location.assign('/api/compositores/'+ id))
         .catch(error => console.log("Não encontrado!"))
}