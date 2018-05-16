import React from 'react';
import renderer from 'react-test-renderer';
import Portfolio from '../portfolio';

describe('portfolio', () => {
    it('renders without crashing', () => {
		const component = renderer.create(<div><Portfolio/></div>).toJSON();
		expect(component).toMatchSnapshot();
    });
});