// const person = {
//     name: 'Sikharin',
//     age: 33,
//     location: {
//         city: 'Phuket',
//         temp: 32
//     }
// };

// const { name: firstname = 'Anonymous', age } = person;

// const {city, temp: temperature} = person.location;

// console.log(`${firstname} is ${age}`);
// if(city && temperature)
// console.log(`It's ${temperature} in ${city}.`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName)


//
// Array destrcturing
//

// const address = ['142/41 Moo.7', 'Kathu', 'Phuket', '83120' ];

// const [ , district, city = 'Phang-nga'] = address;

// console.log(`You are in ${district} ${city}.`);


const item = ['Coffee (iced)', '$3', '$3.50', '$3.75'];

const [ itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
