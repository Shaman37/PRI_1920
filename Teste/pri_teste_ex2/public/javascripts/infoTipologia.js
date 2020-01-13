function infoTipologia(id){
    console.log("ID: " + id);
    axios.get('/tipologias/' + id)
         .then(res => window.location.assign('/tipologias/'+ id))
         .catch(error => console.log("Não encontrado!"))
}