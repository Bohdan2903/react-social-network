import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
 

  let dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
  
  let messageElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>);

  const newMessageText = React.createRef();

  const addNewMessage = () => {
        alert(newMessageText.current.value);
    };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
        <div><textarea ref={newMessageText}></textarea></div>
        <div>
            <button onClick={addNewMessage}>Send Message</button>
        </div>
    </div>
  );
};

export default Dialogs;
