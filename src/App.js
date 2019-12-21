import React, {Component} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {getInitialApp, initializeApp} from "./redux/app-reducer";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialApp) {
            return <Preloader />
        }
        return (
            <div className={'wrapper'}>
                <HeaderContainer/>
                <Sidebar/>
                <Content/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        initialApp: getInitialApp(state)
    };
};

export default connect(mapStateToProps, {initializeApp})(App);