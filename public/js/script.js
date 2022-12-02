const btn = document.querySelector("#btn")

console.log(btn)

btn.addEventListener('click', function() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cota reservada com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
    
}
)