let data = document.querySelectorAll('.input-field');

const celcuis = document.getElementById('celcius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

let c;
let k=273.15 + c;
let f = (9/5)*c +32;

for(let i=0; i<data.length;i++)
{
    let input = data[i];

    input.addEventListener('input', function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.id) {
            case 'celcius':
                fahrenheit.value = (value*1.8) +32;
                kelvin.value = value + 273.15;    

                break;
            case 'kelvin':
                celcuis.value = value - 273.15;
                fahrenheit.value = (value - 273.15)*1.8 + 32;
                
                break;
            case 'fahrenheit':
                celcuis.value = (value-32)/1.8;
                kelvin.value = (value-32)/1.8 + 273.15;
                
                break;
            
        }

    })
}