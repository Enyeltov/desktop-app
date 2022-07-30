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
import { getInsuranceCarrierData } from "../../data/aseguradoras/inputs";
import { insuranceCarrierSchema } from "../../data/aseguradoras/schema";
import { ipcRenderer } from "electron";

const schema = insuranceCarrierSchema();

export default function Aseguradoras() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [insuranceCarrier, setInsuranceCarrier] = useState({
    insuranceCarriers: null,
    names: null,
    token: null,
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

  const data = getInsuranceCarrierData(register, errors, classes);
  const user = useSelector((state) => state.users);
  const router = useRouter()

  useEffect(() => {
    async function fetchInsuranceCarriers() {
      console.log(user, "user");
      if (!user.token) {
        router.push("/auth")
      }

      const head = [
        "ID",
        "Nombre",
        "RIF",
        "Correo Electronico",
        "Telefono",
        "Acciones"
      ];
      const insuranceCarriers = await getInsuranceCarrier(user.token, user, router);

      setInsuranceCarrier({
        names: head,
        insuranceCarriers,
        token: user.token,
      });
      setLoading(false);
    }
    fetchInsuranceCarriers();
  }, []);

  const { insuranceCarriers, names, token } = insuranceCarrier

  if (loading) {
    return <Loader/>;
  }

  return (
    <>
      <Layout title="Gestionar Aseguradoras" user = {user}>
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
              Añadir Aseguradora
            </button>
          </div>
        </div>
              {console.log(insuranceCarriers, "insuranceCarriers")}
        <Table>
          <TableHead names={names} />
          <TableBody>
            {insuranceCarriers.map((el) => {
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
              const newInsuranceCarrier = await createInsuranceCarrier(data,token, user, router)
              console.log(newInsuranceCarrier, "newInsuranceCarrier");
              setInsuranceCarrier({
                ...insuranceCarrier,
                insuranceCarriers: [...insuranceCarriers, newInsuranceCarrier],
              });
              console.log(insuranceCarrier, "insuranceCarrier");
              return newInsuranceCarrier;
            }}
            handleSubmit={handleSubmit}
            data={data}
            title="Añadir Aseguradora"
          />
        ) : null}
      </Layout>
    </>
  );
}

async function createInsuranceCarrier(data, token, user, router) {
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
    const response = await fetch(`${apiUrl}/insurance-carrier`, requestOptions);
    if (response.status === 200 || response.status === 201){
      const data = await response.json();
      console.log(data, "2");
      return {
        id: data.id,
        companyName: data.name,
        document: `j-${data.document}`,
        email: data.email,
        phone : data.phone,
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

async function getInsuranceCarrier(token, user, router) {
  const apiUrl = config.apiUrl();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${apiUrl}/insurance-carrier`, requestOptions);
    const data = await response.json();
    return filteredInsuranceCarrierData(data, user, router);
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
  {
    link: `/aseguradoras/${id}`,
    image: "/images/watch.svg",
  },
  {
    link: `/aseguradoras/update/${id}`,
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
      deleteRegistry(user, router, config, id, '/insurance-carrier')
    }
    },
  },
];

function filteredInsuranceCarrierData(insuranceCarrier, user, router) {
  return insuranceCarrier.map((el) => {
    const data = {
      id: el.id,
      companyName: el.name,
      document: `j-${el.document}`,
      email: el.email,
      phone : el.phone,
      Acciones: list(el.id, user, router).map((item, index) => (
        <ActionRow {...item} key={index} />
      )),
    };
    return data;
  });
}