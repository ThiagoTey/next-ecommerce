'use client'

import Image from "next/image";

import { ProductType } from "@/types/ProductType"

type Props = {
    product: ProductType;
    fill?: boolean; 
}

const ProductImage = ({product, fill}: Props) => {
  return  fill ?(
    <Image src={product.image} fill alt={product.title} />
  ) : (
    <Image src={product.image}/>
  )
}

export default ProductImage