import React from 'react';
import { mount } from 'enzyme';
import LoadingSpinner from './loading-spinner';

describe('LoadingSpinner', () => {

    let props;
    let mountedLoadingSpinner;

    const loadingSpinner = () => {
        if (!mountedLoadingSpinner) {
            mountedLoadingSpinner = mount(
                <LoadingSpinner {...props} />
            );
        }
        return mountedLoadingSpinner;
    };

    beforeEach(() => {
        props = {
            className: null
        };
        mountedLoadingSpinner = undefined;
    });

    it('always renders a span', () => {
        const spans = loadingSpinner().find('span');
        expect(spans.length).toBeGreaterThan(0);
    });

});
