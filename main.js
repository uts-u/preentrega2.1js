const discosDeseados = [];
const agregarRecomendacion = () => {
  const nombre = prompt("¿Qué disco esta buscando?:");
  const tipo = prompt("¿En que formato fué editado? (Ingrese CD, Vinilo o Cassette)");

  if (!["cd", "vinilo", "cassette"].includes(tipo.toLowerCase())) {
    alert("introduzca un formato válido");
    return;
  }  
  const recomendacion = { nombre, tipo };
  discosDeseados.push(recomendacion);
  alert(`El disco "${nombre}" editado en formato ${tipo} ha sido agregada a la lista de deseos.`);
};
const mostrarDiscosDeseados = () => {
  console.log("Lista de Discos Deseados:");
  const discosOrdenados = discosDeseados.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.table(discosOrdenados);
};

const whileRecomndacion = () => {
  while (true) {
    const deseaAgregar = confirm("¿Desea sumar otro disco a la lista?");
    if (deseaAgregar) {
      agregarRecomendacion();
    } else {
      const deseaVerLista = confirm("¿Desea ver la lista de deseos?");
      if (deseaVerLista) {
        mostrarDiscosDeseados();
      }
      break;
    }
  }
};
whileRecomndacion();