import React from 'react';

export default class Spaceship extends React.Component {
  <h1>{this.props.name}</h1>
  <p>{this.props.speed}</p>
  <p>{this.props.hasRockets}</p>
  <p>{this.props.colors}.join(', ')</p>
}

Spaceship.defaultProps{
  speed = 'slow'
  hasRockets = false
  colors = ['black', 'red']
}
