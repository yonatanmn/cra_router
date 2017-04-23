import React from 'react';
import PropTypes from 'prop-types';

import createRouterContext from 'react-router-test-context'
import { mount } from 'enzyme';
let wrapper;
import AnotherComponent from './AnotherComponent.js';
import {history} from './Stores/Router';

const context = createRouterContext({history});

AnotherComponent.contextTypes = {
  router: PropTypes.object
};

describe('tests', () => {
  beforeAll(()=>{
    wrapper = mount(<AnotherComponent />, { context });
  });
  it('renders only base', ()=>{
    expect(wrapper.find('.comp').length).toEqual(1);
  });


  it(' change path', async ()=>{
    function assertCorrectPath(ev) {
      expect(ev.pathname).toEqual('/a'); //works
      expect(wrapper.find('.comp').length).toEqual(2); //fails
    }

    wrapper.context().router.history.push('a');
    // history.push('a'); tries this variation also
    await wrapper.context().router.history.subscribe(assertCorrectPath);
  })
});
