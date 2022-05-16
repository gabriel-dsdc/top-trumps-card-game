import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { deckCards } = this.props;
    console.log(deckCards);
    return (
      <div>
        <h2>Todas as cartas</h2>
        { deckCards.map((card) => (
          <Card
            key={ card.nameInput }
            cardName={ card.nameInput }
            cardDescription={ card.descriptionInput }
            cardAttr1={ card.attr1Input }
            cardAttr2={ card.attr2Input }
            cardAttr3={ card.attr3Input }
            cardImage={ card.imageInput }
            cardRare={ card.rareInput }
            cardTrunfo={ card.trunfoInput }
          />
        )) }
      </div>
    );
  }
}

Deck.propTypes = {
  deckCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Deck;
