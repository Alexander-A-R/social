import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {sendMessage} from "../../redux/dialogs-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = state => {
    return {
        messages: state.dialogsPage.messages,
        interlocutors: state.dialogsPage.interlocutors,
    };
};

export default compose(withAuthRedirect, connect(mapStateToProps, {sendMessage}))(Dialogs);