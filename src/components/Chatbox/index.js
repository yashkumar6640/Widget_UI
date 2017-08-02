import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
var aimlHigh = require('aiml-high')
let nextId = 4;
var interpreter = new aimlHigh({ name: 'Bot', age: '42' }, 'Goodbye');
interpreter.loadFiles(['./test.aiml']);
// interpreter.loadFiles(['./dataset/alice.aiml.xml','./dataset/ai.aiml.xml', './dataset/astrology.aiml.xml', './dataset/atomic.aiml.xml', './dataset/badanswer.aiml.xml', './dataset/biography.aiml.xml', './dataset/bot_profile.aiml.xml', './dataset/bot.aiml.xml',
// './dataset/client_profile.aiml.xml', './dataset/client.aiml.xml', './dataset/computers.aiml.xml', './dataset/continuation.aiml.xml', './dataset/date.aiml.xml', './dataset/default.aiml.xml',
// './dataset/drugs.aiml.xml', './dataset/emotion.aiml.xml', './dataset/food.aiml.xml', './dataset/geography.aiml.xml', './dataset/gossip.aiml.xml', './dataset/history.aiml.xml',
// './dataset/humor.aiml.xml', './dataset/imponderables.aiml.xml', './dataset/inquiry.aiml.xml', './dataset/interjection.aiml.xml', './dataset/iu.aiml.xml', './dataset/knowledge.aiml.xml',
// './dataset/literature.aiml.xml', './dataset/loebner10.aiml.xml', './dataset/money.aiml.xml', './dataset/movies.aiml.xml', './dataset/mp0.aiml.xml', './dataset/mp1.aiml.xml', './dataset/mp2.aiml.xml',
// './dataset/mp3.aiml.xml', './dataset/mp4.aiml.xml', './dataset/mp5.aiml.xml', './dataset/mp6.aiml.xml', './dataset/music.aiml.xml', './dataset/numbers.aiml.xml', './dataset/personality.aiml.xml', './dataset/phone.aiml.xml',
// './dataset/pickup.aiml.xml', './dataset/politics.aiml.xml','./dataset/primeminister.aiml.xml', './dataset/primitive-math.aiml.xml', 
// './dataset/psychology.aiml.xml', './dataset/reduction.names.aiml.xml', './dataset/reduction0.safe.aiml.xml','./dataset/reduction2.safe.aiml.xml', './dataset/reduction3.safe.aiml.xml',
// './dataset/reduction4.safe.aiml.xml', './dataset/reductions-update.aiml.xml', './dataset/religion.aiml.xml','./dataset/salutations.aiml.xml', './dataset/science.aiml.xml',
// './dataset/sex.aiml.xml', './dataset/sports.aiml.xml', './dataset/stack.aiml.xml','./dataset/stories.aiml.xml', './dataset/that.aiml.xml', './dataset/update_mccormick.aiml.xml', './dataset/update1.aiml.xml',
// './dataset/wallace.aiml.xml','./dataset/xfind.aiml.xml' ]);
//  interpreter.loadFiles(['./dataset/alice.aiml','./dataset/ai.aiml', './dataset/astrology.aiml', './dataset/atomic.aiml', './dataset/badanswer.aiml', './dataset/biography.aiml', './dataset/bot_profile.aiml', './dataset/bot.aiml',
// './dataset/client_profile.aiml', './dataset/client.aiml', './dataset/computers.aiml', './dataset/continuation.aiml', './dataset/date.aiml', './dataset/default.aiml',
// './dataset/drugs.aiml', './dataset/emotion.aiml', './dataset/food.aiml', './dataset/geography.aiml', './dataset/gossip.aiml', './dataset/history.aiml',
// './dataset/humor.aiml', './dataset/imponderables.aiml', './dataset/inquiry.aiml', './dataset/interjection.aiml', './dataset/iu.aiml', './dataset/knowledge.aiml',
// './dataset/literature.aiml', './dataset/loebner10.aiml', './dataset/money.aiml', './dataset/movies.aiml', './dataset/mp0.aiml', './dataset/mp1.aiml', './dataset/mp2.aiml',
// './dataset/mp3.aiml', './dataset/mp4.aiml', './dataset/mp5.aiml', './dataset/mp6.aiml', './dataset/music.aiml', './dataset/numbers.aiml', './dataset/personality.aiml', './dataset/phone.aiml',
// './dataset/pickup.aiml', './dataset/politics.aiml','./dataset/primeminister.aiml', './dataset/primitive-math.aiml', 
// './dataset/psychology.aiml', './dataset/reduction.names.aiml', './dataset/reduction0.safe.aiml','./dataset/reduction2.safe.aiml', './dataset/reduction3.safe.aiml',
// './dataset/reduction4.safe.aiml', './dataset/reductions-update.aiml', './dataset/religion.aiml','./dataset/salutations.aiml', './dataset/science.aiml',
// './dataset/sex.aiml', './dataset/sports.aiml', './dataset/stack.aiml','./dataset/stories.aiml', './dataset/that.aiml', './dataset/update_mccormick.aiml', './dataset/update1.aiml',
// './dataset/wallace.aiml','./dataset/xfind.aiml' ]);
// interpreter.loadFiles(['./dataset/reduction2.safe.aiml']);
// interpreter.loadFiles(['./test.aiml', './ai.aiml', './alice.aiml']);
//@observer export default class Chatbox extends React.Component{
var Chatbox = observer(React.createClass({

    addMessage() {
        const messages = this.state.messages;
        messages.unshift({ id: nextId, text: 'Post ' + nextId });
        nextId++;
        this.setState({ messages: messages });
    },
    getInitialState() {

        return {
            input: '',
            query: 'hello',
            messages: [
                { id: 1, text: 'Hello.', flag: false },
                // {id: 2,text: 'Second one'},
                // {id: 3,text: 'Third one'},
            ],
        };
    },
    
    
    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleClick(e);
        }
    },
    handleChange(e) {
        //   alert('in handle change')
        this.setState({ input: e.target.value })
        //   alert(this.state.query)
    },
    chatHide() {
        this.props.uiState.hide('chatBoxVisible');
    },
   
    handleClick(e) {
        // alert(this.state.input);
        //this.setState({ query: DetailState.chat.a})

        const messages = this.state.messages;
        messages.unshift({ id: nextId, text: this.state.input, flag: true });
        nextId++;
        this.setState({ messages: messages });


        // var interpreter = new aimlHigh({name:'Bot', age:'42'}, 'Goodbye');
        // // interpreter.loadFiles(['./test.aiml', './ai.aiml', './alice.aiml']);
        // interpreter.loadFiles(['./alice.aiml','./ai.aiml', './astrology.aiml', './atomic.aiml', './badanswer.aiml', './biography.aiml', './bot_profile.aiml', './bot.aiml',
        // './client_profile.aiml', './client.aiml', './computers.aiml', './continuation.aiml', './date.aiml', 'default.aiml',
        // './drugs.aiml', './emotion.aiml', './food.aiml', './geography.aiml', './gossip.aiml', './history.aiml',
        // './humor.aiml', './imponderables.aiml', './inquiry.aiml', './interjection.aiml', './iu.aiml', './knowledge.aiml',
        // './literature.aiml', './loebner10.aiml', './money.aiml', './movies.aiml', './mp0.aiml', './mp1.aiml', './mp2.aiml',
        // './mp3.aiml', './mp4.aiml', './mp5.aiml', './mp6.aiml', './music.aiml', './numbers.aiml', './personality.aiml', './phone.aiml',
        // './pickup.aiml', './politics.aiml','./primeminister.aiml', './primitive-math.aiml', 
        // './psychology.aiml', './reduction.names.aiml', './reduction0.safe.aiml','./reduction2.safe.aiml', './reduction3.safe.aiml',
        // './reduction4.safe.aiml', './reductions-update.aiml', './religion.aiml','./salutations.aiml', './science.aiml',
        // './sex.aiml', './sports.aiml', './stack.aiml','./stories.aiml', './that.aiml', './update_mccormick.aiml', './update1.aiml',
        // './wallace.aiml','./xfind.aiml' ]);
        var callback = function (answer, wildCardArray, input) {
            DetailState.chat.a = answer;
            messages.unshift({ id: nextId, text: answer, flag: false })
            nextId++;
        }
        interpreter.findAnswer(this.state.input, callback);
        this.setState({ messages: messages });


        this.setState({ input: '' })
    },
    componentDidMount(){
        var that = this;
        document.getElementById("subversion").addEventListener('click', that.changeInputState, false);
        document.getElementById("git").addEventListener('click', that.changeInputState, false);

    },
    changeInputState(e){
        this.setState({
            input: e.target.value
        })
        this.handleClick(e);
    },
    render() {
        return (
            <div className={"chatContainer" + ((this.props.uiState.ui.chatBoxVisible) ? '' : " hide")}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5" style={{ left: "25%", width: "320px", bottom: "120px" }}>
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    RecruiterBox<button className="cross" onClick={this.chatHide}>x</button>

                                </div>
                                <div className="panel-body">

                                    <ul className="chat">
                                        {this.state.messages.map((message, index) => {
                                            return (<Message message={message} key={message.id} id={message.id} flag={message.flag} />);
                                        })}

                                    </ul>

                                </div>
                                <div className="suggestions">
                                    <button id="subversion" className="suggestButtons" value='subversion' >svn</button>
                                    <button id="git" className="suggestButtons" value="git">git</button>
                                </div>

                                <div className="panel-footer">

                                    <div className="input-group">
                                        <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." value={this.state.input} onChange={this.handleChange} onKeyPress={this._handleKeyPress} />
                                        <span className="input-group-btn">
                                            <button  className="btn btn-warning btn-sm" id="btn-chat" onClick={this.handleClick}>
                                                {/*<button className="btn btn-warning btn-sm" id="btn-chat" onClick={this.addMessage}>*/}

                                                Send</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}))

