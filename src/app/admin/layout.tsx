import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata ={
    title: 'Amigo secreto - Admin'
}

type Props = {children: ReactNode}

const Layout =({children}:Props)=>{

    return (
        <div>
            <header className="bg-gray-800 text-center py-5">
                <h3 className=" text-3xl">Amigo secreto</h3>
                <h4 className="text-base">Painel de controle</h4>
            </header>

            <main className="mx-auto w-full max-w-3xl p-3">{children}</main>
        </div>
    )
}

export default Layout;