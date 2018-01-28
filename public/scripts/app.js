"use strict";

console.log("app.js is running");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a superior AI!"

    //JSX
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "This is an item"
        ),
        React.createElement(
            "li",
            null,
            "This is another item"
        )
    )
);

var user = {
    name: "Tommaso Montefusco",
    age: 23,
    location: "Rovereto"
};

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
