const inputBuscador =
  document.getElementById("buscador");

const resultados =
  document.getElementById("resultados");

const estadoBusqueda =
  document.getElementById("estadoBusqueda");

const btnLimpiar =
  document.getElementById("limpiar");

const btnManual =
  document.getElementById("btnManual");

const manualModal =
  document.getElementById("manualModal");

const cerrarManual =
  document.getElementById("cerrarManual");

const manualContenido =
  document.getElementById("manualContenido");

const contadorProductos =
  document.getElementById("contadorProductos");

const buscarManual =
  document.getElementById("buscarManual");

// ======================================================
// NORMALIZAR TEXTO
// ======================================================

function normalizarTexto(texto = "") {
  return texto
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .replace(
      /&/g,
      " y "
    )
    .replace(
      /[^a-z0-9ñ\s.]/g,
      " "
    )
    .replace(
      /\s+/g,
      " "
    )
    .trim();
}

// ======================================================
// TEXTO DE BÚSQUEDA DEL PRODUCTO
// ======================================================

function obtenerTextoProducto(
  producto
) {
  const alias =
    producto.alias
      ? producto.alias.join(" ")
      : "";

  return normalizarTexto(
    `${producto.nombre} ${producto.categoria} ${alias}`
  );
}

// ======================================================
// DISTANCIA LEVENSHTEIN
// ======================================================

function distanciaLevenshtein(
  a,
  b
) {
  const filas =
    b.length + 1;

  const columnas =
    a.length + 1;

  const matriz =
    Array.from(
      {
        length: filas
      },
      () =>
        Array(
          columnas
        ).fill(0)
    );

  for (
    let i = 0;
    i < filas;
    i++
  ) {
    matriz[i][0] = i;
  }

  for (
    let j = 0;
    j < columnas;
    j++
  ) {
    matriz[0][j] = j;
  }

  for (
    let i = 1;
    i < filas;
    i++
  ) {
    for (
      let j = 1;
      j < columnas;
      j++
    ) {
      const costo =
        b[i - 1] ===
        a[j - 1]
          ? 0
          : 1;

      matriz[i][j] =
        Math.min(
          matriz[i - 1][j] + 1,
          matriz[i][j - 1] + 1,
          matriz[i - 1][j - 1]
            + costo
        );
    }
  }

  return matriz[
    b.length
  ][
    a.length
  ];
}

// ======================================================
// COMPROBAR PALABRA
// ======================================================

function palabraCoincide(
  palabraBuscada,
  palabrasProducto
) {
  if (!palabraBuscada) {
    return true;
  }

  if (
    palabraBuscada.length <= 2
  ) {
    return palabrasProducto.some(
      palabraProducto =>
        palabraProducto.startsWith(
          palabraBuscada
        )
    );
  }

  const coincidenciaDirecta =
    palabrasProducto.some(
      palabraProducto =>
        palabraProducto.startsWith(
          palabraBuscada
        )
        ||
        palabraProducto.includes(
          palabraBuscada
        )
    );

  if (coincidenciaDirecta) {
    return true;
  }

  return palabrasProducto.some(
    palabraProducto => {
      if (!palabraProducto) {
        return false;
      }

      if (
        palabraProducto[0]
        !==
        palabraBuscada[0]
      ) {
        return false;
      }

      const diferenciaLongitud =
        Math.abs(
          palabraBuscada.length
          -
          palabraProducto.length
        );

      if (
        diferenciaLongitud > 2
      ) {
        return false;
      }

      const distancia =
        distanciaLevenshtein(
          palabraBuscada,
          palabraProducto
        );

      if (
        palabraBuscada.length <= 7
      ) {
        return distancia <= 1;
      }

      return distancia <= 2;
    }
  );
}

// ======================================================
// COINCIDENCIA DEL PRODUCTO
// ======================================================

