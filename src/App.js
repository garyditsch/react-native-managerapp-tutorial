import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
