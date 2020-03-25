import React, { Component } from 'react'
import Tour from '../Tour';
import './tourlist.scss';
import {tourData} from '../../tourData';




export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = (id) => {
    const sortTours = this.state.tours.filter((tour)=> tour.id !== id)
    this.setState({
      tours: sortTours
    })
  }
  render() {
    const {tours} = this.state;
    return (
      <section className="tourlist">
       {
         tours.map(tour => (<Tour key={tour.id} tours={tour} removeTour={this.removeTour} />))
       }
      </section>
    )
  }
}
