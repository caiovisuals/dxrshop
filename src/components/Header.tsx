import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs"

export default function Header() {
    return (
        <header className="w-full px-30 py-[15px] flex flex-row items-center justify-between">
            <div className="w-[20%] flex flex-row items-center justify-start">
                <h1>dxrshop</h1>
            </div>
            <div className="w-[60%] flex flex-row items-center gap-[15px]">
                <button>Categorias</button>
                <input placeholder="Buscar produtos, marcas e muito mais..." className="w-full"></input>
            </div>
            <div className="w-[20%] flex flex-row items-center justify-end gap-[15px]">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <button>Notificações</button>
                <button>Carrinho</button>
            </div>
        </header>
    )
}
