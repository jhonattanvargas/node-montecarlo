const addon = require('./build/Release/addon')
const addon2 = require('./build/Release/addon')

addon.parallel()
addon2.serial()
