import Image from "next/image";

export default function ButtonIcon({
    buttonClass,
    onClickHandle,
    text,
    key,
    image= null
}) {
    return (
        <button
            onClick={() => onClickHandle()}
            // className="w-1/2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
            className={buttonClass}
        >
            {image ? <Image className="invert" src={image} alt="logo" width={20} height={20} />: null}
            {text}
        </button>
    )
}