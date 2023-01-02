
const heading = React.createElement("h1", {id: "title"}, "This is heading element.");
const heading2 = React.createElement("h2", {id: "title", hello: "Hellow"}, "This is a heading 2 element");

const container = React.createElement("div", {id: "container"}, [heading, heading2]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

