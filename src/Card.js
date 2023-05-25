import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Cards({img}){
    return(

        <div >
      <Col>
          <Card className='cat-cards'>
            <Card.Img className='cat-img' variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="dark " className='btn'>Enrole Now</Button>
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
}
export default Cards;