import React from 'react';
import { shallow } from 'enzyme';
import Summ from './';

describe('Summ test', () => {
  it('should match snapshoot', () => {
    const wrapper = shallow(<Summ />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should check initial state', () => {
    const expected = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0
    }
    const wrapper = shallow(<Summ />);
    expect(wrapper.state()).toEqual(expected);
  })

  it('should change the first and second number in the state', () => {
    const expected = {
      firstNumber: 5,
      secondNumber: 10,
      result: 0
    }
    const wrapper = shallow(<Summ />);
    const firstNumberInput = wrapper.find('[data-testid="firstNumber"]');
    const secondNumberInput = wrapper.find('[data-testid="secondNumber"]');
    firstNumberInput.simulate('change', { target: { value: '5' }, preventDefault: jest.fn() });
    secondNumberInput.simulate('change', { target: { value: '10' }, preventDefault: jest.fn() });
    expect(wrapper.state()).toEqual(expected);
  })

  it('should change the result when click on button', () => {
    const expected = {
      firstNumber: 5,
      secondNumber: 10,
      result: 15
    }
    const wrapper = shallow(<Summ />);
    wrapper.setState({ firstNumber: 5, secondNumber: 10 });
    const button = wrapper.find('[data-testid="button"]')
    button.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper.state()).toEqual(expected);
    const result = wrapper.find('[data-testid="result"]');
    expect(result.text()).toBe('15');
  })
});