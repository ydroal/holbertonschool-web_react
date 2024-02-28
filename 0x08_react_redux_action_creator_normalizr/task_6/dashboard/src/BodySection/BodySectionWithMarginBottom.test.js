import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils, css } from 'aphrodite';
import BodySectionWithMarginBottom, { styles } from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom', () => {
  it('renders correctly a BodySection component and passes props to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);
    expect(bodySection.length).toBe(1);

    expect(bodySection.props().title).toBe('test title');
    expect(bodySection.props().children.type).toBe('p');
    expect(bodySection.props().children.props.children).toBe('test children node');

    // CSSを確認
    expect(wrapper.find(`.${css(styles.bodySectionWithMargin)}`).length).toBe(1);
  });
});
