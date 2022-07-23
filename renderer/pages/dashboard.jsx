import { useEffect } from "react";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getValues } from "../features/dashboard";
import SmallCard from "../components/Card/SmallCard";
import Loader from "../components/Loader/Loader";
import Table from "../components/Table/Table";
import TableHead from "../components/Table/TableHead";
import TableBody from "../components/Table/TableBody";
import TableRow from "../components/Table/TableRow";

export default function dashboard(){
    const [values, setValues] = useState({
        clients: 0,
        policies: 0,
        insured: {_sum: {insuredValue:0}},
        primes: {_sum: {primeValue:0}},
        names: [],
        tableData: [],
    });
    const [loading, setLoading] = useState(true);
    
    const user = useSelector ((state) => state.users);
    console.log(user, 'user');
    const router = useRouter()
    
    useEffect(() => {
        async function fetchValues()
        {
            if (!user.token) {
                router.push("/auth");
            }
            const clientes = await getValues(user.token, 'clients/funtion/count');
            const polizas = await getValues(user.token, 'policies/function/count');
            const asegurado = await getValues(user.token, 'policies/function/sum/insured');
            const primas = await getValues(user.token, 'policies/function/sum/prime');
            const polizasTabla = await getValues(user.token, 'policies');
            console.log(polizasTabla, 'polizasTabla');
            const clientesTabla = await getValues(user.token, 'clients');
            console.log(clientesTabla, 'clientesTabla');
            const filteredData = filterValues(polizasTabla, clientesTabla);
            const head = [
              "ID",
              "Numero de Poliza",
              "Cliente",
              "Estado",
          ];
            setValues({
                clients: clientes,
                policies: polizas,
                insured: asegurado,
                primes: primas,
                names: head,
                tableData: filteredData,
            })
        }
        fetchValues();
        setLoading(false);
    }, [])

    const {clients, policies, insured, primes, names, tableData} = values;

    if (loading){
      return (
        <Loader />
        )
    }

    const params = [
      {
        title: "Clientes",
        value: clients,
        icon: <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      },
      {
        title: "Pólizas",
        value: policies,
        icon: <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
      },
      {
        title: "Total Asegurados",
        value: `${insured._sum.insuredValue} Bs`,
        icon: <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
      },
      {
        title: "Total Primas",
        value: `${primes._sum.primeValue} Bs`,
        icon: <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      }
    ]

    const params2 = [
      {
        title: "Pólizas Cotizadas",
        value: 1,
        icon: <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.9955241,8.33576576 L15.4932862,11.8335278 L11.9955241,8.33576576 Z M17.5365751,7.79609426 C17.9262629,8.18578207 17.9321949,8.81165877 17.5321697,9.21168397 L10.0807224,16.6631313 L6,17.829052 L7.16592069,13.7483296 L14.617368,6.29688224 C15.0094888,5.90476144 15.6393004,5.89881957 16.0329577,6.29247691 L17.5365751,7.79609426 Z"></path></svg>
      },
      {
        title: "Pólizas Expedidas",
        value: 2,
        icon: <svg width="30" height="30" fill="none" viewBox="0 0 35 35" stroke="currentColor" className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 16 L30 2 16 30 12 20 Z M30 2 L12 20"></path></svg>
      },
      {
        title: "Pólizas Pagadas",
        value: 0,
        icon: <svg width="30" height="30" fill="none" viewBox="0 0 30 30" stroke="currentColor" className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 2 7 L 2 24 L 30 24 L 30 7 L 2 7 z M 6 9 L 26 9 C 26 10.105 26.895 11 28 11 L 28 20 C 26.895 20 26 20.895 26 22 L 6 22 C 6 20.895 5.105 20 4 20 L 4 11 C 5.105 11 6 10.105 6 9 z M 16 11 C 13.789 11 12 13.016 12 15.5 C 12 17.984 13.789 20 16 20 C 18.211 20 20 17.984 20 15.5 C 20 13.016 18.211 11 16 11 z M 16 13 C 17.102 13 18 14.121 18 15.5 C 18 16.879 17.102 18 16 18 C 14.898 18 14 16.879 14 15.5 C 14 14.121 14.898 13 16 13 z M 8.5 14 C 7.672 14 7 14.672 7 15.5 C 7 16.328 7.672 17 8.5 17 C 9.328 17 10 16.328 10 15.5 C 10 14.672 9.328 14 8.5 14 z M 23.5 14 C 22.672 14 22 14.672 22 15.5 C 22 16.328 22.672 17 23.5 17 C 24.328 17 25 16.328 25 15.5 C 25 14.672 24.328 14 23.5 14 z"></path></svg>
      },
    ]

    return (
        <>
        <Layout title='Dashboard'>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
            {params.map((param, index) => {
              return(
              <SmallCard 
              title={param.title}
              value={param.value}
              icon={param.icon}/>
              )
            })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
            {params2.map((param, index) => {
              return(
              <SmallCard
              title={param.title}
              value={param.value}
              icon={param.icon}/>
              )
            })}
        </div>
        <div className="py-10 px-10">
          <Table>
            <TableHead names={names}/>
            <TableBody>
              {tableData.map((el) => {
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
        </div>
        </Layout>
        </>
    )
}

function filterValues(polizasData, clientesData) {
  return polizasData.map((el) => {
      const data = {
          id: el.id,
          policyNum: el.policyNum,
          cliente: 'Enyel Tovar',
          status: el.PolicyStatus.name,
      };
      return data;
  });
}