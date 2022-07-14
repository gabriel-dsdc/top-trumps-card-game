import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { deckCards, handleDelete } = this.props;
    return (
      <div>
        <h2>Todas as cartas</h2>
        { deckCards.map((card) => (
          <React.Fragment key={ card.nameInput }>
            <Card
              cardName={ card.nameInput }
              cardDescription={ card.descriptionInput }
              cardAttr1={ card.attr1Input }
              cardAttr2={ card.attr2Input }
              cardAttr3={ card.attr3Input }
              cardImage={ card.imageInput }
              cardRare={ card.rareInput }
              cardTrunfo={ card.trunfoInput }
            />
            <button
              data-testid="delete-button"
              type="button"
              name={ `${card.nameInput}--${card.trunfoInput}` }
              onClick={ (e) => handleDelete(e) }
            >
              Excluir
            </button>
          </React.Fragment>
        )) }
      </div>
    );
  }
}

Deck.propTypes = {
  deckCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Deck;
