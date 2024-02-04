import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils, css } from 'aphrodite';
import Header from './Header';
import AppContext from '../App/AppContext';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Header', () => {
  it('renders without crashing with default context value', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('renders logoutSection when user is defined and isLoggedIn is true', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'user@test.com' }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
  });

  it('clicking on the logout link calls the logOut function from context', () => {
    const logOutMock = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'user@test.com' }, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});
