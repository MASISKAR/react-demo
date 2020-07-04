import React, { Component } from 'react';
import Text from './Text';
import Button from 'react-bootstrap/Button';


class Input extends Component {

    state = {
        text: '',
        inputText: ''
    }


inputChangeHandler = (event) => {
    const value = event.target.value;
    this.setState({
        inputText: value,
    });
}

buttonClickHandler = () => {
    const inputText = this.state.inputText;
    if (inputText) {
        this.setState({
            text: inputText,
            inputText: ''
        });
    }

}

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.inputChangeHandler}
                />
{/*                 <button
                    onClick={this.buttonClickHandler}
                >
                    Click me
            </button> */}
            <Button variant="primary">Primary</Button>
                <Text text={this.state.text} />

            </div>
        )
    }
}

export default Input;