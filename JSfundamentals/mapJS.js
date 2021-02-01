
// one way
const colors = ['red', 'blue', 'green' ];
colors.map(function(color){
    return '<li>' + color + '</li>';

})

// second way arrown function no return or parameters
const items = colors.map(color => '<li>' + color + '</li>');

// with template literals
const items = colors.map(color => `<li>${color} </li>`);