import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('renders correctly children and an h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    const h2 = wrapper.find('h2');
    expect(h2.length).toBe(1);
    expect(h2.text()).toBe('test title');

    const p = wrapper.find('p');
    expect(p.length).toBe(1);
    expect(p.text()).toBe('test children node');
  });
});
