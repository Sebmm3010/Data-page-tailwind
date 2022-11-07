import Typed from "react-typed";

export const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">MEJORA CON ANALISIS DE DATOS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">MEJORA TU DATA</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Financiamineto rapido y flexible para <span className="text-[#4c4c4c]">
                        <Typed
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                    </span>
                    </p>
                </div>
                <p className="md:text-2xl text-xl font-bold text-[#4c4c4c] mt-3 mx-3">Monitorea tus análisis de datos para aumentar los ingresos en las plataformas BTB, BTC y SASS.</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Comencemos</button>
            </div>
        </div>
    )
}
