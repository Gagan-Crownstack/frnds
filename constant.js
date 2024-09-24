const https = require('https');

const apiUrl= "https://pokeapi.co/api/v2/pokemon/ditto"

https.get(apiUrl,(res)=>{
    
    let rawData = '';

        res.on('data', (chunk) => {
          rawData += chunk;
        });


        res.on('end', () => {
            try {
              const data = JSON.parse(rawData);
              console.log(data);
            } catch (e) {
              reject(e.message);
            }
        })


            
})
