import React from 'react';
import { mount } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {

    // to refactor the async request on component did mount before we can mock

    /*
    let props;
    let mountedHomePage;

    const homePage = () => {
        if (!mountedHomePage) {
            mountedHomePage = mount(
                <HomePage {...props} />
            );
        }
        return mountedHomePage;
    };

    beforeEach(() => {
        props = {
            className: null
        };
        mountedHomePage = undefined;
    });

    it('always renders a main', () => {
        const mains = homePage().find('main');
        expect(mains.length).toBeGreaterThan(0);
    });
    */

});
