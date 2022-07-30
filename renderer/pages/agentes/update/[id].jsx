import { config } from "../../../../configs";
import Layout from "../../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  fileteredDocumentTypeData,
  getAgentGeneralData,
  updateAgent,
} from "../../../features/agent";
import SelectGroup from "../../../components/forms/SelectGroup";
import { getPersonInputData } from "../../../data/persona/inputs";
import { fileteredData } from "../../../features/policies";
import { getPersonSelectData } from "../../../data/persona/selects";
import { updateRegistry } from "../../../features/utils";
import Loader from "../../../components/Loader/Loader";
import { personSchema } from "../../../data/persona/schema";
import InputGroup from "../../../components/forms/InputGroup";

const schema = personSchema();

export default function UpdateAgentes() {
  const [loading, setLoading] = useState(true);
  const [agente, setAgente] = useState({
    agentes: null,
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
  const agentId = id;

  useEffect(() => {
    async function fetchAgentes() {
      if (!user.token) {
        router.push("/auth");
      }

      const agentes = await getAgentUnique(user.token, agentId);
      setAgente({
        agentes,
        token: user.token,
      });
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
    setLoading(false);
  }, []);

  const {agentes, token} = agente

  const classes = {
    label: "text-sm font-medium text-gray-900 block mb-2",
    input: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    select: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    div: "",
    error: "text-red-700",
}


  const data = getPersonInputData(register, errors, classes, agentes);
  const generalSelectData = getPersonSelectData(register, errors, classes, agentes);

  console.log(agentes, 'this is a test');

  const documentTypeInput = {
    id: 4,
    name: "documentTypeId",
    register,
    errors,
    text: "Tipo de Documento",
    classes,
    defaultValue: agentes ? agentes.Persons.documentTypeId : 'default'
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
    updateRegistry(user, router, config, data, agentId, '/agents')
        .then(response => {
            console.log(response);
            if (response) {
                router.push("/agentes")
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
      <Layout title="Actualizar Agente" user = {user}>

            <form onSubmit={handleSubmit(onSubmit)} className=" w-full bg-white p-16">
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <SelectGroup
                      optionData={documentType}
                      key={documentTypeInput.id}
                      {...documentTypeInput}
                    />
                    {data.map(input => {
                        return <InputGroup key={input.id} {...input} />
                    })}
                    <SelectGroup
                      optionData={[
                        { value: "Masculino", optionName: "Masculino" },
                        { value: "Femenino", optionName: "Femenino" },
                      ]}
                      key={generalSelectData[0].id}
                      {...generalSelectData[0]}
                    />
                    <SelectGroup
                      optionData={generalSelects}
                      key={generalSelectData[1].id}
                      {...generalSelectData[1]}
                    />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar</button>
                <button type="button" onClick={() => router.push('/agentes')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1">Regresar</button>
            </form>

      </Layout>
    </>
  );
}

async function getAgentUnique(token, agentId) {
  const apiUrl = config.apiUrl();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${apiUrl}/agents/${agentId}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}