function productoCoincide(
  producto,
  textoBusqueda
) {
  const textoProducto =
    obtenerTextoProducto(
      producto
    );

  if (!textoBusqueda) {
    return false;
  }

  if (
    textoProducto.includes(
      textoBusqueda
    )
  ) {
    return true;
  }

  const palabrasBusqueda =
    textoBusqueda
      .split(" ")
      .filter(Boolean);

  const palabrasProducto =
    textoProducto
      .split(" ")
      .filter(Boolean);

  return palabrasBusqueda.every(
    palabraBuscada =>
      palabraCoincide(
        palabraBuscada,
        palabrasProducto
      )
  );
}

// ======================================================
// PRIORIDAD
// ======================================================

function calcularPrioridad(
  producto,
  busqueda
) {
  const nombre =
    normalizarTexto(
      producto.nombre
    );

  const categoria =
    normalizarTexto(
      producto.categoria
    );

  const alias =
    normalizarTexto(
      producto.alias
        ? producto.alias.join(" ")
        : ""
    );

  if (
    nombre === busqueda
  ) {
    return 0;
  }

  if (
    nombre.startsWith(
      busqueda
    )
  ) {
    return 1;
  }

  if (
    nombre
      .split(" ")
      .some(
        palabra =>
          palabra.startsWith(
            busqueda
          )
      )
  ) {
    return 2;
  }

  if (
    nombre.includes(
      busqueda
    )
  ) {
    return 3;
  }

  if (
    categoria === busqueda
  ) {
    return 4;
  }

  if (
    categoria.startsWith(
      busqueda
    )
  ) {
    return 5;
  }

  if (
    alias.includes(
      busqueda
    )
  ) {
    return 6;
  }

  return 10;
}

// ======================================================
// FILTRAR
// ======================================================

function filtrarProductos(
  busqueda
) {
  const textoBusqueda =
    normalizarTexto(
      busqueda
    );

  if (!textoBusqueda) {
    return [];
  }

  const coincidencias =
    productos.filter(
      producto =>
        productoCoincide(
          producto,
          textoBusqueda
        )
    );

  coincidencias.sort(
    (a, b) => {
      const prioridadA =
        calcularPrioridad(
          a,
          textoBusqueda
        );

      const prioridadB =
        calcularPrioridad(
          b,
          textoBusqueda
        );

      if (
        prioridadA !==
        prioridadB
      ) {
        return (
          prioridadA
          -
          prioridadB
        );
      }

      return a.nombre.localeCompare(
        b.nombre,
        "es",
        {
          sensitivity:
            "base"
        }
      );
    }
  );

  return coincidencias;
}

// ======================================================
// PRECIO
// ======================================================

function formatearPrecio(
  precio
) {
  if (
    precio === null
    ||
    precio === undefined
    ||
    precio === ""
  ) {
    return `
      <span class="no-price">
        —
      </span>
    `;
  }

  return `$${Number(
    precio
  ).toFixed(2)}`;
}

// ======================================================
// MOSTRAR RESULTADOS
// ======================================================

function mostrarResultados(
  lista,
  textoBusqueda
) {
  resultados.innerHTML = "";

  if (
    !textoBusqueda.trim()
  ) {
    resultados.innerHTML = `
      <tr class="empty-row">
        <td colspan="3">
          Escribe una letra
          para ver resultados.
        </td>
      </tr>
    `;

    estadoBusqueda.textContent =
      "Escribe para comenzar a filtrar.";

    return;
  }

  if (
    lista.length === 0
  ) {
    resultados.innerHTML = `
      <tr class="empty-row">
        <td colspan="3">
          No se encontraron productos.
        </td>
      </tr>
    `;

    estadoBusqueda.textContent =
      `Sin resultados para "${textoBusqueda}".`;

    return;
  }

  lista.forEach(
    producto => {
      const fila =
        document.createElement(
          "tr"
        );

      const tienePrecio =
        producto.precio !== null
        &&
        producto.precio !== undefined
        &&
        producto.precio !== "";

      fila.classList.add(
        "product-row"
      );

      fila.dataset.productId =
        producto.id;

      if (!tienePrecio) {
        fila.classList.add(
          "disabled-product"
        );
      }

      const mensajeAccion =
        tienePrecio
          ? `
            <div class="tap-hint">
              Toca para agregar a la cuenta
            </div>
          `
          : `
            <div
              class="tap-hint sin-precio"
            >
              Precio pendiente
            </div>
          `;

      fila.innerHTML = `
        <td>
          <div class="product-name">
            ${producto.nombre}
          </div>

          ${mensajeAccion}
        </td>

        <td>
          <span
            class="category-badge"
          >
            ${producto.categoria}
          </span>
        </td>

        <td class="price">
          ${formatearPrecio(
            producto.precio
          )}
        </td>
      `;

      resultados.appendChild(
        fila
      );
    }
  );

  const palabraProducto =
    lista.length === 1
      ? "producto"
      : "productos";

  estadoBusqueda.textContent =
    `${lista.length} ${palabraProducto} encontrado${lista.length === 1 ? "" : "s"}.`;
}

