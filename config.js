const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'VISPER-MD&fpJF2LpS#XTDa_840ICg6m1X7mnZ4_NPiHyGk8Jghng1lM4Rmvt4' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? 'tyJCTwtWZYx25WplLEeRFdhPs5yMdA0aWpBL' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'adithya12381' : process.env.SESSION_NAME, 

};

