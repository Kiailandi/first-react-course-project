console.log("app.js is running");

//JSX

//var template = <h1>This is JSX from app.js!</h1>;
var template = React.createElement(
    'h1',
    null,
    'This is JSX from app.js!'
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);