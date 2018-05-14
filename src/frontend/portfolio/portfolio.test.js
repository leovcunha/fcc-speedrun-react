import React from 'react';
import renderer from 'react-test-renderer';
import TributePage from '../portfolio';

describe('portfolio', () => {
    it('renders without crashing', () => {
		const component = renderer.create(<Portfolio/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});