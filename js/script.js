<<<<<<< HEAD
// Obtener los elementos de los íconos y los modales
const searchIcon = document.getElementById("search-icon");
const userIcon = document.getElementById("user-icon");
const cartIcon = document.getElementById("cart-icon");

const searchModal = document.getElementById("search-form");
const userModal = document.getElementById("user-modal");
const cartModal = document.getElementById("cart-modal");

const closeButtons = document.querySelectorAll(".modal button");

// Función para mostrar el modal
function showModal(modal) {
    modal.style.display = "block"; // Mostrar modal
}

// Función para cerrar el modal
function closeModal(modal) {
    modal.style.display = "none"; // Ocultar modal
}

// Agregar eventos de clic a los íconos
searchIcon.addEventListener("click", () => showModal(searchModal));
userIcon.addEventListener("click", () => showModal(userModal));
cartIcon.addEventListener("click", () => showModal(cartModal));

// Agregar evento de clic a los botones de cierre de los modales
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Cerrar el modal en el que está el botón
        closeModal(button.closest(".modal"));
    });
});
=======

// Función para mostrar un formulario de búsqueda
function toggleSearch() {
    const searchForm = document.getElementById('search-form');
    if (!searchForm) {
        // Crear y mostrar un formulario de búsqueda
        const searchDiv = document.createElement('div');
        searchDiv.id = 'search-form';
        searchDiv.innerHTML = `
            <input type="text" placeholder="Buscar productos...">
            <button onclick="closeSearch()">Cerrar</button>
        `;
        document.body.appendChild(searchDiv);
    }
}

// Función para cerrar el formulario de búsqueda
function closeSearch() {
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.remove();
    }
}

// Función para mostrar un modal de inicio de sesión
function toggleUser() {
    const userModal = document.getElementById('user-modal');
    if (!userModal) {
        // Crear y mostrar modal de login
        const modalDiv = document.createElement('div');
        modalDiv.id = 'user-modal';
        modalDiv.innerHTML = `
            <div class="modal-content">
                <h2>Iniciar sesión</h2>
                <input type="email" placeholder="Correo electrónico">
                <input type="password" placeholder="Contraseña">
                <button onclick="closeUser()">Cerrar</button>
            </div>
        `;
        document.body.appendChild(modalDiv);
    }
}

// Función para cerrar el modal de usuario
function closeUser() {
    const userModal = document.getElementById('user-modal');
    if (userModal) {
        userModal.remove();
    }
}

// Función para mostrar la bolsa de compras
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (!cartModal) {
        // Crear y mostrar modal de carrito de compras
        const modalDiv = document.createElement('div');
        modalDiv.id = 'cart-modal';
        modalDiv.innerHTML = `
            <div class="modal-content">
                <h2>Mi Carrito</h2>
                <p>No tienes productos en tu carrito.</p>
                <button onclick="closeCart()">Cerrar</button>
            </div>
        `;
        document.body.appendChild(modalDiv);
    }
}

// Función para cerrar el modal del carrito
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.remove();
    }
}

// Asignar eventos a los íconos
document.getElementById('search-icon').addEventListener('click', toggleSearch);
document.getElementById('user-icon').addEventListener('click', toggleUser);
document.getElementById('cart-icon').addEventListener('click', toggleCart);

>>>>>>> 95175e4a6abff4274025dff05bd25349de25e3a0
