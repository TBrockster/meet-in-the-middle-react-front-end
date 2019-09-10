import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Miscellaneous extends React.Component {

  render() {
    console.log('HERE!!!!!!!!!')
    console.log(this.props.places.miscellaneous)
    if (this.props.places !== undefined) {
      this.props.setMidlRequest(false)
    }
    if (this.props.places.miscellaneous !== undefined) {
    return (
      this.props.places.miscellaneous.map(function(place, i){
        return <div key={i}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title><Card.Link style={linkStyle} href={`https://www.google.com/search?q=${place.name}+${place.vicinity}`}>{place.name}</Card.Link></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem style={listStyle}>{`${place.rating} ${'★'.repeat(Math.round(place.rating))} (${place.user_ratings_total})`}</ListGroupItem>
                      <ListGroupItem>{place.vicinity}</ListGroupItem><br></br>
                    </ListGroup>
                  </Card>
                </div>
      })
    )
  } else {
    return 'this is too hacky'
  }
}
}
const listStyle = {
  color: 'orange',
  fontFamily: 'Roboto Condensed'
}

const linkStyle = {
    color: '#9B5F8C',
    textDecoration: 'none',
    fontFamily: 'Roboto Condensed'
}

export default Miscellaneous;