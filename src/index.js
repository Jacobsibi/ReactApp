import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

{/* render App component, trigger div with id of root
this allows us to inject entire react app within it */}

ReactDOM.render(<App />, document.getElementById('root'));