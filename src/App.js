import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
state = {
  nameInput: '',
  descriptionInput: '',
  attr1Input: '',
  attr2Input: '',
  attr3Input: '',
  imageInput: '',
  rareInput: '',
  trunfoInput: false,
}

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  render() {
    const { nameInput, descriptionInput, attr1Input, attr2Input,
      attr3Input, imageInput, rareInput, trunfoInput } = this.state;
    return (
      <div className="cardCreation">
        <Form onInputChange={ this.handleChange } />
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
    );
  }
}

export default App;
