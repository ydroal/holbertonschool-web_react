import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('contain the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contain the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('contain the Login component', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('contain the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});
