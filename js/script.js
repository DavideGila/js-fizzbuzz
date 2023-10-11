// > Scrivi un programma che stampi in console i numeri da 1 a 100,
// > ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// > Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const wrapper = document.getElementById('numberWrapper');

for(let i = 1; i <= 100; i++){

    let box = document.createElement('div');
    wrapper.append(box);
    wrapper.classList.add('d-flex', 'flex-wrap');
    box.classList.add('border', 'box', 'd-flex', 'justify-content-center', 'align-items-center', 'm-1', 'bg-success')
    box.innerHTML = i

    if(i % 3 === 0 && i % 5 === 0){ 
        const fizzBuzz = 'FizzBuzz';
        console.log(fizzBuzz);
        box.innerHTML = fizzBuzz;
        box.classList.add('bg-danger')
    } else if(i % 3 === 0){ 
        const fizz = 'Fizz';
        console.log(fizz);
        box.innerHTML = fizz;
        box.classList.add('bg-warning')
    } else if(i % 5 === 0){ 
        const buzz = 'Buzz';
        console.log(buzz);
        box.innerHTML = buzz;
        box.classList.add('bg-info')
    } else {
        console.log(i);
    }
} 