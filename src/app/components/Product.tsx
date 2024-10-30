import { ProductType } from "@/types/ProductType"
import Image from "next/image"

type Props = {
    product: ProductType
}

const Product = ({ product }: Props) => {
    return (
        <div className="flex flex-col shadow-lg h-96 bg-slate-800 overflow-hidden p-5 text-gray-300">
            <div className="relative max-h-72 flex-1">
                {/* <Image alt={product.title} src={product.image} width={100} height={100}/> */}
            </div>
            <div className="flex justify-between font-bold my-3">
                {product.title}
            </div>
            <button className="rounded-md bg-teal-600 text-white 
            px-3.5 py-2.5 text-sm text-center">
                Adicionar ao Carrinho
            </button>
        </div>
    )
}

export default Product