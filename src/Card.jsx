export default function Card({title, icon}) {
    return (
        <li className="w-1/2 p-2">
            <button className="flex flex-col justify-center items-center w-full p-1 bg-white border-[1px] py-8 border-[#b5d0f8] rounded-2xl font-Montserrat font-semibold xl:text-2xl transition-all ease-in-out hover:border-zoom-blue hover:text-zoom-blue hover:shadow-lg hover:shadow-zoom-blue/20">
                {icon}
                <p>{title}</p>
            </button>
        </li>
    )
}