import React from 'react';
import classes from './Content.module.css';
import MyProfile from '../MyProfile/MyProfile';
import Dialogs from '../Dialogs/Dialogs';
import {Route} from "react-router-dom";
import SliderPage from "../SliderPage/SliderPage";
import {DataDialogs} from '../../index';


function consumerDialogs(data) {
    return (
        <Route path={'/dialogs'}
               render={() => (
                   <Dialogs interlocutors={data.interlocutors}
                            messages={data.messages}
                   />
               )}
        />
    );
}

const Content = () => {
    return (
        <section className={classes.content}>
            <Route path={'/profile'} component={MyProfile} />
            <DataDialogs.Consumer>
                {consumerDialogs}
            </DataDialogs.Consumer>
            <Route path={'/slider'} component={SliderPage} />
        </section>
    );
};

export default Content;