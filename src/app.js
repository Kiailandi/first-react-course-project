console.log("app.js is running");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a superior AI!"
}

//JSX
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>This is an item</li>
            <li>This is another item</li>
        </ol>
    </div>
);

var user = {
    name: "Tommaso Montefusco",
    age: 23,
    location: "Rovereto"
};

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);