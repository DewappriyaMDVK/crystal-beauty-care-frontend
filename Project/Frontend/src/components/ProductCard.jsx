export default function ProductCard(props){
    return(

        <div>
        <h1>Products Name: {props.name}</h1>
        <p>Product Details:{props.Description}</p>
        <p>Product Price:{props.price}</p>
        <button>Add to cart</button>
        </div>
        
    )
}