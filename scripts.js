fetch('plugins.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('plugins');
    data.forEach(p => {
      const div = document.createElement('div');
      div.className = 'plugin';
      div.innerHTML = `
        <h2>${p.nombre}</h2>
        <p><strong>Versión:</strong> ${p.version}</p>
        <p>${p.descripcion}</p>
        <a href="${p.archivo}" download>Descargar</a>
      `;
      contenedor.appendChild(div);
    });
  });
