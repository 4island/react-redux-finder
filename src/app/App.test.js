import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Store from '../redux/Store'; 

// Components to be tested
import App from './App';
import { ComponentTable } from '../components/table/ComponentTable';
import  ComponentFilter  from '../components/filter/ComponentFilter';


describe('<App/>', () => {

    test('renders the full DOM App', () => {
        const wrapper = mount(
            <Provider store={Store}>
            <App />
            </Provider>
        );
        expect(wrapper.exists()).toBe(true);
    });

    test('render the single Component', () => {
        const wrapper = shallow(<App store={Store} />);  

        const filter = wrapper.dive(ComponentFilter);
        const table = wrapper.dive(ComponentTable);
    
        expect(filter.exists()).toBe(true);
        expect(table.exists()).toBe(true);
    });



});