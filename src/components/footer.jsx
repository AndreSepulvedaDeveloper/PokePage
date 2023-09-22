export function Footer() {
    return (

        <div className="w-full py-5 max-w-screen-xl  md:flex md:items-center md:justify-around">
            <span className="text-l text-gray-950sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">PokeWind™</a>. Derechos Reservados.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
    );
}



