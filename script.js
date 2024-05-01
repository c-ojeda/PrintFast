<script>
    // Función para obtener parámetros de la URL
    function obtenerParametro(nombre) {
        nombre = nombre.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + nombre + '=([^&#]*)');
        var resultados = regex.exec(location.search);
        return resultados === null ? '' : decodeURIComponent(resultados[1].replace(/\+/g, ' '));
    }

    // Obtener los parámetros de la URL
    var comanda = obtenerParametro('ID Venta');
    var fecha = obtenerParametro('fecha_hora');
    var resumen = obtenerParametro('PRINT_PRODUCTOS');

    // Convertir la cadena resumen en un array separado por saltos de línea
    var lineasResumen = resumen.split('\n');

    // Escribir la información en el documento HTML
    window.onload = function() {
        document.getElementById('ID Venta').innerHTML = comanda;
        document.getElementById('fecha_hora').innerHTML = fecha;
        // Mostrar cada línea del resumen en un párrafo separado
        lineasResumen.forEach(function(linea) {
            var parrafo = document.createElement('p');
            parrafo.innerHTML = linea;
            document.getElementById('PRINT_PRODUCTOS').appendChild(parrafo);
        });
    };
</script>
