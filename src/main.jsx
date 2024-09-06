import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'; 
import 'bootstrap/dist/css/bootstrap-grid.min.css';
// import react-bootstrap будет использоваться в конкретном компоненте, App было обернуто в Conteiner, что не давало возможности некоторым компонентам растянуться во всю ширину
//import { Container } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
    
        <App />
    
)
