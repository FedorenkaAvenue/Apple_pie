import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import reducers from '@reducers/index';
import rootSaga from './rootSaga';
import IState from '@interfaces/State';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleWare)
    )
);

sagaMiddleWare.run(rootSaga);

export const { withRedux } = createWrapper<IState>(() => store);

export default store;
