import React from 'react';
import renderer from 'react-test-renderer';
import TributePage from '../tribute-page';

describe('tribute-page', () => {
    it('renders without crashing', () => {
		const component = renderer.create(<TributePage/>).toJSON();
		expect(component).toMatchSnapshot();
    });
});