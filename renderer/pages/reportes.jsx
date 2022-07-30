import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { config } from "../../configs";
import ButtonIcon from "../components/Buttons/ButtonIcon";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import Table from "../components/Table/Table";
import TableBody from "../components/Table/TableBody";
import TableHead from "../components/Table/TableHead";
import TableRow from "../components/Table/TableRow";
import { filterClientReport, filterInsurerReport, filterPeriodReport } from "../features/report";
import { getTableData } from "../features/utils";

export default function Reportes(){

    const [reportes, setReportes] = useState({
        value: "",
    });

    const [tabla, setTabla] = useState({
        data: [],
        names: [],
        token: null,
    });

    const [loading, setLoading] = useState(true);

    const user = useSelector((state) => state.users);
    const router = useRouter()

    const handleReportChange = (text) => setReportes({
        value: text
    })

    function filter(data){
        return data
    }

    useEffect(()=>{
        async function fetchReportes(){
            let Head = [];
            let data = [];
        switch(reportes.value){
            case "Aseguradora":
                Head = [
                    "#",
                    "Aseguradora",
                    "Ramo",
                    "Prima Neta",
                    "Prima Total",
                ];

                data = await getTableData(user, router, config, 'policies/reports/insurer', filterInsurerReport);
                break;
            case "Clientes":
                Head = [
                    "#",
                    "Cliente",
                    "Documento",
                    "Prima Neta",
                    "Prima Total",
                ];

                data = await getTableData(user, router, config, 'policies/reports/client', filterClientReport);
                break;
            case "Periodo":
                Head = [
                    "#",
                    "Año",
                    "Mes",
                    "Prima Neta",
                    "Prima Total",
                ];

                data = await getTableData(user, router, config, 'policies/reports/period', filterPeriodReport);
                break;
            case "":
                console.log('ninguno');
                break;
            default:
                console.log('default');
                break;
        }
        setTabla({
            data: data,
            names: Head,
            token: user.token,
        });
    }
        fetchReportes();
        setLoading(false);
    }, [reportes])

    const buttonsReport = [
        {
            buttonClass: 'w-1/2 text-white bg-bga-light-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleReportChange('Aseguradora'),
            text: 'Produccion por Aseguradora',
            // image: '/images/car-insurance.svg'
            
        },
        {
            buttonClass: 'w-1/2 text-white bg-bga-light-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleReportChange('Clientes'),
            text: 'Producción por clientes',
            // image: '/images/travel-insurance.svg'
        },
        {
            buttonClass: 'w-1/2 text-white bg-bga-light-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto',
            onClickHandle: () => handleReportChange('Periodo'),
            text: 'Produccion por Periodo',
            // image: '/images/home-insurance.svg'
        },
    ]

    const value = reportes.value;
    const {data, names, token} = tabla

    const insuranceTable = [
        <Table>
            <TableHead names={names} />
            <TableBody>
                {data.map((el) => {
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
    ]

    const clientTable = [
        <Table>
            <TableHead names={names} />
            <TableBody>
                {data.map((el) => {
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
    ]

    const PeriodTable = [
        <Table>
            <TableHead names={names} />
            <TableBody>
                {data.map((el) => {
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
    ]

    const stateMachine = {
        Aseguradora: insuranceTable,
        Clientes: clientTable,
        Periodo: PeriodTable,
    }

    if (loading) {
        return <Loader/>;
      }
    
    return (
    <>
    <Layout title="Generar Reportes" user = {user}>
            <div className="p-4 block flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="flex items-center space-x-2 sm:space-x-3 m-auto">
                    {buttonsReport.map((el, i) => <ButtonIcon key={i} {...el} />)}
                </div>
            </div>
            <div>
                {stateMachine[value]}
            </div>
    </Layout>
    </>
    )
}