import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

class Deck extends React.Component {
  state = {
    nameFilter: '',
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  };

  render() {
    const { nameFilter } = this.state;
    const { deckCards, handleDelete } = this.props;
    return (
      <section>
        <h2>Todas as cartas</h2>
        <h3>Filtros de busca</h3>
        <input
          data-testid="name-filter"
          type="text"
          id="nameFilter"
          value={ nameFilter }
          placeholder="Nome da carta"
          onChange={ this.handleChange }
        />
        <div className="deck">
          { deckCards.filter((card) => card.nameInput.includes(nameFilter))
            .map((card) => (
              <div key={ card.nameInput }>
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
              </div>
            )) }
        </div>
      </section>
    );
  }
}

Deck.propTypes = {
  deckCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Deck;
