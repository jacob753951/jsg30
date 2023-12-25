

/*1.- Activar el formulario para poder agregar usuarios ( solo se pide el nombre completo)
  2.- Activar el botón "eliminar". Este botón debe eliminar al usuario al que corresponde
  3.- Activar el botón "ordenar por nombre". Este botón debe ordenar de forma alfabéticamente ascendente la lista de usuarios
  4.- Activar el filtro por nombre: Debe filtrar la lista de usuarios conforme se escribe algo en el input*/

1-
document.addEventListener('DOMContentLoaded', function() {
  
  const addUserForm = document.querySelector('.form-control');
  const addUserBtn = document.querySelector('.btn-primary');
  const userList = document.querySelector('.list-group');
  const sortBtn = document.querySelector('.btn-dark');
  const filterInput = document.querySelector('.form-control.mb-3');

  
  addUserBtn.addEventListener('click', function() {
      const userName = addUserForm.value.trim();
      if (userName) {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
          listItem.innerHTML = `
              <span>${userName}</span>
              <button class="btn btn-danger">X</button>
          `;
          userList.appendChild(listItem);
          console.log(`Usuario agregado: ${userName}`);
          addUserForm.value = ''; 
      }
  });
2-
// Manejador de eventos para eliminar usuario
  userList.addEventListener('click', function(e) {
      if (e.target.classList.contains('btn-danger')) {
          const userName = e.target.previousElementSibling.textContent;
          e.target.parentElement.remove();
          console.log(`Usuario eliminado: ${userName}`);
      }
  });
3-
// Manejador de eventos para ordenar por nombre
  sortBtn.addEventListener('click', function() {
      let listItems = Array.from(userList.children);
      listItems.sort((a, b) => a.textContent.localeCompare(b.textContent));
      
      userList.innerHTML = ''; // Limpiar la lista
      listItems.forEach(item => userList.appendChild(item)); // Añadir elementos ordenados
      console.log('Lista ordenada');
  });
4-
// Manejador de eventos para el filtro por nombre
  filterInput.addEventListener('input', function() {
    const filterValue = filterInput.value.toLowerCase();
    const listItems = userList.querySelectorAll('.list-group-item');

    const filteredItems = [];
    const nonFilteredItems = [];

    listItems.forEach(item => {
        const name = item.textContent.toLowerCase();
        if (name.includes(filterValue)) {
            filteredItems.push(item);
        } else {
            nonFilteredItems.push(item);
        }
    });

    userList.innerHTML = '';

    filteredItems.forEach(item => userList.appendChild(item));
    nonFilteredItems.forEach(item => userList.appendChild(item));

    console.log(`Filtro aplicado: ${filterValue}`);
});
});