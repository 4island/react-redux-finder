import React from 'react';
import { shallow, mount } from 'enzyme';
import Store from '../../redux/Store';

// Component to be tested
import ComponentFilter from './ComponentFilter';


describe('<ComponentFilter />', () => {

    describe('successfully calls the onClick handler', () => {
        const searchMock = jest.fn();

        beforeEach(() => {
            const wrapper = shallow(
                <ComponentFilter
                    changeFilter={searchMock}
                    store={Store}
                />
            );
        });

        describe('component methods', () => {
            let instance;
            beforeEach(() => {
                const wrapper = shallow(
                    <ComponentFilter
                        changeFilter={searchMock}
                        store={Store}
                    />
                );
                instance = wrapper.instance();
            });

            it('calls search method', () => {
                beforeEach(() => {
                    expect(instance.ComponentFilter.search()).toHaveLength(1);
                });
            });
    
            it('calls nameChange method', () => {
                beforeEach(() => {
                    expect(instance.ComponentFilter.nameChange()).toHaveLength(1);
                });
            });

    
            it('calls change method', () => {
                beforeEach(() => {
                    expect(instance.ComponentFilter.change()).toHaveLength(1);
                });
            });
        });

    });
});