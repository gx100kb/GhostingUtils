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

function error(message, stop) {
    const stack = new Error().stack;
    const lineNumber = stack.split('\n')[2].match(/:(\d+):\d+\)$/)[1];
    if (stop === undefined) { stop = true }
    if (typeof stop !== 'boolean') {
        throw new Error(`Error: Invalid argument for "stop" parameter. It should be a boolean.`);
    }
    
    if (stop) {
        throw new Error(`Error: An error occurred on line ${lineNumber}. ${message}`);
    }
    
    log(`Error: An error occurred on line ${lineNumber}. ${message}`, 'red');
}

function clear() {
    for (let i = 0; i < 50; i++) {
        console.log('\n');
    }
}

log('Utils Loaded', 'green')

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        log,
        error,
        clear
    };
}

if (typeof window !== 'undefined') {
    window.log = log;
    window.error = error;
    window.clear = clear;
}
