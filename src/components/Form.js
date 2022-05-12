import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name-input">
          Nome
          <br />
          <input data-testid="name-input" id="name-input" type="text" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <br />
          <textarea data-testid="description-input" id="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Attr01&nbsp;&nbsp;
          <input data-testid="attr1-input" id="attr1-input" type="number" />
        </label>
        <label htmlFor="attr2-input">
          Attr02&nbsp;&nbsp;
          <input data-testid="attr2-input" id="attr2-input" type="number" />
        </label>
        <label htmlFor="attr3-input">
          Attr03&nbsp;&nbsp;
          <input data-testid="attr3-input" id="attr3-input" type="number" />
        </label>
        <label htmlFor="image-input">
          Imagem&nbsp;&nbsp;
          <input data-testid="image-input" id="image-input" type="text" />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <br />
          <select data-testid="rare-input" id="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
            <option selected hidden disabled>Selecione uma raridade</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input data-testid="trunfo-input" id="trunfo-input" type="checkbox" />
          Super Trybe Trunfo
        </label>
        <br />
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
