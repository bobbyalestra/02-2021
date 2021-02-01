
//old way

const address = {
    city : '',
    street: '',
    country: ''
}

const street = address.street;
const city = address.city;
const country = address.country;


// new way
const address = {
    city : '',
    street: '',
    country: ''
}



const {street, city, country} = address
