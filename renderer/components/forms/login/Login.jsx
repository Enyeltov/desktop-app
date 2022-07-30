import InputGroup from "../InputGroup";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { login } from "../../../features/user";

const schema = yup.object({
    email: yup.string().email('Correo no valido').required('Correo Requerido'),
    password: yup.string().required('La Contraseña es requerida'),
}).required();

const prefilledValue = {
    email: 'enyeltov@admin.com',
    password: '123456'
};

export default function Login({ setIsLogin }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: prefilledValue,
        resolver: yupResolver(schema)
    });
    const router = useRouter()
    const dispatch = useDispatch();

    const inputs = [
        {
            name: 'email',
            type: 'email',
            placeholder: 'Correo Electronico',
            register,
            errors,
            text: 'Correo Electronico',
            classes: {
                label: 'block text-gray-700 text-sm font-normal mb-2',
                input: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                div: 'mb-4',
                error: 'text-red-500 text-sm font-normal mb-2'
            }
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Contraseña',
            register,
            errors,
            text: 'Contraseña',
            classes: {
                label: 'block text-gray-700 text-sm font-normal mb-2',
                input: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                div: 'mb-4',
                error: 'text-red-500 text-sm font-normal mb-2'
            }
        }
    ];

    const onSubmit = data => {
        dispatch(login(data)).then((result) => {
            console.log(result);
            if (result.type === "users/login/fulfilled"){
            router.push('/dashboard')
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
                <div
                    className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                >
                    Iniciar Sesion
                </div>
                {inputs.map((el, index) => {
                    return <InputGroup key={index} {...el} />
                })}
                <div className="flex items-center justify-between">
                    <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Ingresar</button>
                    {/* <a
                        className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                    >
                        ¿Olvido su contraseña?
                    </a>
                    <a className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800" href="#" onClick={() => setIsLogin(false)} > Registrarse </a> */}
                </div>
            </form>
        </>
    )
}