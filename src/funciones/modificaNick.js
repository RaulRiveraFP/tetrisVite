// Fix function name to match the event listener

export  function modificaNick(nick) {
    if (nick !== "") {
        const nickTrim = nick.trim();
        const nickReplace = nickTrim.replaceAll(' ', '_');
        const nickUpper = nickReplace.toUpperCase();
        return nickUpper;
    } else {
        return null;
    }
}
