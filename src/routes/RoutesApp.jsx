import { Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Massages from '../pages/Massages'
import Tarot from '../pages/Tarot'
import Contact from '../pages/Contact'
import AcompañamientoEmocional from '../pages/AcompanamientoEmocional'
import MassageDetails from '../pages/MassageDetails'
import NotFound from '../pages/NotFound'
import ContinuousPage from '../pages/ContinuousPage'

function RoutesApp({ compact }) {
    return (
    <Routes>
        <Route path='/' element={compact ? <ContinuousPage /> : <Home />} />
        <Route path='/sobre-mi' element={compact ? <ContinuousPage /> : <About />} />
        <Route path='/masajes' element={compact ? <ContinuousPage /> : <Massages />} />
        <Route path='/masajes/:id' element={<MassageDetails />} />
        <Route path='/tarot' element={compact ? <ContinuousPage /> : <Tarot />} />
        <Route path='/acompanamiento-emocional' element={compact ? <ContinuousPage /> : <AcompañamientoEmocional />} />
        <Route path='/contact' element={compact ? <ContinuousPage /> : <Contact />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    );
}

export default RoutesApp;
