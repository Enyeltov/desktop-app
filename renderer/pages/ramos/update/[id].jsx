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
import Loader from "../../../components/Loader/Loader";
import { personSchema } from "../../../data/persona/schema";
import { ipcRenderer } from "electron";
import InputGroup from "../../../components/forms/InputGroup";
import { insuranceCarrierSchema } from "../../../data/aseguradoras/schema";
import { getInsuranceCarrierData } from "../../../data/aseguradoras/inputs";
import { updateInsuranceCarrier } from "../../../features/insurance-carrier";
import * as yup from "yup";
import { updateRegistry } from "../../../features/utils";

const schema = yup
.object({
    name: yup.string().typeError("Caracteres ingresados no validos").required("El nombre es requerido"),
    branchTypeId: yup.number().typeError("Debe ingresar un numero").required("El tipo de ramo es requerido"),
})
.required();

export default function WatchBranches() {
  const [loading, setLoading] = useState(true);
  const [branch, setBranch] = useState({
    branches: null,
    token: null,
  });
  const [branchType, setBranchType] = useState([{
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
  const BranchId = id;

  useEffect(() => {
    async function fetchBranches() {
      if (!user.token) {
        router.push("/auth");
      }

      const branches = await getBranchUnique(user.token, BranchId);
      setBranch({
        branches,
        token: user.token,
      });
    }
    fetchBranches();
    getAgentGeneralData(user, router, config, "branch-types", fileteredData).then(
        (value) => setBranchType(value)
      );
    setLoading(false);
  }, []);

  const {branches, token} = branch

  const classes = {
    label: "text-sm font-medium text-gray-900 block mb-2",
    input: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    select: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
    div: "",
    error: "text-red-500 text-sm font-normal mb-2",
}


const data = [{
    id: 1,
    name: "name",
    type: "text",
    placeholder: "",
    register,
    errors,
    text: "Nombre del ramo",
    classes,
    defaultValue: branches ? branches.name: null,
  }];

  const select = {
    id: 2,
    classes,
    register,
    errors,
    name: 'branchTypeId',
    text: "Tipo de Ramo",
    defaultValue: branches ? branches.branchTypeId :'default'
};

const branchTypeSelect = (
    <SelectGroup
      optionData={branchType}
      key={select.id}
      {...select}
    />
  );

  function onSubmit(data) {
    console.log(data, 'submitData');
    updateRegistry(user, router, config, data, BranchId, '/sub-branchs')
        .then(response => {
            console.log(response);
            if (response) {
                router.push("/ramos")
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
      <Layout title="Actualizar Ramo" user = {user}>

            <form onSubmit={handleSubmit(onSubmit)} className=" w-full bg-white p-16">
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    {branchTypeSelect}
                    {data.map(input => {
                        return <InputGroup key={input.id} {...input} />
                    })}
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar</button>
                <button type="button" onClick={() => router.push('/ramos')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1">Regresar</button>
            </form>

      </Layout>
    </>
  );
}

async function getBranchUnique(token, BranchId) {
  const apiUrl = config.apiUrl();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${apiUrl}/sub-branchs/${BranchId}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}
