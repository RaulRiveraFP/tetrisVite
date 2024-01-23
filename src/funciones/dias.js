export function dias(dataText, targetElement) {
    const dateParts = dataText.split(/[\/T:]/);
    if (dateParts.length === 6) {
        const year = parseInt(dateParts[2]) + 2000;
        const month = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[0]);
        const hours = parseInt(dateParts[3]);
        const minutes = parseInt(dateParts[4]);
        const seconds = parseInt(dateParts[5]);

        const inputDate = new Date(year, month, day, hours, minutes, seconds);
        const currentDate = new Date();

        const timeDifference = currentDate.getTime() - inputDate.getTime();
        const millisecondsInDay = 1000 * 60 * 60 * 24;
        const daysDifference = Math.floor(timeDifference / millisecondsInDay);

        if (targetElement) {
            targetElement.innerHTML = `Han pasado ${daysDifference} días`;
        }
        
        return daysDifference;
    } else {
        return {
            error: true,
            missatge: "El format no és correcte"
        };
    }
}
