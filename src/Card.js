import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Cards({img}){
  
    const navigate = useNavigate();
    function Enroll_Nav(){
      navigate("/enroll"); 
    }
    
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
              <Button variant="dark " className='btn' onClick={Enroll_Nav}>Enrole Now</Button>
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
}
export default Cards;