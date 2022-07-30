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
  updateAgent,
} from "../../features/agent";
import SelectGroup from "../../components/forms/SelectGroup";
import { getPersonInputData } from "../../data/persona/inputs";
import { fileteredData } from "../../features/policies";
import { getPersonSelectData } from "../../data/persona/selects";
import Loader from "../../components/Loader/Loader";
import { personSchema } from "../../data/persona/schema";
import { ipcRenderer } from "electron";
import InputGroup from "../../components/forms/InputGroup";
import { insuranceCarrierSchema } from "../../data/aseguradoras/schema";
import { getInsuranceCarrierData } from "../../data/aseguradoras/inputs";
import { updateInsuranceCarrier } from "../../features/insurance-carrier";

const schema = insuranceCarrierSchema();

export default function WatchInsuranceCarriers() {
  const [loading, setLoading] = useState(true);
  const [insuranceCarrier, setInsuranceCarrier] = useState({
    insuranceCarriers: null,
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
  const CarrierId = id;

  useEffect(() => {
    async function fetchInsuranceCarriers() {
      if (!user.token) {
        router.push("/auth");
      }

      const insuranceCarriers = await getInsuranceCarrierUnique(user.token, CarrierId);
      setInsuranceCarrier({
        insuranceCarriers,
        token: user.token,
      });
    }
    fetchInsuranceCarriers();
    setLoading(false);
  }, []);

  const {insuranceCarriers, token} = insuranceCarrier

  const classes = {
    label: "text-sm font-medium text-gray-900 block mb-2",
    input: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    select: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    div: "",
    error: "text-red-500 text-sm font-normal mb-2",
}


  const data = getInsuranceCarrierData(register, errors, classes, insuranceCarriers);

  function onSubmit(data) {
    console.log(data, 'submitData');
    updateInsuranceCarrier(user, router, config, data, CarrierId)
        .then(response => {
            console.log(response);
            if (response) {
                router.push("/aseguradoras")
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
      <Layout title="Actualizar Aseguradora" user = {user}>

            <form onSubmit={handleSubmit(onSubmit)} className=" w-full bg-white p-16">
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    {data.map(input => {
                        return <InputGroup disabled = {true} key={input.id} {...input} />
                    })}
                </div>
                <button type="button" onClick={() => router.push('/aseguradoras')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1">Regresar</button>
            </form>

      </Layout>
    </>
  );
}

async function getInsuranceCarrierUnique(token, CarrierId) {
  const apiUrl = config.apiUrl();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${apiUrl}/insurance-carrier/${CarrierId}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}
