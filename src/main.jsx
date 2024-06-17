import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Container>
        <App />
    </Container>
)
