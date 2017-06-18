import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { CarOfTheWeek } from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '' };
  }

  componentWillMount() {
    this.setState({ description: 'The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016.' });
  }

  render() {
    return (
      <CarOfTheWeek description={this.state.description} />
    );
  }
}

const carOfTheWeekQuery = gql`
  query carOfTheWeek {
    carOfTheWeek {
      review
      maker {
        name
      }
      model {
        name
        price
        imageUrl
      }
    }
  }
 `;


export default graphql(carOfTheWeekQuery)(Home);
