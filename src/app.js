console.log("app.js is running");

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a superior AI!",
    options: ["One", "Two"]
}

//JSX
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options: " : "No options"}</p>
        <ol>
            <li>This is an item</li>
            <li>This is another item</li>
        </ol>
    </div>
);

const user = {
    name: "Tommaso Montefusco",
    age: 23,
    location: "Rovereto"
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
};

const template2 = (
    <div>
        <h1>{user.name ? user.name : "John Doe"}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);