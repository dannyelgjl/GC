import {Routes, Route} from 'react-router-dom'
import {Home, Test} from '../screens';

const Router = () => (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/test' element={<Test />}/>
    </Routes>
)

export default Router;