let data = document.querySelectorAll('.input-field');

const celsuis = document.getElementById('celsius');
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
            case 'celsius':
                fahrenheit.value = (value*1.8) +32;
                kelvin.value = value + 273.15;    

                break;
            case 'kelvin':
                celsuis.value = value - 273.15;
                fahrenheit.value = (value - 273.15)*1.8 + 32;
                
                break;
            case 'fahrenheit':
                celsuis.value = (value-32)/1.8;
                kelvin.value = (value-32)/1.8 + 273.15;
                
                break;
            
        }

    })
}
