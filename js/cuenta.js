const btnCuenta =
  document.getElementById("btnCuenta");

const cuentaModal =
  document.getElementById("cuentaModal");

const cerrarCuenta =
  document.getElementById("cerrarCuenta");

const cuentaContenido =
  document.getElementById("cuentaContenido");

const contadorCuenta =
  document.getElementById("contadorCuenta");

const totalCuenta =
  document.getElementById("totalCuenta");

const montoAgregacion =
  document.getElementById("montoAgregacion");

const btnAgregarMonto =
  document.getElementById("btnAgregarMonto");

const btnVaciarCuenta =
  document.getElementById("btnVaciarCuenta");


// ======================================================
// DATOS DE LA CUENTA
// ======================================================

let cuenta = [];

let agregaciones = [];


// ======================================================
// FORMATEAR DINERO
// ======================================================

function dinero(valor) {
  return `$${Number(valor).toFixed(2)}`;
}


// ======================================================
// AGREGAR PRODUCTO
// ======================================================

function agregarProductoCuenta(producto) {

  // No podemos sumar productos
  // que todavía no tienen precio.
  if (
    producto.precio === null ||
    producto.precio === undefined ||
    producto.precio === ""
  ) {
    return;
  }


  const existente =
    cuenta.find(
      item =>
        item.id === producto.id
    );


  // Si ya existe, aumentamos cantidad.
  if (existente) {

    existente.cantidad++;

  } else {

    cuenta.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: Number(producto.precio),
      cantidad: 1
    });

  }


  actualizarCuenta();
}


// ======================================================
// ELIMINAR UNA UNIDAD
// ======================================================

function restarProducto(id) {

  const producto =
    cuenta.find(
      item => item.id === id
    );


  if (!producto) {
    return;
  }


  producto.cantidad--;


  if (producto.cantidad <= 0) {

    cuenta =
      cuenta.filter(
        item => item.id !== id
      );

  }


  actualizarCuenta();
}


// ======================================================
// AUMENTAR DESDE LA CUENTA
// ======================================================

function aumentarProducto(id) {

  const producto =
    cuenta.find(
      item => item.id === id
    );


  if (!producto) {
    return;
  }


  producto.cantidad++;

  actualizarCuenta();
}


// ======================================================
// ELIMINAR PRODUCTO COMPLETO
// ======================================================

function eliminarProducto(id) {

  cuenta =
    cuenta.filter(
      item => item.id !== id
    );


  actualizarCuenta();
}


// ======================================================
// AGREGACIÓN MANUAL
// ======================================================

function agregarMontoManual() {

  const valor =
    Number(montoAgregacion.value);


  if (
    !valor ||
    valor <= 0
  ) {
    return;
  }


  agregaciones.push({
    id: Date.now(),
    monto: valor
  });


  montoAgregacion.value = "";

  actualizarCuenta();
}


// ======================================================
// ELIMINAR AGREGACIÓN
// ======================================================

function eliminarAgregacion(id) {

  agregaciones =
    agregaciones.filter(
      item =>
        item.id !== id
    );


  actualizarCuenta();
}


// ======================================================
// CALCULAR TOTAL
// ======================================================

function calcularTotal() {

  const subtotalProductos =
    cuenta.reduce(
      (total, producto) => {

        return (
          total +
          producto.precio *
          producto.cantidad
        );

      },
      0
    );


  const subtotalAgregaciones =
    agregaciones.reduce(
      (total, item) =>
        total + item.monto,
      0
    );


  return (
    subtotalProductos +
    subtotalAgregaciones
  );
}


// ======================================================
// CONTADOR DEL ICONO
// Solo cuenta productos seleccionados.
// ======================================================

function cantidadProductosCuenta() {

  return cuenta.reduce(
    (total, producto) =>
      total + producto.cantidad,
    0
  );
}


// ======================================================
// ACTUALIZAR BADGE
// ======================================================

function actualizarContador() {

  const cantidad =
    cantidadProductosCuenta();


  contadorCuenta.textContent =
    cantidad;


  if (cantidad === 0) {

    contadorCuenta.classList.add(
      "oculto"
    );

  } else {

    contadorCuenta.classList.remove(
      "oculto"
    );

  }
}


// ======================================================
// RENDERIZAR CUENTA
// ======================================================

