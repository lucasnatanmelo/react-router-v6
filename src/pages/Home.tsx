import {Link} from 'react-router-dom';

export const Home = () =>{
    return (
        <div className='mb-4'>
            Página Home - <Link to="/sobre">Ir para página Sobre</Link>
        </div>
    )
}