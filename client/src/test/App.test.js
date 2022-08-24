
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import App from '../App';

const AppWrapper = () => {

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({});
  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}

test('render application', () => {
  render(
    <AppWrapper>
      <App />
    </AppWrapper>
  )
});




