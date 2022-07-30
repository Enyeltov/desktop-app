import Image from "next/image";
import Link from "next/link";
import SidebarList from "../List/SidebarList";

export default function Sidebar({ children, user }) {
  const list = [
    {
      title: "Tablero",
      link: "/dashboard",
      image: "/images/dashboard.svg",
    },
    {
      title: "Polizas",
      link: "/polizas",
      image: "/images/insurance.svg",
    },
    {
      title: "Clientes",
      link: "/clientes",
      image: "/images/client.svg",
    },
    {
      title: "Agentes",
      link: "/agentes",
      image: "/images/agent.svg",
    },
    {
      title: "Aseguradoras",
      link: "/aseguradoras",
      image: "/images/insuranceBuilding.svg",
    },
    {
      title: "Reportes",
      link: "/reportes",
      image: "/images/report.svg",
    },
  ];

  const adminList = [
    {
      title: "Ramos",
      link: "/ramos",
      image: "/images/branch.svg",
    },
    {
      title: "Usuarios",
      link: "/usuarios",
      image: "/images/user-config.svg",
    }
  ]

  if (user.data.userRole === "admin") {
    list.push(...adminList);
  }

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-bga-light-blue transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <a href="#" title="home">
            {/* <img src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" className="w-32"
                            alt="tailus logo"> */}
          </a>
        </div>

        <div className="mt-8 text-center">
          <Image
            src="/images/user.svg"
            alt="User Image"
            width={40}
            height={40}
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28 invert"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-100 lg:block">
            {user.data.username}
          </h5>
          <span className="hidden text-gray-300 lg:block">{user.data.userRole === 'admin' ? 'Administrador' : 'Digitalizador'}</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {list.map((item, index) => (
            <SidebarList {...item} key={index} />
          ))}
        </ul>
      </div>

      {/* <Link href="/usuarios">
      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-100 group">
          <Image src="/images/user-config.svg" alt="logout" width={20} height={20} />
          <span className="group-hover:text-gray-700">Usuarios</span>
        </button>
      </div>
      </Link> */}
    </aside>
  );
}
