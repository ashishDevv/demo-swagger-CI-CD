const fs =  require('fs');
const path = require('path');


const services = [
    'service1',
    'service2',
    'service3',
]

const OUTPUT_DIR = path.join(__dirname, 'gererated-swagger');

if(!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

services.forEach(services => {
    const mainSwaggerPath = path.join(__dirname, 'main-swagger.json');
    const outputPath = path.join(OUTPUT_DIR, `${services}.json`);

    fs.copyFileSync(mainSwaggerPath, outputPath);

    console.log(`Copied ${services} swagger to ${outputPath}`);
})