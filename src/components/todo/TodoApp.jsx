
import { BrowserRouter ,Routes,Route,Navigate} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodoComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'

function AuthenticatedRoute({children}){
  const {isAuthenticated}=useAuth();
  if(isAuthenticated)
  return children
return <Navigate to="/" />
}
const TodoApp = () => {
  return (
    <div className='TodoApp'>
        <AuthProvider>
        <BrowserRouter>
        <HeaderComponent/>
        <Routes>
<Route path='/' element={ <LoginComponent />}/>
<Route path='/login' element={ <LoginComponent />} />
<Route path='/welcome/:username' element={
  <AuthenticatedRoute>
    <WelcomeComponent/>
    </AuthenticatedRoute>
    }/>
<Route path='/todos' element={ 
    <AuthenticatedRoute>
  <ListTodoComponent/>
  </AuthenticatedRoute>
  }
  />
<Route path='/todos/:id' element={ 
    <AuthenticatedRoute>
  <TodoComponent/>
  </AuthenticatedRoute>
  }
  />
<Route path='/logout' element={ 
   <AuthenticatedRoute>
   <LogoutComponent/>
   </AuthenticatedRoute>
   }/>
<Route path='*' element={  <ErrorComponent/>}></Route>
        </Routes>
        </BrowserRouter> 
        </AuthProvider>
        </div>
  )
}

export default TodoApp

