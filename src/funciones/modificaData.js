export function modificaData(data) {
    const parts = data.split(/[\/T:]/); // Separar por '/', 'T', y ':'
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);
    let year = parseInt(parts[0], 10);

    // Ajustar el año para fechas con representación de dos dígitos
    if (year < 100) {
        if (year + 2000 > new Date().getFullYear() % 100) {
            year += 2000; // Si el año + 2000 es mayor que el año actual, pertenece al siglo pasado
        } else {
            year += 2000; // De lo contrario, pertenece al siglo actual
        }
    }

    const mesesEscritos = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const monthFormatted = mesesEscritos[month - 1]; // Corregir el formato del mes
    const yearFormatted = year;
    const formattedDate = `${day} ${monthFormatted} ${yearFormatted}`;
    const formattedTime = parts.slice(3).join(':') || ''; // Unir componentes de la hora si están presentes

    return `${formattedDate}${formattedTime ? ' - ' + formattedTime : ''}`;
}
