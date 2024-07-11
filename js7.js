const name = document.querySelector('#name');
const gender = document.querySelector('#gender');
const height = document.querySelector('#height');
const mass = document.querySelector('#mass');
const birth = document.querySelector('#birth_year');





fetch('https://swapi.dev/api/people/9')
    .then(res => res.json())
        .then(data => {
                name.textContent = `name: ${data.name}`;
                gender.textContent = `gender:${data.gender}`;
                height.textContent = `height: ${data.height}`;
                mass.textContent = `mass: ${data.mass}`;
                birth.textContent = `birth: ${data.birth_year}`;
        })




const nameCar = document.querySelector('#nameCar');
const model = document.querySelector('#model');
const length = document.querySelector('#length');
const max_atmosphering_speed = document.querySelector('#max_atmosphering_speed');
const hyperdrive_rating = document.querySelector('#hyperdrive_rating');




fetch('https://swapi.dev/api/starships/12/')
    .then(res => res.json())
    .then(data => {
        nameCar.textContent = `name: ${data.name}`;
        model.textContent = `model: ${data.gender}`;
        length.textContent = `length: ${data.height}`;
        max_atmosphering_speed.textContent = `max_atmosphering_speed: ${data.mass}`;
        hyperdrive_rating.textContent = `hyperdrive_rating: ${data.birth_year}`;
    })

