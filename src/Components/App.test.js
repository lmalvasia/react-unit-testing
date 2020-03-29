import React from 'react';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from './App';

describe('Test React Component with React testing library', () => {
  it('should match snapshoot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('should render the title using data-testid', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('title')).toBeTruthy();
  })

  it('should render the body using data-testid', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('body')).toBeTruthy();
  })

  it('should render the footer using data-testid', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('footer')).toBeTruthy();
  })

  it('the title section should contain the title', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('title')).toHaveTextContent('Titulo')
  })
})

describe('Test React Component with Enzyme', () => {
  it('should match snapshoot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render the title using data-testid', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('[data-testid="title"]')).toBeTruthy();
  })

  it('should render the body using data-testid', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('[data-testid="body"]')).toBeTruthy();
  })

  it('should render the footer using data-testid', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('[data-testid="footer"]')).toBeTruthy();
  })

  it('the title section should contain the title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('[data-testid="title"]').text()).toBe('Titulo je')
    expect(wrapper.find('[data-testid="title"]').text()).toContain('Titulo')
  })
})

describe('Test React Component with React Test Renderer', () => {
  it('should match snapshoot', () => {
    const wrapper = TestRenderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  })

  it('should render the title using data-testid', () => {
    const wrapper = TestRenderer.create(<App />);
    const instance = wrapper.root;
    expect(instance.findByProps({'data-testid': 'title'})).toBeTruthy();
  })

  it('should render the body using data-testid', () => {
    const wrapper = TestRenderer.create(<App />);
    const instance = wrapper.root;
    expect(instance.findByProps({'data-testid': 'body'})).toBeTruthy();
  })

  it('should render the footer using data-testid', () => {
    const wrapper = TestRenderer.create(<App />);
    const instance = wrapper.root;
    expect(instance.findByProps({'data-testid': 'footer'})).toBeTruthy();
  })

  it('the title section should contain the title', () => {
    const wrapper = TestRenderer.create(<App />);
    const instance = wrapper.root;
    expect(instance.findByProps({'data-testid': 'title'}).children.join()).toContain('Titulo');
  })
})