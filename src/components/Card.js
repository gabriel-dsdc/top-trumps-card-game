import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  componentDidUpdate = () => {
    const { cardRare } = this.props;
    const rarityColor = '--rarity-color';
    switch (cardRare) {
    case 'raro':
      document.documentElement.style.setProperty(rarityColor, 'blue');
      break;
    case 'muito raro':
      document.documentElement.style.setProperty(rarityColor, 'red');
      break;
    default:
      document.documentElement.style.setProperty(rarityColor, 'green');
      break;
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="card">
        {cardTrunfo
          ? (
            <p data-testid="trunfo-card" className="card-super-trunfo">Super Trunfo</p>)
          : ''}
        <h1 data-testid="name-card" className="card-title">{cardName}</h1>
        <div className="card-image__container">
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div className="card-info">
          <p data-testid="description-card" className="card-description">
            {cardDescription}
          </p>
          <span className="card-attr">
            <span data-testid="attr1-card">{cardAttr1}</span>
            <span data-testid="attr2-card">{cardAttr2}</span>
            <span data-testid="attr3-card">{cardAttr3}</span>
          </span>
          <p
            data-testid="rare-card"
            className="card-rarity"
          >
            {cardRare}
          </p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
