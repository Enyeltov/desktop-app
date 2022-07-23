export default function TableHead({ names }) {
    return (
        <thead>
            <tr className="text-xs font-semibold tracking-wide text-center text-gray-100 uppercase border-b dark:border-gray-700 bg-bga-light-blue dark:text-gray-400 dark:bg-gray-800">

                {names.map((el, key) => {
                    return <th key={key} className="px-4 py-3">{el}</th>
                })}
            </tr>
        </thead>
    )
}