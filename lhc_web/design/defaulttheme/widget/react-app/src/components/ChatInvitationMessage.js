import React, { PureComponent } from 'react';

class ChatInvitationMessage extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        let classProfile = "operator-info d-flex mb10 round-profile";

        if (this.props.mode == 'profile_only') {
            classProfile +=" mt-1 ml-1 mr-1";
        } else {
            classProfile +=" mt-2";
        }

        if (this.props.mode == 'message') {
            return (
                <div className="message-row message-admin">
                    <span className="usr-tit op-tit">{this.props.invitation.name_support || this.props.invitation.extra_profile}</span>
                    <div className="msg-body" dangerouslySetInnerHTML={{__html:this.props.invitation.message}}></div>
                </div>
            );
        } else {
            return (
                <React.Fragment>
                    <div className={classProfile}>
                         <div>
                             {this.props.invitation.photo && <img src={this.props.invitation.photo} title={this.props.invitation.photo_title} alt=""/>}
                             {!this.props.invitation.photo && <i className="icon-assistant material-icons">account_box</i>}
                         </div>
                         <div className="p-1 w-100">
                             <div>
                                 <strong>{this.props.invitation.name_support || this.props.invitation.extra_profile}<br/></strong>
                                 {this.props.invitation.name_support && <span><i>{this.props.invitation.extra_profile}</i></span>}
                            </div>
                        </div>
                    </div>
                    {this.props.mode != 'profile_only' &&
                    <div className="message-row message-admin pt-1 text-left">
                        <div className="msg-body" dangerouslySetInnerHTML={{__html:this.props.invitation.message}}></div>
                    </div>}
                </React.Fragment>
            );
        }
    }
}

export default ChatInvitationMessage;
