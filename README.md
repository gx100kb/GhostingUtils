# GhostingUtils

A simple utility for logging messages with colors in Node.js.

## Usage Example

To use the `log` function, follow this pattern:

```javascript
const ghosting = require('./GhostingUtils/index.js');

// Log a message in blue
ghosting.log('Message in blue', 'blue');

// Log a message in red
ghosting.log('Message in red', 'red');
```

To use the `error` function, follow this pattern:

```javascript
const ghosting = require('./GhostingUtils/index.js'

//error stopping code
ghosting.error('Message of error', true);

//error continue code
ghosting.error('Message of error', false)
```

To use the `clear` function, follow this pattern:

```javascript
const ghosting = require('./GhostingUtils/index.js'

//Clear terminal
ghosting.clear()
```
