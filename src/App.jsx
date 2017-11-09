import React, {Component} from 'react';
import InputWithLabel from './components/ReactComponents/Input.js';

class App extends Component {
  render() {
    return ([
      <InputWithLabel
        label="Name"
        key={1}
      />,
      <InputWithLabel
        type="password"
        label="password"
        key={2}
      />,
      <InputWithLabel
        type="radio"
        label="gender"
      />,
      <InputWithLabel
        type="button"
        value="Click me"
        key={3}
      />
    ]);
  }
}
export default App;
