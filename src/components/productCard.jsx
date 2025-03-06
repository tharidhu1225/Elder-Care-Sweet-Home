import { Link } from "react-router-dom"

export default function ProductCard(props){

    return(
        <Link to={`/productInfo/${props.product.productId}`}>
            <div className="w-[300px] h-[400px] m-[40px] rounded-xl shadow-lg shadow-blue-900 hover:shadow-[#f3f9fa] hover:border-[3px] hover:border-[#032c70] overflow-hidden flex flex-col">
                <img src={props.product.Images[0]} className="h-[60%] w-full object-cover"/>
                <div className="max-h-[35%] h-[35%] p-3 flex flex-col justify-between">
                <h1 className="text-xl font-bold text-center">{props.product.postName}</h1>
                
                </div>
                
            </div>
        </Link>
    )
}