
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

// can add an alias using street: st
const address = {
    city : '',
    street: '',
    country: ''
}



const {street: st} = address
