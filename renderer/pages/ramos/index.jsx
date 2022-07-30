import { config } from "../../../configs";
import Table from "../../components/Table/Table";
import TableBody from "../../components/Table/TableBody";
import TableHead from "../../components/Table/TableHead";
import TableRow from "../../components/Table/TableRow";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loader from "../../components/Loader/Loader";
import { deleteRegistry } from "../../features/utils";
import ActionRow from "../../components/Table/Row/ActionRow";
import { ipcRenderer } from "electron";
import * as yup from "yup";
import { getAgentGeneralData } from "../../features/agent";
import { fileteredData } from "../../features/policies";
import SelectGroup from "../../components/forms/SelectGroup";


const schema = yup
.object({
    name: yup.string().typeError("Caracteres ingresados no validos").required("El nombre es requerido"),
    branchTypeId: yup.number().typeError("Debe ingresar un numero").required("El tipo de ramo es requerido"),
})
.required();

export default function Ramos() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [branch, setbranch] = useState({
    branches: null,
    names: null,
    token: null,
  });
  const [branchType, setBranchType] = useState({
    value: "",
    optionName: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const classes = {
    label: "text-sm font-medium text-gray-900 block mb-2",
    input:
      "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    div: "col-span-6 sm:col-span-3",
    select:
      "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    error: "text-red-500 text-sm font-normal mb-2",
  };

  const data = [{
    id: 1,
    name: "name",
    type: "text",
    placeholder: "",
    register,
    errors,
    text: "Nombre del ramo",
    classes,
  }];

  const select = {
    id: 2,
    classes,
    register,
    errors,
    name: 'branchTypeId',
    text: "Tipo de Ramo",
    defaultValue: 'default'
};

  const user = useSelector((state) => state.users);
  const router = useRouter()

  useEffect(() => {
    async function fetchBranch() {
      console.log(user, "user");
      if (!user.token) {
        router.push("/auth")
      }

      const head = [
        "ID",
        "Nombre",
        "Tipo de Ramo",
        "Acciones"
      ];
      const branches = await getBranch(user.token, user, router);

      setbranch({
        names: head,
        branches,
        token: user.token,
      });
      setLoading(false);
    }
    getAgentGeneralData(user, router, config, "branch-types", fileteredData).then(
        (value) => setBranchType(value)
      );
    fetchBranch();
  }, []);

  const { branches, names, token } = branch

  const branchTypeSelect = (
    <SelectGroup
      optionData={branchType}
      key={select.id}
      {...select}
    />
  );

  if (loading) {
    return <Loader/>;
  }

  return (
    <>
      <Layout title="Gestionar Ramos" user = {user}>
        <div className="p-4 block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
          <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
            <button
              onClick={() => {
                setShowModal(true);
              }}
              type="button"
              data-modal-toggle="add-user-modal"
              className="w-1/2 text-white bg-bga-light-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
            >
              <svg
                className="-ml-1 mr-2 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Añadir Ramo
            </button>
          </div>
        </div>
              {console.log(branches, "branches")}
        <Table>
          <TableHead names={names} />
          <TableBody>
            {branches.map((el) => {
              return (
                <tr
                  key={el.id}
                  className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                >
                  {<TableRow data={el} />}
                </tr>
              );
            })}
          </TableBody>
        </Table>

        {showModal ? (
          <Modal
            setShowModal={setShowModal}
            submitFunction={async (data) => {
              const newBranch = await createBranch(data,token, user, router)
              console.log(newBranch, "newBranch");
              setbranch({
                ...branch,
                branches: [...branches, newBranch],
              });
              console.log(branch, "branch");
              return newBranch;
            }}
            handleSubmit={handleSubmit}
            data={data}
            title="Añadir Ramo"
            beforeSelect={[branchTypeSelect]}
          />
        ) : null}
      </Layout>
    </>
  );
}

async function createBranch(data, token, user, router) {
  const apiUrl = config.apiUrl();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify(data),
  };
  console.log(JSON.stringify(data), "1");
  try {
    const response = await fetch(`${apiUrl}/sub-branchs`, requestOptions);
    if (response.status === 200 || response.status === 201){
      const data = await response.json();
      console.log(data, "2");
      return {
          id: data.id,
          Name: data.name,
          Type: data.branchTypeId === 1 ? "Persona" : data.branchTypeId === 2 ? "Vehiculo" : data.branchTypeId === 3 ? "Viaje" : data.branchTypeId === 4 ? "Patrimonial" : null,
          Acciones: list(data.id, user, router).map((item, index) => (
            <ActionRow {...item} key={index} />
          )),
      };
    } else {
      if (response.status >= 400) {
        console.log(response);
        throw response;
      } else {
        return false;
      }
    }
  } catch (error) {
    console.log(error);
    error.json().then((body) => {
      ipcRenderer.invoke("showDialog", body.message);
    });
    return false;
  }
}

async function getBranch(token, user, router) {
  const apiUrl = config.apiUrl();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${apiUrl}/sub-branchs`, requestOptions);
    const data = await response.json();
    return filteredBranchData(data, user, router);
  } catch (error) {
    console.log(error);
    return;
  }
}

const onSubmit = (data) => {
  registerUser(data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const list = (id, user, router) => [
  // {
  //   link: `/ramos/${id}`,
  //   image: "/images/watch.svg",
  // },
  {
    link: `/ramos/update/${id}`,
    image: "/images/update.svg",
  },
  {
    link: `#`,
    image: "/images/delete.svg",
    handleClick: async (e) => {
      e.preventDefault();
      console.log("delete", id);
      const confirm = await ipcRenderer.invoke('showConfirmation', '¿Desea eliminar este registro?')
      if (confirm.response === 0){
      deleteRegistry(user, router, config, id, '/sub-branchs')
    }
    },
  },
];

function filteredBranchData(branch, user, router) {
  return branch.map((el) => {
    const data = {
      id: el.id,
      Name: el.name,
      Type: el.BranchTypes.name,
      Acciones: list(el.id, user, router).map((item, index) => (
        <ActionRow {...item} key={index} />
      )),
    };
    return data;
  });
}