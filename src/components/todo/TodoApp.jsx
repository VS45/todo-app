
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodoComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider from './security/AuthContext'
const TodoApp = () => {
  return (
    <div className='TodoApp'>
        <AuthProvider>
        <BrowserRouter>
        <HeaderComponent/>
        <Routes>
<Route path='/' element={ <LoginComponent />}/>
<Route path='/login' element={ <LoginComponent />} />
<Route path='/welcome/:username' element={  <WelcomeComponent/>}/>
<Route path='/todos' element={  <ListTodoComponent/>}/>
<Route path='/logout' element={  <LogoutComponent/>}/>
<Route path='*' element={  <ErrorComponent/>}></Route>
        </Routes>
        </BrowserRouter>
        </AuthProvider>
        </div>
  )
}

export default TodoApp

