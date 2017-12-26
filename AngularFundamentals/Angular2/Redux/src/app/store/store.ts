import {
    createStore,
    applyMiddleware,
    compose,
    GenericStoreEnhancer
} from 'redux';
import freezeState from './freezeState';

import {IAppState} from './IAppState';
import {reducer} from './reducer';

declare var window:any;
const devToolsExtension: GenericStoreEnhancer = 
    (window.devToolsExtension) ? window.devToolsExtension() : (f) => f;

export const store = createStore<IAppState>(
    reducer,
    compose(applyMiddleware(freezeState), devToolsExtension) as GenericStoreEnhancer);