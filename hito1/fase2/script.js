fetch('https://www.el-tiempo.net/api/json/v2/provincias')
  .then(response => response.json())
  .then(data => {
    const provinciasDiv = document.getElementById('provincias');
    data.provincias.forEach(provincia => {
      const provinciaDiv = document.createElement('div');
      provinciaDiv.className = 'provincia';
      const nombreDiv = document.createElement('div');
      nombreDiv.className = 'nombre';
      nombreDiv.textContent = provincia.NOMBRE_PROVINCIA;
      provinciaDiv.appendChild(nombreDiv);
      const descripcionDiv = document.createElement('div');
      descripcionDiv.className = 'descripcion';
      descripcionDiv.textContent = `Código Provincia: ${provincia.CODPROV}, 
                                    Nombre: ${provincia.NOMBRE_PROVINCIA}, 
                                    Comunidad Autónoma: ${provincia.COMUNIDAD_CIUDAD_AUTONOMA}, 
                                    Capital: ${provincia.CAPITAL_PROVINCIA}`;
      provinciaDiv.appendChild(descripcionDiv);
      provinciaDiv.addEventListener('click', () => {
        descripcionDiv.style.display = descripcionDiv.style.display === 'none' ? 'block' : 'none';
      });
      provinciasDiv.appendChild(provinciaDiv);
    });
  })
  .catch(error => console.error('Error:', error));

