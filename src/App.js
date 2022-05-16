import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    attr1Input: '0',
    attr2Input: '0',
    attr3Input: '0',
    imageInput: '',
    rareInput: '',
    trunfoInput: false,
    hasTrunfo: false,
    cardList: [],
  }

  initialState = this.state;

  handleChange = ({ target: { id, value, checked } }) => {
    if (id !== 'trunfoInput') {
      this.setState({ [id]: value });
    } else {
      this.setState({ [id]: checked });
    }
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardList, trunfoInput } = this.state;
    const card = this.state;
    delete card.cardList;
    delete card.hasTrunfo;
    if (trunfoInput === true) {
      this.initialState.hasTrunfo = true;
    }
    this.setState(this.initialState);
    this.setState({ rareInput: 'normal' });
    this.setState({ cardList: [...cardList, card] });
  }

  render() {
    const { nameInput, descriptionInput, attr1Input, attr2Input,
      attr3Input, imageInput, rareInput, trunfoInput, hasTrunfo } = this.state;

    const isButtonDisabled = () => {
      let isSaveButtonDisabled = true;
      const attrMaxValue = 90;
      const attrTotalValue = 210;
      const n1 = parseInt(attr1Input, 10);
      const n2 = parseInt(attr2Input, 10);
      const n3 = parseInt(attr3Input, 10);

      if (!nameInput || !descriptionInput || !imageInput || !rareInput) {
        isSaveButtonDisabled = true;
      } else if (n1 + n2 + n3 > attrTotalValue) {
        isSaveButtonDisabled = true;
      } else if ([n1, n2, n3].find((n) => n > attrMaxValue)) {
        isSaveButtonDisabled = true;
      } else if ([n1, n2, n3].find((n) => n < 0)) {
        isSaveButtonDisabled = true;
      } else {
        isSaveButtonDisabled = false;
      }

      return isSaveButtonDisabled;
    };

    return (
      <div className="cardCreation">
        <Form
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardImage={ imageInput }
          cardRare={ rareInput }
          cardTrunfo={ trunfoInput }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isButtonDisabled() }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <div className="preview">
          <h2>Pré-visualização</h2>
          <Card
            cardName={ nameInput }
            cardDescription={ descriptionInput }
            cardAttr1={ attr1Input }
            cardAttr2={ attr2Input }
            cardAttr3={ attr3Input }
            cardImage={ imageInput }
            cardRare={ rareInput }
            cardTrunfo={ trunfoInput }
          />
        </div>
      </div>
    );
  }
}

export default App;
