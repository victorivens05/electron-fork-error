require('./local/mainLocal.js')

// This works fine in both scenarios
// require('./server/mainServer.js')

// This doesn't work from package
require('child_process').fork('app/server/mainServer.js')
