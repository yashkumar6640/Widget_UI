import React from 'react'
import { observer } from 'mobx-react'
import MailBox from '../MailBox/index.js'
import Faq from '../faq/index.js'
// import Chatbox from '../Chatbox/index.js'

@observer export default class Overlay extends React.Component {
    callMail() {
        uiState.hideAllTabs();
        uiState.show('mailUsClick');
        uiState.show('mailBoxVisible');
    }
    callFAQ() {
        uiState.hideAllTabs();
        uiState.show('faqclick');
        uiState.show('faqBoxVisible')
    }
    callLiveChat() {
        uiState.hideAllTabs();
        uiState.show('livechatclick');
        // uiState.show('chatBoxVisible');
    }
    render() {
        return (

            <div className={'overlay-page' + ((this.props.uiState.ui.overlayVisible) ? ' show' : ' ')}>

                {/*<div className = "footer"></div>*/}
                <div className="pos">
                    <div className={"tabs" + ((uiState.ui.messageSentVisible) ? ' increase' : '')}>
                        {/*<div className="cross"><div className="tab-cross "><div className="center"><i className=" fa fa-close " /></div></div></div>*/}
                        <div className="tab" style={{"left":"60px", "margin-left":"-120px"}}><div className="tab-box" style={{"backgroundColor" : "#666666"}} ></div><div className="texts showCross" style={{"color":"white"}}><i className=" fa fa-close " /></div></div>

                        <div>
                            <div className={"tab" + ((this.props.uiState.ui.mailUsClick) ? ' active' : '')}><div className="tab-box" onClick={this.callMail}></div><div className="texts" onClick={this.callMail}><i className="fa fa-envelope-o" /> Mail Us</div></div>
                            <div className={"tab" + ((this.props.uiState.ui.faqclick) ? ' active' : '')}><div className="tab-box" onClick={this.callFAQ}></div><div className="texts" onClick={this.callFAQ}><i className="fa fa-search" /> FAQ</div></div>
                            <div className={"tab" + ((this.props.uiState.ui.livechatclick) ? ' active' : '')}><div className="tab-box" onClick={this.callLiveChat}></div><div className="texts" onClick={this.callLiveChat}><i className="fa fa-envelope" /> Live Chat</div></div>
                        </div>

                    </div>
                    <div className={"contentBox" + ((uiState.ui.faqBoxVisible) ? " faqbox" : '')} >
                        {/*<div className="contentBox">*/}
                        <div className={"content" + ((uiState.ui.messageSentVisible) ? ' increase' : '') + ((uiState.ui.faqBoxVisible) ? " expand" : '')}>
                            <div className={"messageSent" + ((uiState.ui.messageSentVisible) ? ' show' : '')}>
                                <i className="fa fa-check"></i> Message sent! Thanks for reaching out! Someone from our team will get back to you soon.
                   </div>
                            <MailBox
                                uiState={uiState}
                                DetailState={DetailState}
                            />
                            <Faq
                                uiState={uiState}
                                DetailState={DetailState}
                            />
                            {/*<Chatbox
                            uiState={uiState}
                                DetailState={DetailState}
                            />*/}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}