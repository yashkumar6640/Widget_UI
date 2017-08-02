// import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js';


import { observer } from 'mobx-react'

import './src/styles/main.scss'

import uiStore from './src/store/ui/uiStore.js';
import DetailStore from './src/store/domain/partials/DetailStore.js';

import Overlay from './src/components/Overlay/index.js';


const uiState = window.uiState = new uiStore()
const DetailState = window.DetailState = new DetailStore()

/*@observer class App3 extends React.Component {
    render() {
        return (
            <div>   <Overlay
                uiState={this.props.uiState}
                DetailState={this.props.DetailState}
            />
            </div>
        );
    }


}*/


ReactDOM.render(<Overlay
    uiState={uiState}
    DetailState={DetailState}
/>, document.getElementById('root'));
