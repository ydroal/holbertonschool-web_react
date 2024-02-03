import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils'

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders a copyright text contain "Copyright"', () => {
    expect(wrapper.text()).toContain('Copyright');
  });

  it('renders a copyright text', () => {
    expect(wrapper.find('p').text()).toBe(`Copyright ${getFullYear()} - ${getFooterCopy(true)}`);
  });
});