import { config } from "../../../configs";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  fileteredDocumentTypeData,
  getAgentGeneralData,
} from "../../features/agent";
import SelectGroup from "../../components/forms/SelectGroup";
import { getPersonInputData } from "../../data/persona/inputs";
import { fileteredData } from "../../features/policies";
import { getPersonSelectData } from "../../data/persona/selects";
import Loader from "../../components/Loader/Loader";
import { personSchema } from "../../data/persona/schema";
import { ipcRenderer } from "electron";
import InputGroup from "../../components/forms/InputGroup";
import { updateClient } from "../../features/client";

const schema = personSchema();

export default function WatchClientes() {
  const [loading, setLoading] = useState(true);
  const [cliente, setCliente] = useState({
    clientes: null,
    token: null,
  });
  const [documentType, setDocumentType] = useState([{
    value: "",
    optionName: "",
  }]);
  const [generalSelects, setgeneralSelects] = useState([{
    value: "",
    optionName: "",
  }]);
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
  const clientId = id;

  useEffect(() => {
    async function fetchClientes() {
      if (!user.token) {
        router.push("/auth");
      }

      const clientes = await getClientUnique(user.token, clientId);
      setCliente({
        clientes,
        token: user.token,
      });
    }
    fetchClientes();
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
    setLoading(false);
  }, []);

  const {clientes, token} = cliente

  const classes = {
    label: "text-sm font-medium text-gray-900 block mb-2",
    input: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    select: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    div: "",
    error: "text-red-700",
}

const clientData = [
    {
      id: 18,
      name: "company",
      type: "text",
      placeholder: "",
      register,
      errors,
      text: "Compañia",
      classes,
      defaultValue: clientes ? clientes.company : null,
    },
    {
      id: 19,
      name: "ocupation",
      type: "text",
      placeholder: "",
      register,
      errors,
      text: "Ocupación",
      classes,
      defaultValue: clientes ? clientes.ocupation : null,
    },
  ]

  const data = getPersonInputData(register, errors, classes, clientes);
  data.push(...clientData);
  const generalSelectData = getPersonSelectData(register, errors, classes, clientes);
  generalSelectData.push({
    id: 24,
    name: 'civilPolicyStatus',
    register,
    errors,
    text: 'Estado civil',
    classes,
    defaultValue: clientes ? clientes.civilPolicyStatus : 'default',
  });

  const documentTypeInput = {
    id: 4,
    name: "documentTypeId",
    register,
    errors,
    text: "Tipo de Documento",
    classes,
    defaultValue: clientes ? clientes.Persons.documentTypeId : 'default'
  };

  // const documentTypeSelect = (
  //   <SelectGroup
  //     optionData={documentType}
  //     key={documentTypeInput.id}
  //     {...documentTypeInput}
  //   />
  // );
  // const generalSelect = [
  //   <SelectGroup
  //     optionData={[
  //       { value: "Masculino", optionName: "Masculino" },
  //       { value: "Femenino", optionName: "Femenino" },
  //     ]}
  //     key={generalSelectData[0].id}
  //     {...generalSelectData[0]}
  //   />,
  // ];
  // generalSelect.push(
  //   <SelectGroup
  //     optionData={generalSelects}
  //     key={generalSelectData[1].id}
  //     {...generalSelectData[1]}
  //   />
  // );

  function onSubmit(data) {
    console.log(data, 'submitData');
    updateClient(user, router, config, data, clientId)
        .then(response => {
            console.log(response);
            if (response) {
                router.push("/clientes")
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
      <Layout title="Ver Cliente" user = {user}>

            <form onSubmit={handleSubmit(onSubmit)} className=" w-full bg-white p-16">
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <SelectGroup
                      disabled = {true}
                      optionData={documentType}
                      key={documentTypeInput.id}
                      {...documentTypeInput}
                    />
                    {data.map(input => {
                        return <InputGroup disabled = {true} key={input.id} {...input} />
                    })}
                    <SelectGroup
                      disabled = {true}
                      optionData={[
                        { value: "Masculino", optionName: "Masculino" },
                        { value: "Femenino", optionName: "Femenino" },
                      ]}
                      key={generalSelectData[0].id}
                      {...generalSelectData[0]}
                    />
                    <SelectGroup
                      disabled = {true}
                      optionData={generalSelects}
                      key={generalSelectData[1].id}
                      {...generalSelectData[1]}
                    />
                    <SelectGroup
                    optionData={[
                        { value: "Soltero", optionName: "Soltero" },
                        { value: "Casado", optionName: "Casado" },
                        { value: "Divorciado", optionName: "Divorciado" },
                        { value: "Viudo", optionName: "Viudo" },
                    ]}
                    key={generalSelectData[2].id}
                    {...generalSelectData[2]}
                    />
                </div>
                <button type="button" onClick={() => router.push('/clientes')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1">Regresar</button>
            </form>

      </Layout>
    </>
  );
}

async function getClientUnique(token, clientId) {
  const apiUrl = config.apiUrl();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${apiUrl}/clients/${clientId}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}
