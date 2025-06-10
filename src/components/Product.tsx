import { ProductType } from "@/types/ProductType"
import BuyButton from "@/components/BuyButton"

type ProductProps = {
    product: ProductType
}
export default function Product({ product}: ProductProps) {
    return (
        <div className="flex flex-col gap-[10px]">
            <img src={product.image} className="aspect-square object-contain"/>
            <div className="flex flex-col justify-start">
                <div className="text-[16px]">{product.title}</div>
                <div className="text-[24px]">R$ {product.price}</div>
                <div className="text-[16px] text-[var(--text-freight)]">{product.freight}</div>
            </div>
            <BuyButton/>
        </div>
    )
}
