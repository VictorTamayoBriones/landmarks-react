import { Routes, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { Landmark } from '../views/Landmark';

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/ladmark:id' element={ <Landmark/> }/>
        </Routes>
    )
}