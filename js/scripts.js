function ocutar() {
    var ids = ['projeto-1', 'projeto-2', 'projeto-3', 'projeto-4', 'projeto-5', 'projeto-6', 'projeto-7', 'projeto-8', 'projeto-9', 'projeto-10', 'projeto-11', 'projeto-12', 'projeto-13', 'projeto-14', 'projeto-15']
    ids.forEach(function(id){
        document.getElementById(id).style.display = 'none'
    })
}

function mostrarMais() {
    var ids = ['projeto-1', 'projeto-2', 'projeto-3', 'projeto-4', 'projeto-5', 'projeto-6', 'projeto-7', 'projeto-8', 'projeto-9', 'projeto-10', 'projeto-11', 'projeto-12', 'projeto-13', 'projeto-14', 'projeto-15', 'vermais']
    ids.forEach(function(id){
        document.getElementById(id).style.display = 'flex'
        document.getElementById('vermais').style.display = 'none'
    })
}