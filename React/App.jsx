const parent = document.getElementById('parent');
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2",{style:{color:"brown"}},"ABES ENGINEERING COLLEGE");
const li1 = React.createElement("li",{},"React");
const li2 = React.createElement("li",{},"Java");
const li3 = React.createElement("li",{},"Python");
const name  = React.createElement("h1",{},"Aryan chaudhary");
const img = React.createElement("img",{src:"https://i.pinimg.com/736x/a0/39/06/a03906a88d90006ab098a89752bcc2b6.jpg",alt:"logo",style:{width:"200px"}});
const ul = React.createElement("ul",{} ,li1,li2,li3 ,img);
const wrapper = React.createElement("div",{} ,h2,ul);
root.render(wrapper);

