import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-4 bg-bga-light-blue">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="#" target="_blank" className="flex items-center space-x-2">
                <Image src="/images/best-global-logo.png" alt="menu" width={100} height={100} />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white align-center">Best Global Advisors</span>
            </a>
        </div>
        {/* <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h3>
                <ul>
                    <li className="mb-4">
                        <a href="#" target="_blank"
                            className="text-gray-200 hover:underline dark:text-gray-400">Flowbite</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="nofollow"
                            className="text-gray-200 hover:underline dark:text-gray-400">Tailwind CSS</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h3>
                <ul>
                    <li className="mb-4">
                        <a href="#" target="_blank"
                            className="text-gray-200 hover:underline dark:text-gray-400">Github</a>
                    </li>
                    <li>
                        <a href="#" target="_blank"
                            className="text-gray-200 hover:underline dark:text-gray-400">Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h3>
                <ul>
                    <li className="mb-4">
                        <a href="#" target="_blank" className="text-gray-200 hover:underline dark:text-gray-400">Privacy
                            Policy</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="text-gray-200 hover:underline dark:text-gray-400">Terms
                            &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div> */}
    </div>
    <hr className="my-2 border-gray-700 sm:mx-auto lg:my-2"/>
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-300 sm:text-center ">© 2022 <a href="https://bgabgb.com" target="_blank" className="hover:underline">Best Global Advisors</a>. Todos los Derechos Reservados.
</span>
    </div>
</footer>
    );
}


