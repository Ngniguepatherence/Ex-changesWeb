
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Apropos from './components/apropos';
import Signup from './components/signup';
import Signin from './components/signin';
import Private from'./components/private/private';
import PrivateHome from'./components/private/privateHome/privateHome';
import ServicePub from './components/apropos/servicePub';
import ServiceConv from './components/apropos/serviceConv';
import ServiceChat from './components/apropos/serviceChat';
import NewPub from './components/publication/NewAnnonce';
import Notif from './components/publication/notification';
import Echange from './components/publication/listExchange';

function App() {
    return ( 
        
        <BrowserRouter >
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/apropos' Component={Apropos}/>
                <Route path='/signup' Component={Signup}/>
                <Route path='/signin' Component={Signin}/>
                <Route path='/private' Component={Private}>
                    <Route path='/private/privateHome' Component={PrivateHome}/>
                </Route>
                <Route path='/servicePub'  Component={ServicePub}/>
                <Route path='/serviceConv'  Component={ServiceConv}/>
                <Route path='/serviceChat'  Component={ServiceChat}/>
                <Route  path='/NewPublication' Component={NewPub}/>
                <Route  path='/Notification' Component={Notif}/>
                <Route  path='/echange' Component={Echange}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;