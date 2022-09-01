import * as UAParser from 'ua-parser-js'

var parser = new UAParser();

function getDeviceType(){
    return parser.getDevice().type
}

export { getDeviceType };