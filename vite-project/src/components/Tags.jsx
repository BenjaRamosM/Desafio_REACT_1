import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tags = ({color,texto}) =>{
    return (
        <>
            <Badge bg={color}>
            {texto}
            </Badge>
        </>
    );
};

export default Tags;