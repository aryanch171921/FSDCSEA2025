const parent  = document.getElementById("parent");
const root = ReactDOM.createRoot(parent); 
const heading = React.createElement("h1", {style:{color:"red", backgroundColor:"pink"}}, "Hello World from React");
const h21 = <div style={{border:"2px solid black", padding:"10px", margin:"10px",width:"400px"}}>
     <img src="https://5.imimg.com/data5/ECOM/Default/2023/2/KU/AT/OQ/142053378/tiger-face-golden-mobile-plates.jpg" style={{width:"300px"}}/>
     <h2 style={{color:"blue", backgroundColor:"pink"}}>Model No : Baableee pro tax</h2>
     <h2 style={{color:"blue", backgroundColor:"green"}}>Price :  20000000000000crorebillion </h2>
     <h2 style={{color:"blue", backgroundColor:"red"}}>Description : This is My Favourate Phone </h2>
     <button> Add To Cart</button>

</div>
root.render(heading);
root.render(h21);