function actualizarCuenta() {

  cuentaContenido.innerHTML = "";


  if (
    cuenta.length === 0 &&
    agregaciones.length === 0
  ) {

    cuentaContenido.innerHTML = `
      <div class="cuenta-vacia">

        <span class="cuenta-vacia-icon">
          🧾
        </span>

        <p>
          La cuenta está vacía.
        </p>

        <small>
          Toca un producto de los resultados
          para agregarlo.
        </small>

      </div>
    `;

  } else {

    // ====================================
    // PRODUCTOS
    // ====================================

    cuenta.forEach(
      producto => {

        const subtotal =
          producto.precio *
          producto.cantidad;


        const item =
          document.createElement("div");


        item.className =
          "cuenta-item";


        item.innerHTML = `

          <div class="cuenta-item-info">

            <strong>
              ${producto.nombre}
            </strong>

            <span>
              ${dinero(producto.precio)}
              c/u
            </span>

          </div>


          <div class="cuenta-item-controles">

            <button
              type="button"
              class="cantidad-btn"
              data-restar="${producto.id}"
            >
              −
            </button>


            <span class="cantidad-numero">
              ${producto.cantidad}
            </span>


            <button
              type="button"
              class="cantidad-btn"
              data-sumar="${producto.id}"
            >
              +
            </button>

          </div>


          <strong class="cuenta-subtotal">
            ${dinero(subtotal)}
          </strong>


          <button
            type="button"
            class="eliminar-item-btn"
            data-eliminar="${producto.id}"
            aria-label="Eliminar producto"
          >
            ×
          </button>

        `;


        cuentaContenido.appendChild(
          item
        );

      }
    );


    // ====================================
    // AGREGACIONES MANUALES
    // ====================================

    agregaciones.forEach(
      item => {

        const fila =
          document.createElement("div");


        fila.className =
          "cuenta-item agregacion-item";


        fila.innerHTML = `

          <div class="cuenta-item-info">

            <strong>
              Agregación
            </strong>

            <span>
              Precio manual
            </span>

          </div>


          <strong class="cuenta-subtotal">
            ${dinero(item.monto)}
          </strong>


          <button
            type="button"
            class="eliminar-item-btn"
            data-eliminar-agregacion="${item.id}"
            aria-label="Eliminar agregación"
          >
            ×
          </button>

        `;


        cuentaContenido.appendChild(
          fila
        );

      }
    );

  }


  totalCuenta.textContent =
    dinero(
      calcularTotal()
    );


  actualizarContador();
}


// ======================================================
// CLICK EN RESULTADO DEL BUSCADOR
// ======================================================

resultados.addEventListener(
  "click",
  evento => {

    const fila =
      evento.target.closest(
        ".product-row"
      );


    if (!fila) {
      return;
    }


    const id =
      Number(
        fila.dataset.productId
      );


    const producto =
      productos.find(
        item => item.id === id
      );


    if (!producto) {
      return;
    }


    agregarProductoCuenta(
      producto
    );


    // Efecto visual rápido
    fila.classList.add(
      "producto-agregado"
    );


    setTimeout(
      () => {
        fila.classList.remove(
          "producto-agregado"
        );
      },
      300
    );
  }
);


// ======================================================
// CONTROLES DE LA CUENTA
// ======================================================

cuentaContenido.addEventListener(
  "click",
  evento => {

    const botonRestar =
      evento.target.closest(
        "[data-restar]"
      );


    if (botonRestar) {

      restarProducto(
        Number(
          botonRestar.dataset.restar
        )
      );

      return;
    }


    const botonSumar =
      evento.target.closest(
        "[data-sumar]"
      );


    if (botonSumar) {

      aumentarProducto(
        Number(
          botonSumar.dataset.sumar
        )
      );

      return;
    }


    const botonEliminar =
      evento.target.closest(
        "[data-eliminar]"
      );


    if (botonEliminar) {

      eliminarProducto(
        Number(
          botonEliminar.dataset.eliminar
        )
      );

      return;
    }


    const eliminarManual =
      evento.target.closest(
        "[data-eliminar-agregacion]"
      );


    if (eliminarManual) {

      eliminarAgregacion(
        Number(
          eliminarManual.dataset
            .eliminarAgregacion
        )
      );

    }

  }
);


// ======================================================
// AGREGAR MONTO
// ======================================================

btnAgregarMonto.addEventListener(
  "click",
  agregarMontoManual
);


montoAgregacion.addEventListener(
  "keydown",
  evento => {

    if (evento.key === "Enter") {
      agregarMontoManual();
    }

  }
);


// ======================================================
// ABRIR CUENTA
// ======================================================

function abrirCuenta() {

  cuentaModal.classList.add(
    "active"
  );


  cuentaModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";


  actualizarCuenta();

}


// ======================================================
// CERRAR CUENTA
// ======================================================

function cerrarCuentaModal() {

  cuentaModal.classList.remove(
    "active"
  );


  cuentaModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}


// ======================================================
// VACIAR CUENTA
// ======================================================

function vaciarCuenta() {

  cuenta = [];

  agregaciones = [];

  montoAgregacion.value = "";

  actualizarCuenta();

}


// ======================================================
// EVENTOS
// ======================================================

btnCuenta.addEventListener(
  "click",
  abrirCuenta
);


cerrarCuenta.addEventListener(
  "click",
  cerrarCuentaModal
);


document
  .querySelector(
    "[data-close-cuenta]"
  )
  .addEventListener(
    "click",
    cerrarCuentaModal
  );


btnVaciarCuenta.addEventListener(
  "click",
  vaciarCuenta
);


// ======================================================
// ESC
// ======================================================

document.addEventListener(
  "keydown",
  evento => {

    if (
      evento.key === "Escape" &&
      cuentaModal.classList.contains(
        "active"
      )
    ) {
      cerrarCuentaModal();
    }

  }
);


// ======================================================
// INICIAL
// ======================================================

actualizarCuenta();