// ======================================================
// BUSCADOR EN TIEMPO REAL
// ======================================================

function actualizarBusqueda() {
  const valor =
    inputBuscador.value;

  const lista =
    filtrarProductos(
      valor
    );

  mostrarResultados(
    lista,
    valor
  );
}

inputBuscador.addEventListener(
  "input",
  actualizarBusqueda
);

// ======================================================
// LIMPIAR
// ======================================================

btnLimpiar.addEventListener(
  "click",
  () => {
    inputBuscador.value = "";

    inputBuscador.focus();

    mostrarResultados(
      [],
      ""
    );
  }
);

// ======================================================
// AGRUPAR POR CATEGORÍA
// ======================================================

function agruparPorCategoria(
  lista
) {
  const grupos = {};

  lista.forEach(
    producto => {
      if (
        !grupos[
          producto.categoria
        ]
      ) {
        grupos[
          producto.categoria
        ] = [];
      }

      grupos[
        producto.categoria
      ].push(
        producto
      );
    }
  );

  Object.keys(
    grupos
  ).forEach(
    categoria => {
      grupos[
        categoria
      ].sort(
        (a, b) =>
          a.nombre.localeCompare(
            b.nombre,
            "es",
            {
              sensitivity:
                "base"
            }
          )
      );
    }
  );

  return grupos;
}

// ======================================================
// ACTIVAR CATEGORÍA MANUAL
// ======================================================

function activarBloqueManual(
  bloque
) {
  const boton =
    bloque.querySelector(
      ".manual-category-btn"
    );

  boton.addEventListener(
    "click",
    () => {
      bloque.classList.toggle(
        "open"
      );

      const flecha =
        bloque.querySelector(
          ".manual-arrow"
        );

      flecha.textContent =
        bloque.classList.contains(
          "open"
        )
          ? "▲"
          : "▼";
    }
  );
}

// ======================================================
// CREAR CATEGORÍA
// ======================================================

function crearBloqueCategoria(
  categoria,
  listaProductos
) {
  const bloque =
    document.createElement(
      "div"
    );

  bloque.className =
    "manual-category";

  bloque.innerHTML = `
    <button
      type="button"
      class="manual-category-btn"
    >
      <span>
        ${categoria}

        <small>
          (${listaProductos.length})
        </small>
      </span>

      <span class="manual-arrow">
        ▼
      </span>
    </button>

    <div
      class="manual-category-list"
    >
      ${listaProductos
        .map(
          producto => `
            <div
              class="manual-item"
            >
              <div
                class="manual-item-name"
              >
                ${producto.nombre}
              </div>

              <div
                class="manual-item-meta"
              >
                Precio:

                ${
                  producto.precio === null
                  ||
                  producto.precio === undefined
                    ? "—"
                    : `$${Number(
                        producto.precio
                      ).toFixed(2)}`
                }
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  activarBloqueManual(
    bloque
  );

  return bloque;
}

// ======================================================
// MANUAL
// ======================================================

