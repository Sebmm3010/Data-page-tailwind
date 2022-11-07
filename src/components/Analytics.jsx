import laptop from "../assets/laptop.jpg";

export const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={laptop} alt="laptop" className="hidden md:block w-[500px] mx-auto my-4" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold underline">DASHBOARD PARA ANALISIS DE DATOS</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Administrar el analisis de datos de manera centralizada</h1>
                    <p>
                        Sit sit voluptate dolor non dolore commodo elit qui magna nostrud voluptate quis Lorem laboris. Excepteur duis aute adipisicing elit nulla proident id sint labore id qui. Ut id aliquip esse mollit minim est voluptate in.Ut id aliquip esse mollit minim est.
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">Comencemos</button>
                </div>
            </div>
        </div>
    )
}
