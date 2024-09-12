import Card from 'react-bootstrap/Card';

function PricingCard(props) {
  return (
    <Card className="text-center  border-0">
      <Card.Header className='text-white p-4 fw-bold custom-bg-1 border-0'>{props.type}</Card.Header>
      <Card.Body className='px-1 border border-2 border-light'>
        <Card.Title ><span className='fw-bold fs-1'>${props.price}</span> <span className='fw-light custom-f-s'>/month</span></Card.Title>
        <Card.Text>
            <div className="mt-4">
                <p className="custom-f-s">Lorem, ipsum.</p>
                <p className="custom-f-s">Lorem, ipsum dolor.</p>
                <p className="custom-f-s">Lorem, ipsum.</p>
                <p className="custom-f-s">Lorem ipsum dolor sit.</p>
                <p className="custom-f-s">Lorem, ipsum.</p>
            </div>
        </Card.Text>


      </Card.Body>
      <Card.Footer className="text-muted  border-0">
        <button className='custom-bg-1 text-white border-0 rounded m-3 p-2 px-5'>Buy Now</button>
      </Card.Footer>
    </Card>
  );
}

export default PricingCard;