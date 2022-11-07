

export const CardItems = ({ img, title, price, storage, users, middle = false }) => {
    return (
        <div className="w-full my-shadow flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={img} alt="." />
            <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
            <p className='text-center text-4xl font-bold'>{price}</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">{storage} de Almacenamiento</p>
                <p className="py-2 border-b mx-8">{users}</p>
            </div>
            <button className={!middle
                                ? 'bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
                                : 'text-[#00df9a] bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
            }>Probar</button>
        </div>
    )
}
