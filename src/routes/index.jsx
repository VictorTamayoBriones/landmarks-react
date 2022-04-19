import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { Landmark } from '../components/Landmark';

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/ladmark:id' element={ <Landmark/> }/>
        </Routes>
    )
}