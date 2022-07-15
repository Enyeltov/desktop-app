import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import InputGroup from "../../components/forms/InputGroup";
import SelectGroup from "../../components/forms/SelectGroup";
import Layout from "../../components/Layout/Layout";
import { config } from "../../../configs";
import { fileteredClientData, fileteredData, getPoliciesGeneralData, submitPolicy, updatePolicy } from "../../features/policies";
import { getInputData, getPatrimonialInputData, getTravelInputData, getVehicleInputData } from "../../data/polizas/inputs";
import { getSelectPolizaData } from "../../data/polizas/select";
import { polizaSchema } from "../../data/polizas/schema";

const schema = polizaSchema();

export default function WatchPoliza() {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: polizas,
        resolver: yupResolver(schema),
    });

    // states
    const [loading, setLoading] = useState(true);
    const [selectSubBranch, setSelectSubBranch] = useState([
        {
            value: '',
            optionName: '',
        }
    ])

    const [poliza, setPoliza] = useState({
        polizas: null,
        token: null,
    });

    const [generalSelects, setgeneralSelects] = useState([
        {
            value: '',
            optionName: ''
        }
    ])

    const user = useSelector((state) => state.users);
    const router = useRouter();

    //GET ROUTE ID
    const { id } = router.query;
    const polizaId = id;


    useEffect(() => {
        async function fetchPolizas() {
            console.log(user, "user");
            if (!user.token) {
                router.push("/auth")
            }
            
            const polizas = await getPolizaUnique(user.token, polizaId);
            getSubranches(polizas.branchTypeId).then(data => setSelectSubBranch(data));
            console.log(polizas, "polizas");

            setPoliza({
                polizas,
                token: user.token,
            });
            setLoading(false);
        }
        async function getSubranches(branchId) {
            // console.log(user, "user");
            if (!user.token) {
                router.push("/auth")
            }

            const apiUrl = config.apiUrl();
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${user.token}`);

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };

            try {
                const response = await fetch(`${apiUrl}/sub-branchs/branches/${branchId}`, requestOptions);
                const data = await response.json();
                return filterSubBranch(data)
            } catch (error) {
                console.error(error);
                return;
            }
        }
        fetchPolizas();
    }, []);

    useEffect(() => {
        // console.log(generalSelects, 'generalSelects antes')
        Promise.all([
            getPoliciesGeneralData(user, router, config, 'insurance-carrier', fileteredData),
            getPoliciesGeneralData(user, router, config, 'clients', fileteredClientData),
            getPoliciesGeneralData(user, router, config, 'agents', fileteredClientData),
            getPoliciesGeneralData(user, router, config, 'policy-status', fileteredData),
            getPoliciesGeneralData(user, router, config, 'relation-policy-status', fileteredData),
            getPoliciesGeneralData(user, router, config, 'periodicities', fileteredData),
            getPoliciesGeneralData(user, router, config, 'currencies', fileteredData),
        ]).then(value => {
            setgeneralSelects(value)
        })
    }, [])

    const classes = {
        label: "text-sm font-medium text-gray-900 block mb-2",
        input: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        select: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",
        div: "",
        error: "text-red-700",
    }

    const { polizas, token } = poliza

    const selectSubBranchData = {
        classes,
        name: 'subBranchId',
        text: 'Sub Ramo',
        selectedIndex: polizas?.subBranchId,
        register,
        // validate,
        errors
    }

    // generals input
    const inputData = getInputData(register, errors, classes, polizas);

    const vehicleInputData = [...inputData,
    ...getVehicleInputData(register, errors, classes, polizas)
    ]
    const travelInputData = [...inputData,
    ...getTravelInputData(register, errors, classes, polizas)
    ]
    const patrimonialInputData = [...inputData,
        ...getPatrimonialInputData(register, errors, classes, polizas)
    ]
    const personInputData = [...inputData]

    const selectGroupData = getSelectPolizaData(register, errors, classes, polizas);

    const getSelectGroupData = selectGroupData.map((el, index) => {
        if (generalSelects.length > 1) {
            return <SelectGroup optionData={generalSelects[index]} disabled= {true} {...el} />
        } else {
            return <SelectGroup optionData={generalSelects} disabled= {true} {...el} />
        }
    })

    // console.log(generalSelects, 'generalSelects')
    const vehicleForm = [
        <SelectGroup optionData={selectSubBranch} disabled= {true} {...selectSubBranchData} />,
        getSelectGroupData,
        vehicleInputData.map(el => <InputGroup key={el.id} disabled= {true} {...el} />)
    ]
    const personForm = [
        <SelectGroup optionData={selectSubBranch} disabled= {true} {...selectSubBranchData} />,
        getSelectGroupData,
        personInputData.map(el => <InputGroup key={el.id} disabled= {true} {...el} />)
    ]

    // console.log(personForm, 'personForm')
    const travelsForm = [
        <SelectGroup optionData={selectSubBranch} disabled= {true} {...selectSubBranchData} />,
        getSelectGroupData,
        travelInputData.map(el => <InputGroup key={el.id} disabled= {true} {...el} />)
    ]
    const patrimonialsForm = [
        <SelectGroup optionData={selectSubBranch} disabled= {true} {...selectSubBranchData} />,
        getSelectGroupData,
        patrimonialInputData.map(el => <InputGroup key={el.id} disabled= {true} {...el} />)
    ]

    // la estate machin
    // TODO verificar si el return es en sigular nada mas 
    const stateMachine = {
        Vehiculo: vehicleForm,
        Persona: personForm,
        Viaje: travelsForm,
        Patrimonial: patrimonialsForm,
    }

    function filterSubBranch(branchs) {
        return branchs.map(el => {
            return {
                value: el.id,
                optionName: el.name
            }
        })
    }

    async function getPolizaUnique(token, id) {
        const apiUrl = config.apiUrl();
    
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
    
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };
    
        try {
            const response = await fetch(`${apiUrl}/policies/${id}`, requestOptions);
            const data = await response.json();
            return data
        } catch (error) {
            console.error(error);
            return;
        }
    }


    if (loading || !polizas) {
        return <div>Cargando...</div>;
    }
    
    return (
        <>
            <Layout title="Actualizar Poliza">
                
                <form className=" w-full bg-white p-16">
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        {stateMachine[polizas.BranchTypes.name]}
                    </div>
                </form>
                <div className="grid gap-6 mb-6 lg:grid-cols-4">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => router.push('/polizas')}>Regresar</button>
                </div>
            </Layout>
        </>
    )
}