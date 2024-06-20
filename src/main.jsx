import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'; 
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { Container } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Container>
        <App />
    </Container>
)
