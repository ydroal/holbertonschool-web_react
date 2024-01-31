import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

// スタイル注入を抑制する
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// テスト後にスタイル注入を再開する
afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders a two input tag', () => {
    expect(wrapper.find('input').length).toBe(2);
  });

  it('renders a two label tag', () => {
    expect(wrapper.find('label').length).toBe(2);
  });
});