import React from 'react'
import { observer } from 'mobx-react'


@observer export default class MailBox extends React.Component{
    send(){
        uiState.show('messageSentVisible')
    }
    render(){
        return(
            <div className={"mailBox" + ((this.props.uiState.ui.mailBoxVisible)? ' show': '')}>
               <div>
               {/*<div className={"messageSent" + ((uiState.ui.messageSentVisible) ? ' show' : '')}>
                   Message sent! Thanks for reaching out! Someone from our team will get back to you soon.
                   </div>*/}
            <div >
                <input className="to" type="text" disabled><div className={"mailTo" + ((uiState.ui.messageSentVisible) ? ' show' : ' show1')} ><b>To</b> support@recruiterbox.com</div></input>
            </div>
            
            <div >
                <input className="subject" type="text" placeholder="Subject"></input>
            </div>
            <div>
                <textarea className="message" type="text" placeholder="Message..."></textarea>
            </div>
            <div>
                <button className="attachment"><i className="fa fa-paperclip  icon-rotate-180" /> Attach Files</button>
                </div>
            <div>
                <button className="sendMail" onClick={this.send}>Send Mail</button>
            </div>
            </div>
            </div>
        )
    }
}
