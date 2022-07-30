import { config } from "../../../configs";
import Table from "../../components/Table/Table";
import TableBody from "../../components/Table/TableBody";
import TableHead from "../../components/Table/TableHead";
import TableRow from "../../components/Table/TableRow";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import ActionRow from "../../components/Table/Row/ActionRow";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../../components/Modal/Modal";
import {
  fileteredDocumentTypeData,
  getAgentGeneralData,
} from "../../features/agent";
import SelectGroup from "../../components/forms/SelectGroup";
import { getPersonInputData } from "../../data/persona/inputs";
import { fileteredData } from "../../features/policies";
import { getPersonSelectData } from "../../data/persona/selects";
import { deleteRegistry, getAge } from "../../features/utils";
import Loader from "../../components/Loader/Loader";
import { personSchema } from "../../data/persona/schema";
import { ipcRenderer } from "electron";

const schema = personSchema();

export default function Agentes() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [agente, setAgente] = useState({
    agentes: null,
    names: null,
    token: null,
  });
  const [documentType, setDocumentType] = useState({
    value: "",
    optionName: "",
  });
  const [generalSelects, setgeneralSelects] = useState({
    value: "",
    optionName: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
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

  const data = getPersonInputData(register, errors, classes);
  const generalSelectData = getPersonSelectData(register, errors, classes);

  const documentTypeInput = {
    id: 4,
    name: "documentTypeId",
    register,
    errors,
    text: "Tipo de Documento",
    classes,
    defaultValue: agentes ? agentes.Persons.documentTypeId : 'default'
  };

  const user = useSelector((state) => state.users);
  const router = useRouter();

  useEffect(() => {
    async function fetchAgentes() {
      console.log(user, "user");
      if (!user.token) {
        router.push("/auth");
      }

      const head = [
        "ID",
        "Nombre",
        "Documento",
        "Genero",
        "Edad",
        "Acciones"
      ];
      const agentes = await getAgent(user.token, user, router);

      setAgente({
        names: head,
        agentes,
        token: user.token,
      });
      setLoading(false);
    }
    fetchAgentes();
    getAgentGeneralData(
      user,
      router,
      config,
      "document-types",
      fileteredDocumentTypeData
    ).then((value) => setDocumentType(value));
    getAgentGeneralData(user, router, config, "cities", fileteredData).then(
      (value) => setgeneralSelects(value)
    );
  }, []);

  const documentTypeSelect = (
    <SelectGroup
      optionData={documentType}
      key={documentTypeInput.id}
      {...documentTypeInput}
    />
  );
  const generalSelect = [
    <SelectGroup
      optionData={[
        { value: "Masculino", optionName: "Masculino" },
        { value: "Femenino", optionName: "Femenino" },
      ]}
      key={generalSelectData[0].id}
      {...generalSelectData[0]}
    />,
  ];
  generalSelect.push(
    <SelectGroup
      optionData={generalSelects}
      key={generalSelectData[1].id}
      {...generalSelectData[1]}
    />
  );

  const { agentes, names, token } = agente;

  if (loading) {
    return <Loader/>;
  }

  return (
    <>
      <Layout title="Gestionar Agentes" user = {user}>
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
              Añadir Agente
            </button>
          </div>
        </div>

        <Table>
          <TableHead names={names} />
          <TableBody>
            {agentes.map((el) => {
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
              const newAgent = await createAgent(data, token, user, router);
              setAgente({
                ...agente,
                agentes: [...agentes, newAgent],
              });
              return newAgent;
            }}
            handleSubmit={handleSubmit}
            data={data}
            title="Añadir Agente"
            beforeSelect={[documentTypeSelect]}
            afterSelect={generalSelect}
          />
        ) : null}
      </Layout>
    </>
  );
}

async function createAgent(data, token, user, router) {
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
    const response = await fetch(`${apiUrl}/agents`, requestOptions);
    if ((response.status === 200 || response.status === 201) && response.ok) {
    const data = await response.json();
    console.log(data, "2");
    return filteredAgentCreateData(data, user, router);
    } else {
      throw response
    }
  } catch (error) {
    error.json().then(body => {
      console.log(body);
      ipcRenderer.invoke('showDialog', body.message)            
    })
    return false;
  }
}

async function getAgent(token, user, router) {
  const apiUrl = config.apiUrl();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${apiUrl}/agents`, requestOptions);
    const data = await response.json();
    console.log(data, "data");
    return filteredAgentData(data, user, router);
  } catch (error) {
    console.error(error);
    return;
  }
}

const list = (id, personId, user, router) => [
  {
    link: `/agentes/${id}`,
    image: "/images/watch.svg",
  },
  {
    link: `/agentes/update/${id}`,
    image: "/images/update.svg",
  },
  {
    link: `#`,
    image: "/images/delete.svg",
    handleClick: async (e) => {
      e.preventDefault();
      console.log("delete", personId);
      const confirm = await ipcRenderer.invoke('showConfirmation', '¿Desea eliminar este registro?')
      if (confirm.response === 0) {
      deleteRegistry(user, router, config, personId, '/agents')
      }
    },
  },
];

function filteredAgentData(agent, user, router) {
  return agent.map((el) => {
    const data = {
      id: el.id,
      fullName: `${el.Persons.name} ${el.Persons.lastName}`,
      document: `${el.Persons.documentTypeId == 1 ? 'V-' : 'J-'}${el.Persons.document}`,
      gender: el.Persons.gender,
      birthDate: getAge(el.Persons.birthDate),
      Acciones: list(el.id, el.Persons.id, user, router).map((item, index) => (
        <ActionRow {...item} key={index} />
      )),
    };
    console.log(data, 'data');
    return data;
  });
}

function filteredAgentCreateData(agent, user, router) {
    const data = {
      id: agent.Agents[0].id,
      fullName: `${agent.name} ${agent.lastName}`,
      document: `${agent.documentTypeId == 1 ? 'V-' : 'J-'}${agent.document}`,
      gender: agent.gender,
      birthDate: getAge(agent.birthDate),
      Acciones: list(agent.Agents[0].id, agent.id, user, router).map((item, index) => (
        <ActionRow {...item} key={index} />
      )),
    };
    console.log(data, 'data');
    return data;
}
