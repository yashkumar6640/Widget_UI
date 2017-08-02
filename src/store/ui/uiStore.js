import { observable, action } from 'mobx'

export default class uiStore{

@observable ui = {

   
    overlayVisible: true,
    chatBoxVisible: false,
    messageSentVisible: false,
    mailUsClick: true,
    faqclick: false,
    livechatclick: false,
    mailBoxVisible: false,
    faqBoxVisible: false,
    livechatBoxVisible: false,
    blockFocusVisible:false
    


    }

@action toggle(property){
    this.ui[property] = !this.ui[property]
}

@action show(property){
    this.ui[property] = true
}
@action hide(property){
    this.ui[property]=false;
}
@action hideAllTabs(){
    this.ui.mailUsClick=false
    this.ui.faqclick=false
    this.ui.livechatclick=false
    this.ui.mailBoxVisible=false
    this.ui.faqBoxVisible=false
    this.ui.livechatBoxVisible=false
    this.ui.messageSentVisible=false
    this.ui.blockFocusVisible=false

}

@action hideAll(){
    Object.keys(this.ui).reduce((previous, key) => {
this.ui[key]=false;

    }, 0)
    return true;
}


}