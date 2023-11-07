import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Anton_Kaulbach_Faust_und_MephistoFXD.jpg/1024px-Anton_Kaulbach_Faust_und_MephistoFXD.jpg" />
        <Card.Body>
          <Card.Title>Faust</Card.Title>
          <Card.Text>
          Johann Wolfgang von Goethe
          </Card.Text>
          <Card.Footer>
          <small className="text-muted">1790-1833</small>
        </Card.Footer>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.antikvariaat.eu/images/print/golem-romaan-17578.webp" width={353} height={435}/>
        <Card.Body>
          <Card.Title>Golem</Card.Title>
          <Card.Text>
          Gustav Meyrink
          </Card.Text>
          <Card.Footer>
          <small className="text-muted">1913</small>
        </Card.Footer>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41WLk9tMPYL._AC_UF894,1000_QL80_.jpg" width={353} height={435} />
        <Card.Body>
          <Card.Title>Les Enfants terribles</Card.Title>
          <Card.Text>
          Jean Cocteau 
          </Card.Text>
          <Card.Footer>
          <small className="text-muted">1931</small>
        </Card.Footer>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;