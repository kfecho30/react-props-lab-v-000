import React from 'react';

export default class Spaceship extends React.Component {
  <h1>{this.props.name}</h1>
  <p>{this.props.speed}</p> (number, defaults to slow)
hasRockets (boolean, defaults to false)
colors (array of strings, defaults to ['black', 'red'])
}

Spaceship.defaultProps{
  speed = 'slow'
  hasRockets = false
  colors = ['black', 'red']
}