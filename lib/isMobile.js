import * as Parser from "ua-parser-js";
export default function isMobile(req){
    let userAgent;
    if(req){
        userAgent=Parser(req.headers['user-agent']||"")
    }
    else{
        userAgent=new Parser().getResult();
    }
    return userAgent?.device?.type==='mobile'
}




/// bots 

/*

import * as Parser from "ua-parser-js";

export const botList = [
    '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
    'googlebot',
    'baiduspider',
    'gurujibot',
    'yandexbot',
    'slurp',
    'msnbot',
    'bingbot',
    'facebookexternalhit',
    'linkedinbot',
    'twitterbot',
    'slackbot',
    'telegrambot',
    'applebot',
    'pingdom',
    'tumblr',
    'yahobot',
    'duckduckbot'
  ]
export default function isMobile(req){
    let userAgent;
    if(req){
        userAgent=Parser(req.headers['user-agent']||"")
    }
    else{
        userAgent=new Parser().getResult();
    }
   const userAgentString=(userAgent?.ua || '').toLowerCase();
   return botList.some(bot=>userAgentString.includes(bot));
}




*/


/*


import * as Parser from "ua-parser-js";
export default function isMobile(req){
    let userAgent;
    if(req){
        userAgent=Parser(req.headers['user-agent']||"")
    }
    else{
        userAgent=new Parser().getResult();
    }
    return userAgent?.device?.type
}

*/


/*


import * as Parser from "ua-parser-js";
export default function isMobile(req){
    let userAgent;
    if(req){
        userAgent=Parser(req.headers['user-agent']||"")
    }
    else{
        userAgent=new Parser().getResult();
    }
    return userAgent?.device?.type
}

*/