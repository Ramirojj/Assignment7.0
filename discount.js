document.getElementById('discount-row').addEventListener('click', function(e){
    if (e.target.classList.contains('discount')) {
      e.preventDefault();
      document.getElementById('product').innerHTML = e.target.dataset['product'];
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }
  });