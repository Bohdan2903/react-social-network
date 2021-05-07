import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    console.log(props, 'props')
    let state = props.dialogsPage;
    console.log(state, 'state')
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
        props.sendMessageCreator();
    };

  const onNewMessageChange= (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body);
    };
    if(!props.isAuth){
        return  <Redirect to={'/login'} />
    }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
        <div>
            <div>
                <textarea placeholder='Add message'
                          value={newMessageBody}
                          onChange={onNewMessageChange}>
                </textarea>
            </div>
             <div>
                <button onClick={onSendMessageClick} className={'btn btn-blue ' }>Send Message</button>
            </div>
        </div>
    </div>
  );
};

export default Dialogs;
