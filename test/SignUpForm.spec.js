import React from 'react';
import Form from '../src/Examples/index.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Form />', () => {

  const cb = (args) => 23;

  // Shallow

  // it('should render the component', () => {
  //   const wrapper = shallow(<CommentList/>);
  //   expect(wrapper.find('.comments-list')).to.have.length(1);
  // });

  // Mount

  it('calls componentDidMount', () => {
    spy(Form.prototype, 'componentDidMount');

    const wrapper = mount(<Form />);
    expect(Form.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  // Render

  // it('renders a button name', () => {
  //   const wrapper = render(<CommentList buttonValue="myButton"/>);
  //   expect(wrapper.find('button').text()).to.contain('myButton');
  // });
  //
  // it('reverses the comments on the button click', () => {
  //   const wrapper = mount(<CommentList />);
  //
  //   wrapper.setState({ comments: ['hello'] });
  //   wrapper.find('button').simulate('click');
  //   expect(wrapper.state().comments[0]).to.equal('olleh');
  // });

});
