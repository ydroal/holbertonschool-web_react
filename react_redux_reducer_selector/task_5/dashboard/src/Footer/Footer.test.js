import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
  });

  it('renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('the link is not displayed when the user is logged out within the context', () => {
    wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.containsMatchingElement(<a>Contact us</a>)).toBe(false);
  });

  it('the link is displayed when the user is logged in within the context', () => {
    wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true }, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.containsMatchingElement(<a>Contact us</a>)).toBe(true);
  });
});