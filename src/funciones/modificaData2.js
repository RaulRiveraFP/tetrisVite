export function modificaData2(objectDate){
    const year =  objectDate.getFullYear() % 100
    const mes = objectDate.getMonth()+1
    const dia = objectDate.getDate()
    let hours = objectDate.getHours();
    if(hours < 10){
        hours = `0${hours}`
    }
    const minutes = objectDate.getMinutes();
    let seconds = objectDate.getSeconds();
    if(seconds < 10){
        seconds = `0${seconds}`
    }
    return `${year}/${mes}/${dia}T${hours}:${minutes}:${seconds}`
}