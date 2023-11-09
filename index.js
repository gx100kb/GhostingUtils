
function log(logMessage, color) {
    const now = new Date(); // Certifique-se de criar a data dentro da função.
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const datelog = `${hours}:${minutes}:${seconds}`;

    const formattedLog = `[${datelog}] ${logMessage}`;
    if (color) {
        console.log('%c' + formattedLog, `color: ${color};`);
    } else {
        console.log(formattedLog);
    }
}

log('Utils Loaded', 'green')

module.exports = {
    log
}
