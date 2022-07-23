export default function SmallCard({ title, value, icon }) {
    return (
        <div className="bg-bga-light-blue shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600  text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                {icon}
            </div>
            <div className="text-right">
                <p className="text-2xl">{value}</p>
                <p>{title}</p>
            </div>
        </div>
    )
}
