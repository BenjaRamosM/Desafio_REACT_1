import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({imagen,nombre,descripcion,bcolor,btext})=>{
    return (
    <>
      <Card style={{width:"18rem"}}>
      <Card.Img variant = "top" src = {imagen}/>

        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
            <Tags 
            color={bcolor}
            texto={btext}
            />{}
        </Card.Body>
      </Card>
    </>
    );
};

export default MyCard;