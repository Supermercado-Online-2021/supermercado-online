
import { Provider } from 'react-redux';
import { ThemeProvider} from 'styled-components';

import store from './store';

import GlobalStyles from './globalStyles';

import Routes from './Routes/';


import theme from './theme';



function App() {
    return (
        <Provider store={store} >
            <ThemeProvider theme={theme}>
                <GlobalStyles theme={theme} />

                <Routes />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
