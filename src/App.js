import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyA4NtUlab2bOdrBHDcpT2F20jJBRtnUSFs",
            authDomain: "manager-23a8b.firebaseapp.com",
            databaseURL: "https://manager-23a8b.firebaseio.com",
            projectId: "manager-23a8b",
            storageBucket: "manager-23a8b.appspot.com",
            messagingSenderId: "395892294999"
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                    <Router />
            </Provider>
        );
    }
}

export default App;
