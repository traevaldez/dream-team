const fs = require('fs');

const createFile = (fileContent) => {
    fs.createFile('./dist/index.html', fileContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Your team profile has been generated!');
        }
    });
};