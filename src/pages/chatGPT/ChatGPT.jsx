import React, { useState } from "react";
import gptLogo from "../../assets/Images/chatgpt.svg";
import "./chat.css";
import addBtn from "../../assets/Images/add-30.png";
import "./chat.css";
import msgIcon from "../../assets/Images/message.svg";
import "./chat.css";
import home from "../../assets/Images/home.svg";
import saved from "../../assets/Images/bookmark.svg";
import rocket from "../../assets/Images/rocket.svg";
import sendBtn from "../../assets/Images/send.svg";
import userIcon from "../../assets/Images/user-icon.png";
import gptImgLogo from "../../assets/Images/chatgptLogo.svg";
// import { sendMsgToOpenAI } from "../../openAi";
// import { Configuration, OpenApi } from "openai";
import OpenAI from "openai";

export default function ChatGPT() {
  const [input, setInput] = useState("");
  const openai = new OpenAI();

  const handleSend = async () => {};

  return (
    <div className="App">
      <div className="sidebarChat">
        <div className="upperSideChat">
          <div className="upperSideTopChat">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>

            <button className="midBtn">
              <img src={addBtn} alt="new chat" className="addButton" />
              New Chat
            </button>
            <div className="upperSideBottomChat">
              <button className="query">
                <img src={msgIcon} alt="Query" />
                What is Programming ?
              </button>

              <button className="query">
                <img src={msgIcon} alt="Query" />
                What to use an Api ?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemImg" /> Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemImg" /> Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemImg" /> Upgrade to pro
          </div>
        </div>
      </div>
      <div className="mainChat">
        <div className="chats">
          <div className="chat ">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              fugiat, vero error iste ullam eveniet officiis nostrum odit sint
              sequi sunt possimus quis consequuntur id temporibus perspiciatis
              ipsam dolorem perferendis pariatur necessitatibus tempora
              distinctio! Dignissimos tenetur velit eligendi consequuntur hic
              quam debitis pariatur sunt animi voluptate sint voluptates
              recusandae quo ipsa quia quibusdam sed, modi expedita sequi
              aspernatur qui magni? Dolorum autem neque repudiandae ratione, est
              temporibus necessitatibus quam tenetur aliquam aut ea accusantium
              reiciendis. Qui delectus, iste officia adipisci perferendis
              inventore, repudiandae unde odit, magnam omnis id veniam corrupti
              nobis. Porro voluptas, unde cum a repellendus minus expedita ab?
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              fugiat, vero error iste ullam eveniet officiis nostrum odit sint
              sequi sunt possimus quis consequuntur id temporibus perspiciatis
              ipsam dolorem perferendis pariatur necessitatibus tempora
              distinctio! Dignissimos tenetur velit eligendi consequuntur hic
              quam debitis pariatur sunt animi voluptate sint voluptates
              recusandae quo ipsa quia quibusdam sed, modi expedita sequi
              aspernatur qui magni? Dolorum autem neque repudiandae ratione, est
              temporibus necessitatibus quam tenetur aliquam aut ea accusantium
              reiciendis. Qui delectus, iste officia adipisci perferendis
              inventore, repudiandae unde odit, magnam omnis id veniam corrupti
              nobis. Porro voluptas, unde cum a repellendus minus expedita ab?
            </p>
          </div>
        </div>
        <div className="chatFotter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="send">
              <img src={sendBtn} alt="send" onClick={handleSend} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