function renderizarManual(
  lista = productos
) {
  manualContenido.innerHTML =
    "";

  contadorProductos.textContent =
    `${productos.length} productos registrados`;

  if (
    lista.length === 0
  ) {
    manualContenido.innerHTML = `
      <div
        class="manual-empty"
      >
        No se encontraron
        productos en el manual.
      </div>
    `;

    return;
  }

  const grupos =
    agruparPorCategoria(
      lista
    );

  const categorias =
    Object.keys(
      grupos
    ).sort(
      (a, b) =>
        a.localeCompare(
          b,
          "es",
          {
            sensitivity:
              "base"
          }
        )
    );

  categorias.forEach(
    categoria => {
      const bloque =
        crearBloqueCategoria(
          categoria,
          grupos[
            categoria
          ]
        );

      manualContenido.appendChild(
        bloque
      );
    }
  );
}

// ======================================================
// ABRIR MANUAL
// ======================================================

function abrirManual() {
  manualModal.classList.add(
    "active"
  );

  manualModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

  buscarManual.value = "";

  renderizarManual(
    productos
  );

  setTimeout(
    () => {
      buscarManual.focus();
    },
    150
  );
}

// ======================================================
// CERRAR MANUAL
// ======================================================

function cerrarManualModal() {
  manualModal.classList.remove(
    "active"
  );

  manualModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";
}

// ======================================================
// EVENTOS MANUAL
// ======================================================

btnManual.addEventListener(
  "click",
  abrirManual
);

cerrarManual.addEventListener(
  "click",
  cerrarManualModal
);

document
  .querySelector(
    "[data-close-manual]"
  )
  .addEventListener(
    "click",
    cerrarManualModal
  );

// ======================================================
// ESC
// ======================================================

document.addEventListener(
  "keydown",
  evento => {
    if (
      evento.key === "Escape"
      &&
      manualModal.classList.contains(
        "active"
      )
    ) {
      cerrarManualModal();
    }
  }
);

// ======================================================
// BUSCADOR DEL MANUAL
// ======================================================

buscarManual.addEventListener(
  "input",
  () => {
    const busqueda =
      normalizarTexto(
        buscarManual.value
      );

    if (!busqueda) {
      renderizarManual(
        productos
      );

      return;
    }

    const lista =
      filtrarProductos(
        busqueda
      );

    renderizarManual(
      lista
    );

    document
      .querySelectorAll(
        ".manual-category"
      )
      .forEach(
        categoria => {
          categoria.classList.add(
            "open"
          );

          const flecha =
            categoria.querySelector(
              ".manual-arrow"
            );

          if (flecha) {
            flecha.textContent =
              "▲";
          }
        }
      );
  }
);

// ======================================================
// PRODUCTOS NUEVOS
// ======================================================

