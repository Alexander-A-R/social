import React from 'react';
import classes from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: ''
    };

    componentDidMount() {
        this.setState({status: this.props.status});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        if (this.props.status !== this.state.status) {
            this.props.putStatus(this.state.status);
        }
    };

    changeStatusState = (e) => {
        this.setState({status: e.currentTarget.value});
    };

    render() {
        return <div>
            {!this.state.editMode ?
                <span onClick={this.activateEditMode} className={classes.status}>
                {this.state.status || '...'}
            </span> :
                <input value={this.state.status}
                       autoFocus={true}
                       onBlur={this.deactivateEditMode}
                       onChange={this.changeStatusState}
                />}
        </div>
    }
}

export default ProfileStatus;