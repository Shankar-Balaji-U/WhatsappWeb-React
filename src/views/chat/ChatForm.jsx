import React, { Component } from 'react';
import './chat.css';

const BOLD_MARKER = '<span class="bold-marker">*</span>';
const ITALIC_MARKER = '<span class="italic-marker">_</span>';
const STRIKE_MARKER = '<span class="strike-marker">~</span>';
const MONOSPACE_MARKER = '<span class="monospace-marker">```</span>';


class ChatForm extends Component {

    formatText(message) {
        // Bold Text
        message = message.replace(/\*(.*?)\*/g, `${BOLD_MARKER}<strong>$1</strong>${BOLD_MARKER}`);

        // Italic Text
        message = message.replace(/_(.*?)_/g, `${ITALIC_MARKER}<i>$1</i>${ITALIC_MARKER}`);

        // Strikethrough Text
        message = message.replace(/~(.*?)~/g, `${STRIKE_MARKER}<s>$1</s>${STRIKE_MARKER}`);

        // Monospace Text
        message = message.replace(/```(.*?)```/g, `${MONOSPACE_MARKER}<code>$1</code>${MONOSPACE_MARKER}`);

        // // Hyperlinks
        // message = message.replace(/\[([^\]]+)]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

        // // Quoting Text
        // message = message.replace(/>(.*)/g, '<blockquote>$1</blockquote>');

        return message;
}

// // Example usage:
// const inputText = "Hello *bold* _italic_ ~strikethrough~ ```monospace``` [link](https://www.example.com/) > quoted";
// const formattedText = formatText(inputText);

// console.log(formattedText);

    handleKeyDown(event) {
        // console.log(event);
        if (event.which === 13) {
           this.handleEnter(event);
        }
    }

    handleInput(event) {
        if (event.target.innerHTML === '<br>') {
            event.target.innerText = "";
        }
        event.preventDefault();
        // event.target.innerHTML = this.formatText(event.target.innerText);
    }

    handleEnter(event) {
        if (event.shiftKey) {
            return false;
        }

        event.preventDefault();
        let value = event.target.innerHTML;
        if (!value) {
            return false;
        }
        event.target.innerText = "";
    }

    render() {
        return <span 
            className="form-chatbox" 
            onInput={this.handleInput.bind(this)} 
            onKeyDown={this.handleKeyDown.bind(this)} 
            role="textbox" tabIndex="10"
            placeholder="Enter your message here" 
            contentEditable="true"
            spellCheck="true"></span>;
  }
}

export default ChatForm;