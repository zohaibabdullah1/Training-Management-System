import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TempCard({title,img}) {
  return (
    <Card style={{width:"15rem"}}>
      <Card.Img className='temp-img'  variant="top" src={img} alt={title}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="info">Click Here</Button>
      </Card.Body>
    </Card>
  );
}

export default TempCard;