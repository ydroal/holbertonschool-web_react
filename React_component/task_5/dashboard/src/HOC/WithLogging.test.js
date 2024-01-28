import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('HOC', () => {
  it('should call console.log on mount and on unmount with pure html', () => {
    const ConsoleSpy = jest.spyOn(console, 'log');

    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = mount(<WrappedComponent />);
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');

    ConsoleSpy.mockRestore();
  });

  it('should call console.log on mount and on unmount with the component name when wrapping Login component', () => {
    const ConsoleSpy = jest.spyOn(console, 'log');

    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(ConsoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');

    ConsoleSpy.mockRestore();
  });
});
