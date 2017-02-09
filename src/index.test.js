import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {

    it('renders correctly', () => {
        expect(shallow(<App />).hasClass('container')).to.equal(true)
    })

})