module.exports = Chatbox;

class Message extends React.Component {
    render() {
        if (this.props.flag) {
            return (<li className="left clearfix"><span className="chat-img pull-left">
                {/*<img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" className="img-circle" />*/}
            </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        {/*<strong className="primary-font" id ="user" style={{float: 'right'}}>User</strong> 
                                    <small className="pull-right text-muted">
                                        {/*<span className="glyphicon glyphicon-time"></span>12 mins ago</small>*/}
                        {/*</small>*/}
                    </div>
                    <p className="chatbubble" style={{ "float": "right", "color": "white", "background-color": "#747862" }}>
                        {this.props.message.text}
                    </p>
                </div>
            </li>

            )
        }
        else {
            return (<li className="right clearfix"><span className="chat-img pull-right">
                {/*<img src="http://placehold.it/50/FA6F57/fff&amp;text=ME" alt="User Avatar" className="img-circle" />*/}
            </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <small className=" text-muted">
                            {/*<span className="glyphicon glyphicon-time"></span>13 mins ago*/}
                        </small>
                        {/*<strong className="pull-right primary-font" id="bot">Bot</strong>*/}
                    </div>
                    <p className="chatbubble" style={{ "color": "black" }}>
                        {this.props.message.text}
                    </p>
                </div>
            </li>
            )
        }
    }
}