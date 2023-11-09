function log(logMessage, color) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedLog = `[${hours}:${minutes}:${seconds}] ${logMessage}`;
    if (color) {
        console.log('%c' + formattedLog, `color: ${color};`);
    } else {
        console.log(formattedLog);
    }
}

log('Utils Loaded', 'green')

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        log
    };
}

if (typeof window !== 'undefined') {
    window.log = log;
}

