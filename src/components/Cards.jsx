import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';
import { CardItems } from './';

export const Cards = () => {
    return (
        <div className='w-full py-[10rem] bg-white px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <CardItems img={single} title={'Plan Personal'} price={'$149,99'} storage={'500 GB'} users={'1 Usuario autorizado'} />
                <CardItems img={double} title={'Plan Multiple'} middle={true} price={'$199,99'} storage={'1 TB'} users={'3 Usuarios autorizados'} />
                <CardItems img={triple} title={'Plan Ejecutivo'} price={'$299,99'} storage={'5 TB'} users={'10 Usuarios autorizados'} />
            </div>
        </div>
    )
}
