import { config } from "../../../../configs";
import Layout from "../../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectGroup from "../../../components/forms/SelectGroup";
import Loader from "../../../components/Loader/Loader";
import InputGroup from "../../../components/forms/InputGroup";
import { userSchema } from "../../../data/usuarios/schema";
import { updateRegistry } from "../../../features/utils";

const schema = userSchema();

export default function WatchUsers() {
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState({
    usuarios: null,
    token: null,
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const user = useSelector((state) => state.users);
  const router = useRouter();

  //GET ROUTE ID
  const { id } = router.query;
  const UsuarioId = id;

  useEffect(() => {
    async function fetchUsuarios() {
      if (!user.token) {
        router.push("/auth");
      }

      const usuarios = await getUserUnique(user.token, UsuarioId);
      setUsuario({
        usuarios,
        token: user.token,
      });
    }
    fetchUsuarios();
    setLoading(false);
  }, []);

  const {usuarios, token} = usuario

  console.log(usuarios, 'asdljahkdfjashfkasjhksjh');

  const classes = {
    label: "text-sm font-medium text-gray-900 block mb-2",
    input: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    select: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    div: "",
    error: "text-red-500 text-sm font-normal mb-2",
}


const data = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "",
      register,
      errors,
      text: "Correo electrónico",
      classes,
      defaultValue: usuarios ? usuarios.email : null,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "",
      register,
      errors,
      text: "Nombre de usuario",
      classes,
      defaultValue: usuarios ? usuarios.username : null,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "",
      register,
      errors,
      text: "Contraseña",
      classes,
    }
  ];

  const select = {
    id: 4,
    classes,
    register,
    errors,
    name: 'userRole',
    text: "Rol",
    defaultValue: usuarios ? usuarios.userRole : null,
};

const roleSelect = (
    <SelectGroup
      optionData={[
        { value: "admin", optionName: "Administrador" },
        { value: "digitalizer", optionName: "Digitalizador" },
      ]}
      key={select.id}
      {...select}
    />
  );

  function onSubmit(data) {
    console.log(data, 'submitData');
    updateRegistry(user, router, config, data, UsuarioId, '/user')
        .then(response => {
            console.log(response);
            if (response) {
                router.push("/usuarios")
            }
        }).catch(err => {
            console.error(err);
        })
    }      

  if (loading) {
    return <Loader/>;
  }

  return (
    <>
      <Layout title="Actualizar Usuario" user = {user}>

            <form onSubmit={handleSubmit(onSubmit)} className=" w-full bg-white p-16">
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    {data.map(input => {
                        return <InputGroup key={input.id} {...input} />
                    })}
                    {roleSelect}
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar</button>
                <button type="button" onClick={() => router.push('/usuarios')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1">Regresar</button>
            </form>

      </Layout>
    </>
  );
}

async function getUserUnique(token, UsuarioId) {
  const apiUrl = config.apiUrl();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${apiUrl}/user/${UsuarioId}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}
