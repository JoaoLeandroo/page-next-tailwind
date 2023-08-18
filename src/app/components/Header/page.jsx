import Link from "next/link";

export default function Header() {
    return(
        <header className="w-full h-14 bg-blue-950 flex justify-around items-center">
            <a href="#" title="Logo Página">
                <h1 className="text-fuchsia-100 font-semibold text-2xl">Logo</h1>
            </a>

            <nav>
                <ul className="flex gap-2">
                    <li className="hover:underline underline-offset-4">
                        <Link href="../../" className="text-white font-semibold">Home</Link>
                    </li>
                    <li className="hover:underline underline-offset-4">
                        <Link href="../../pages/Contato" className="text-white font-semibold">Contato</Link>
                    </li>
                    <li className="hover:underline underline-offset-4">
                        <Link href="../../pages/Sobre" className="text-white font-semibold">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}