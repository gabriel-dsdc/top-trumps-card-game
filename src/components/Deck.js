import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

class Deck extends React.Component {
  state = {
    nameFilter: '',
    rarityFilter: '',
    trumpFilter: false,
  }

  handleChange = ({ target: { id, value, checked } }) => {
    if (id !== 'trumpFilter') {
      this.setState({ [id]: value });
    } else {
      this.setState({ [id]: checked });
    }
  };

  render() {
    const { nameFilter, rarityFilter, trumpFilter } = this.state;
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
          disabled={ trumpFilter }
        />
        <select
          data-testid="rare-filter"
          id="rarityFilter"
          value={ rarityFilter }
          onChange={ this.handleChange }
          disabled={ trumpFilter }
        >
          <option defaultValue value="">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trumpFilter">
          <input
            data-testid="trunfo-filter"
            id="trumpFilter"
            type="checkbox"
            checked={ trumpFilter }
            onChange={ this.handleChange }
          />
          Super Trunfo
        </label>
        <div className="deck">
          { deckCards
            .reduce((acc) => {
              if (trumpFilter) {
                acc = acc.filter((card) => card.trunfoInput === trumpFilter);
              } else {
                acc = acc.filter((card) => card.nameInput.includes(nameFilter));
                if (rarityFilter) {
                  acc = acc.filter((card) => card.rareInput === rarityFilter);
                }
              }
              return acc;
            }, [...deckCards])
            .map((card, index) => (
              <div key={ card.nameInput + index }>
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