const productosNuevos = [
  {"id":342,"nombre":"Paleta Bolonia Scape","precio":30,"categoria":"Bolonia","alias":["bolonia","paleta","paletas","scape","nieve","nieves","helado","helados"]},
  {"id":343,"nombre":"Papas Chips","precio":22,"categoria":"Botanas","alias":["chips","papas chips","papas","papitas","botana","botanas","fritura"]},
  {"id":344,"nombre":"Papas Takis","precio":22,"categoria":"Botanas","alias":["takis","papas takis","papas","papitas","botana","botanas","fritura"]},
  {"id":345,"nombre":"Papas Runners","precio":17,"categoria":"Botanas","alias":["runners","papas runners","papas","papitas","botana","botanas","fritura"]},
  {"id":346,"nombre":"Papas Big Max","precio":20,"categoria":"Botanas","alias":["big max","bigmax","papas big max","papas","papitas","botana","botanas","fritura"]},
  {"id":347,"nombre":"Doritos Dinamita","precio":23,"categoria":"Botanas","alias":["doritos","dinamita","doritos dinamita","papas","papitas","botana","botanas","fritura"]},
  {"id":348,"nombre":"Chips grandes","precio":60,"categoria":"Botanas","alias":["chips","chips grandes","grandes","papas","papitas","botana","botanas","fritura"]},
  {"id":349,"nombre":"Pepsi 1.5 L","precio":27,"categoria":"Refrescos","alias":["pepsi","1.5","1.5l","1.5 l","1 5 litros","litro y medio","refresco","refrescos"]},
  {"id":350,"nombre":"Caballito 600 ml","precio":22,"categoria":"Refrescos","alias":["caballito","caballitos","600","600 ml","refresco","refrescos"]},
  {"id":351,"nombre":"Mirinda 600 ml","precio":22,"categoria":"Refrescos","alias":["mirinda","600","600 ml","refresco","refrescos","naranja"]},
  {"id":352,"nombre":"Jarritos 600 ml","precio":20,"categoria":"Refrescos","alias":["jarritos","jarrito","600","600 ml","refresco","refrescos"]},
  {"id":353,"nombre":"Jarritos 1.5 L","precio":25,"categoria":"Refrescos","alias":["jarritos","jarrito","1.5","1.5l","1.5 l","1 5 litros","litro y medio","refresco","refrescos"]},
  {"id":354,"nombre":"Cabritos","precio":28,"categoria":"Refrescos","alias":["cabritos","cabrito","refresco","refrescos"]},
  {"id":355,"nombre":"Agua Bonafont de sabor 1 L","precio":24,"categoria":"Aguas","alias":["bonafont","agua bonafont","agua de sabor","agua sabor","sabor","sabores","1l","1 l","1 litro","agua","aguas"]},
  {"id":356,"nombre":"Fanta 600 ml","precio":23,"categoria":"Refrescos","alias":["fanta","600","600 ml","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":357,"nombre":"Sprite 600 ml","precio":23,"categoria":"Refrescos","alias":["sprite","600","600 ml","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":358,"nombre":"Mundet 600 ml","precio":23,"categoria":"Refrescos","alias":["mundet","sidral mundet","sidral","600","600 ml","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":359,"nombre":"Delaware Punch 600 ml","precio":23,"categoria":"Refrescos","alias":["delaware","delaware punch","delawer","del awer","del aware","600","600 ml","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":360,"nombre":"Fresca 600 ml","precio":23,"categoria":"Refrescos","alias":["fresca","600","600 ml","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":361,"nombre":"Fanta chica","precio":13,"categoria":"Refrescos","alias":["fanta","chica","chico","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":362,"nombre":"Sprite chica","precio":13,"categoria":"Refrescos","alias":["sprite","chica","chico","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":363,"nombre":"Delaware Punch chica","precio":13,"categoria":"Refrescos","alias":["delaware","delaware punch","delawer","del awer","del aware","chica","chico","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":364,"nombre":"Manzanita chica","precio":13,"categoria":"Refrescos","alias":["manzanita","manzana","sidral","chica","chico","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":365,"nombre":"Fresca chica","precio":13,"categoria":"Refrescos","alias":["fresca","chica","chico","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":366,"nombre":"Fanta 1.5 L","precio":27,"categoria":"Refrescos","alias":["fanta","1.5","1.5l","1.5 l","1 5 litros","litro y medio","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":367,"nombre":"Sprite 1.5 L","precio":27,"categoria":"Refrescos","alias":["sprite","1.5","1.5l","1.5 l","1 5 litros","litro y medio","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":368,"nombre":"Delaware Punch 1.5 L","precio":27,"categoria":"Refrescos","alias":["delaware","delaware punch","delawer","del awer","del aware","1.5","1.5l","1.5 l","1 5 litros","litro y medio","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":369,"nombre":"Manzanita 1.5 L","precio":27,"categoria":"Refrescos","alias":["manzanita","manzana","sidral","1.5","1.5l","1.5 l","1 5 litros","litro y medio","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":370,"nombre":"Fresca 1.5 L","precio":27,"categoria":"Refrescos","alias":["fresca","1.5","1.5l","1.5 l","1 5 litros","litro y medio","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":371,"nombre":"Squirt 1.5 L","precio":27,"categoria":"Refrescos","alias":["squirt","1.5","1.5l","1.5 l","1 5 litros","litro y medio","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":372,"nombre":"Chicle Clorets 4 pastillas","precio":4,"categoria":"Chicles","alias":["clorets","cloret","chicle","chicles","4 pastillas","dulce","dulces"]},
  {"id":373,"nombre":"Cacahuates Golden Nuts","precio":18,"categoria":"Botanas","alias":["golden nuts","goldennuts","golden","nuts","cacahuate","cacahuates","botana","botanas"]},
  {"id":374,"nombre":"Cacahuates Kiyatis","precio":18,"categoria":"Botanas","alias":["kiyatis","kiyati","cacahuate","cacahuates","botana","botanas"]},
  {"id":375,"nombre":"Chicle Canels 4 pastillas","precio":3,"categoria":"Chicles","alias":["canels","canel","canel's","chicle","chicles","4 pastillas","dulce","dulces"]},
  {"id":376,"nombre":"Red Cola 1.5 L","precio":27,"categoria":"Refrescos","alias":["red cola","redcola","1.5","1.5l","1.5 l","1 5 litros","litro y medio","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":377,"nombre":"Sprite 1.75 L","precio":48,"categoria":"Refrescos","alias":["sprite","1.75","1.75l","1.75 l","1 75 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":378,"nombre":"Mundet 1.75 L","precio":48,"categoria":"Refrescos","alias":["mundet","sidral mundet","sidral","1.75","1.75l","1.75 l","1 75 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":379,"nombre":"Fresca 1.75 L","precio":48,"categoria":"Refrescos","alias":["fresca","1.75","1.75l","1.75 l","1 75 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":380,"nombre":"Delaware Punch 1.75 L","precio":48,"categoria":"Refrescos","alias":["delaware","delaware punch","del awer","delawer","del aware","1.75","1.75l","1.75 l","1 75 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":381,"nombre":"Fanta 1.75 L","precio":48,"categoria":"Refrescos","alias":["fanta","1.75","1.75l","1.75 l","1 75 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":382,"nombre":"Sprite 2.5 L","precio":55,"categoria":"Refrescos","alias":["sprite","2.5","2.5l","2.5 l","2 5 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":383,"nombre":"Mundet 2.5 L","precio":55,"categoria":"Refrescos","alias":["mundet","sidral mundet","sidral","2.5","2.5l","2.5 l","2 5 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":384,"nombre":"Fresca 2.5 L","precio":55,"categoria":"Refrescos","alias":["fresca","2.5","2.5l","2.5 l","2 5 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":385,"nombre":"Delaware Punch 2.5 L","precio":55,"categoria":"Refrescos","alias":["delaware","delaware punch","del awer","delawer","del aware","2.5","2.5l","2.5 l","2 5 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":386,"nombre":"Fanta 2.5 L","precio":55,"categoria":"Refrescos","alias":["fanta","2.5","2.5l","2.5 l","2 5 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":387,"nombre":"Sprite 3 L","precio":62,"categoria":"Refrescos","alias":["sprite","3","3l","3 l","3 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":388,"nombre":"Mundet 3 L","precio":62,"categoria":"Refrescos","alias":["mundet","sidral mundet","sidral","3","3l","3 l","3 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":389,"nombre":"Fresca 3 L","precio":62,"categoria":"Refrescos","alias":["fresca","3","3l","3 l","3 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":390,"nombre":"Delaware Punch 3 L","precio":62,"categoria":"Refrescos","alias":["delaware","delaware punch","del awer","delawer","del aware","3","3l","3 l","3 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]},
  {"id":391,"nombre":"Fanta 3 L","precio":62,"categoria":"Refrescos","alias":["fanta","3","3l","3 l","3 litros","refresco","refrescos","sabor","sabores","refresco de sabor","refresco de sabores","refrescos de sabor","refrescos de sabores"]}
];

productosNuevos.forEach(
  productoNuevo => {
    const yaExiste =
      productos.some(
        producto =>
          producto.id ===
          productoNuevo.id
      );

    if (!yaExiste) {
      productos.push(
        productoNuevo
      );
    }
  }
);

// ======================================================
// INICIAL
// ======================================================

contadorProductos.textContent =
  `${productos.length} productos registrados`;

mostrarResultados(
  [],
  ""
);