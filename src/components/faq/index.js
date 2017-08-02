import React from 'react'
import { observer } from 'mobx-react'

@observer export default class Faq extends React.Component {
    focussed(){
         uiState.show('blockFocusVisible');

    }
    render() {
        return (

            <div className={"faq" + ((this.props.uiState.ui.faqBoxVisible) ? ' show' : '')}>
                <div className="block3">
                <div className="row">
                    <div className="block"><b>Prefer email instead?</b></div>
                    <div className="block"><button className="write"><i className="fa fa-envelope-o"></i> Write to us</button></div>
                    <div className="block query"> We are superquick in responding to your queries</div>
                </div>
                <div className="verticalLine"></div>
                </div>
                <div className="block3">
                <div><input className="input2" type="text" placeholder="What can we help you with? Start typing your question..."></input><button><svg className="svgplace" width="16px" height="16px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" strokeWidth="20px" fill="none" fillRule="evenodd">
                        <g transform="translate(-1023.000000, -99.000000)" fill="darkgrey">
                            <g transform="translate(1010.000000, -1.000000)">
                                <g transform="translate(0.000000, 1.000000)">
                                    <path d="M26.6115851,107.653397 C26.6115851,106.196238 26.0930991,104.949646 25.0576017,103.913916 C24.0218094,102.87848 22.7751425,102.360026 21.317896,102.360026 C19.8606494,102.360026 18.6139825,102.87848 17.5781902,103.913916 C16.5426928,104.949646 16.0242068,106.196238 16.0242068,107.653397 C16.0242068,109.110557 16.5426928,110.357149 17.5781902,111.392879 C18.6139825,112.428314 19.8606494,112.946769 21.317896,112.946769 C22.7751425,112.946769 24.0218094,112.428314 25.0576017,111.392879 C26.0930991,110.357149 26.6115851,109.110557 26.6115851,107.653397 L26.6115851,107.653397 Z M32.6611785,117.484577 C32.6611785,117.89362 32.5113543,118.248398 32.2128857,118.547734 C31.9135323,118.846185 31.5587321,118.996 31.1496649,118.996 C30.7234918,118.996 30.3695765,118.846185 30.0852645,118.547734 L26.0320487,114.506558 C24.6231706,115.4836 23.0506066,115.971974 21.317896,115.971974 C20.1912654,115.971974 19.113888,115.75315 18.0863537,115.315501 C17.0588194,114.878736 16.1728513,114.287733 15.4272696,113.543671 C14.6831625,112.799313 14.0921238,111.913398 13.6556282,110.884746 C13.217658,109.857273 13,108.77996 13,107.653397 C13,106.526834 13.217658,105.449521 13.6556282,104.422049 C14.0921238,103.394576 14.6831625,102.508661 15.4272696,101.763124 C16.1728513,101.019062 17.0588194,100.428058 18.0863537,99.9915889 C19.113888,99.5536449 20.1912654,99.336 21.317896,99.336 C22.4445266,99.336 23.5219039,99.5536449 24.5494382,99.9915889 C25.5781522,100.428058 26.4641204,101.019062 27.2085224,101.763124 C27.9526294,102.508661 28.5436681,103.394576 28.9804586,104.422049 C29.418134,105.449521 29.6369717,106.526834 29.6369717,107.653397 C29.6369717,109.386004 29.1485684,110.958474 28.1714671,112.367267 L32.2246829,116.42024 C32.5160732,116.711613 32.6611785,117.066392 32.6611785,117.484577 L32.6611785,117.484577 Z" id="Page-1"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg></button>
                </div>
                {/*<div className="col">
                    <div className="row1">
                        <div className={"block1" + ((this.props.uiState.ui.blockFocusVisible) ? ' show1': '')} onClick={this.focussed}><div className="textInside">Sharing Opening</div></div>
                        <div className={"block1" + ((this.props.uiState.ui.blockFocusVisible) ? ' show1': '')} onClick={this.focussed}><div className="textInside">Managing Opening</div></div>
                        <div className={"block1" + ((this.props.uiState.ui.blockFocusVisible) ? ' show1': '')} onClick={this.focussed}><div className="textInside">Managing Candidates</div></div>
                    </div>
                    <div className="row1">
                        <div className={"block1" + ((this.props.uiState.ui.blockFocusVisible) ? ' show1': '')} onClick={this.focussed}><div className="textInside">Account Management</div></div>
                        <div className={"block1" + ((this.props.uiState.ui.blockFocusVisible) ? ' show1': '')} onClick={this.focussed}><div className="textInside">Sourcing Candidates</div></div>
                        <div className={"block1" + ((this.props.uiState.ui.blockFocusVisible) ? ' show1': '')} onClick={this.focussed}><div className="textInside">Reporting</div></div>
                    </div>


                </div>*/}
             <div className="col">
                    <div className="row1">
                        <button className="block1" ><div><span className="fa-stack fa-lg"><i className="fa fa-circle-thin fa-stack-2x"/><i className="fa fa-folder fa-stack-1x"/></span></div><div>Sharing Opening</div></button>
                        <button className="block1" ><div><span className="fa-stack fa-lg"><i className="fa fa-circle-thin fa-stack-2x"/><i className="fa fa-folder fa-stack-1x"/></span></div>Managing Opening</button>
                        <button className="block1" ><div><span className="fa-stack fa-lg"><i className="fa fa-file-o fa-flip-horizontal fa-stack-2x"/><i className="fa fa-user fa-stack-1x"/></span></div>Managing Candidates</button>
                    </div>
                    <div className="row1">
                        <button className="block1" ><div><span className="fa-stack fa-lg"><i className="fa fa-sun-o fa-stack-2x"/><i className="fa fa-user fa-stack-1x"/></span></div>Account Management</button>
                        <button className="block1" ><div><span className="fa-stack fa-lg"><i className="fa fa-circle-thin fa-stack-2x"/><i className="fa fa-folder fa-stack-1x"/></span></div>Sourcing Candidates</button>
                        <button className="block1" ><div><span className="fa-stack fa-lg"><i className="fa fa-circle-thin fa-stack-2x"/><i className="fa fa-folder fa-stack-1x"/></span></div>Reporting</button>
                    </div>


                </div>
                </div>
            </div>

        )
    }
}