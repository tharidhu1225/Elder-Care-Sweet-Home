import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ImageSlider from "../../components/imgeSlider";



export default function ProductOverview(){

   const params = useParams();
   const productId = params.id;
   const [product, setProduct] = useState(null)
   const [status, setStatus] = useState("loading")
  
   
   useEffect(
     ()=>{
      axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productId).then((res)=>{
        console.log(res.data)

        if(res.data == null){
            setStatus("not-found")
        }

        if(res.data != null){
            setProduct(res.data)
             setStatus("found")
        }
     })
    }
    ,[])


    return(
        <div className="w-full h-[calc(100vh-100px)]">
            {
                status == "loading"&&(
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-2 border-blue-500 border-b-blue-900 border-b-4">

                        </div>
                    </div>
                )
            }
            {
                status == "not-found"&&(
                   <h1>404 Not Found</h1>
                )
            }
            {
                status == "found"&&(
                    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
                       <div className="w-[100%] lg:w-[35%] h-full">
                       <h1 className="flex text-3xl font-bold text-gray-800 lg:hidden">{product.postName}</h1>
                       <div className="w-[100%] lg:w-[80%] lg:h-full">
                       <ImageSlider Images={product.Images} />
                       </div>
                       </div>
                       <div className="w-[65%] h-full p-4">
                        <h1 className="text-3xl font-bold text-gray-800 hidden lg:block">{product.postName}</h1>
                        <p className="flex text-lg text-gray-600 line-clamp-3">{product.description}</p>
                       </div>

                    </div>
                )
            }
        </div>
    )
}

