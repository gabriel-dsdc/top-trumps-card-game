import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <div className="cardForm">
        <form>
          <h2>Adicionar nova carta</h2>
          <label htmlFor="nameInput">
            Nome
            <br />
            <input
              data-testid="name-input"
              id="nameInput"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="descriptionInput">
            Descrição
            <br />
            <textarea
              data-testid="description-input"
              id="descriptionInput"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1Input">
            Força&nbsp;&nbsp;
            <input
              data-testid="attr1-input"
              id="attr1Input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="attr2Input">
            Magia&nbsp;&nbsp;
            <input
              data-testid="attr2-input"
              id="attr2Input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="attr3Input">
            Inteligência&nbsp;&nbsp;
            <input
              data-testid="attr3-input"
              id="attr3Input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="imageInput">
            Imagem&nbsp;&nbsp;
            <input
              data-testid="image-input"
              id="imageInput"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rareInput">
            Raridade
            <br />
            <select
              data-testid="rare-input"
              id="rareInput"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
              <option
                value=""
                defaultValue
                hidden
                disabled
              >
                Selecione uma raridade
              </option>
            </select>
          </label>
          {hasTrunfo
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <label htmlFor="trunfoInput">
                <input
                  data-testid="trunfo-input"
                  id="trunfoInput"
                  type="checkbox"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trybe Trunfo
              </label>)}
          <br />
          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
