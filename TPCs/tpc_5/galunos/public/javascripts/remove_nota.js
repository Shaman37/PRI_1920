function removeNota(id_aluno,disciplina, indicador){
    console.log('Apagar a nota ' + indicador + 'referente à disciplina' + disciplina + ',do aluno ' + id_aluno)
    axios.delete('/alunos/' + id_aluno + '/notas/' + disciplina + '/' + indicador)
         .then(res => window.location.assign('/alunos/' + id_aluno))
         .catch(error => console.log(error))
}