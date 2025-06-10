import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Product from "@/components/Product"

import { ProductType } from "@/types/ProductType"

async function getProducts(): Promise<ProductType[]> {
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        if (!res.ok) {
            throw new Error("Houve uma falha ao buscar os dados!")
        }
        return res.json()
    } catch (error) {
        console.error("Erro ao buscar produtos:", error)
        return []
    }
}

export default async function Home() {
    const products = await getProducts()

    return (
        <div className="flex flex-col w-full h-full">
            <Header/>
            <section className="w-full bg-gray-500 h-[350px] text-center">
            </section>
            <section className="flex flex-col w-full p-10 px-30 gap-8">
                <div>
                    <h1 className="text-2xl font-bold">Produtos</h1>
                    <h2 className="text-xl font">Todos os melhores produtos</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                    {products.map((product: ProductType) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>
            <Footer/>
        </div>
    )
}
