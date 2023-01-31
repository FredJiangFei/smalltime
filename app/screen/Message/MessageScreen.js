import React, { useState, useEffect, useCallback } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import messageService from '../../api/messageService';
import * as signalR from '@microsoft/signalr';
import config from '../../config/config';
import { GiftedChat } from 'react-native-gifted-chat';
import initialMessages from './messages';
import { renderInputToolbar, renderActions, renderComposer, renderSend } from './InputToolbar';
import {
  renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
  renderCustomView,
} from './MessageContainer';


export default function MessageScreen() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <GiftedChat
        messages={messages}
        text={text}
        onInputTextChanged={setText}
        onSend={onSend}
        user={{
          _id: 1,
          name: 'Aaron',
          avatar: 'https://placeimg.com/150/150/any',
        }}
        alignTop
        alwaysShowSend
        scrollToBottom
        // showUserAvatar
        renderAvatarOnTop
        renderUsernameOnMessage
        bottomOffset={26}
        onPressAvatar={console.log}
        renderInputToolbar={renderInputToolbar}
        renderActions={renderActions}
        renderComposer={renderComposer}
        renderSend={renderSend}
        renderAvatar={renderAvatar}
        renderBubble={renderBubble}
        renderSystemMessage={renderSystemMessage}
        renderMessage={renderMessage}
        renderMessageText={renderMessageText}
        // renderMessageImage
        renderCustomView={renderCustomView}
        isCustomViewBottom
        messagesContainerStyle={{ backgroundColor: 'indigo' }}
        parsePatterns={(linkStyle) => [
          {
            pattern: /#(\w+)/,
            style: linkStyle,
            onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
          },
        ]}
      />
  );
}


// export default function MessageScreen() {
//   const hubConnection = new signalR.HubConnectionBuilder()
//     .withUrl(`${config.apiUrl}/message`)
//     .build();

//   hubConnection.start();

//   return (
//     <>
//       <SendMessage />
//       <Messages HubConnection={hubConnection}></Messages>
//     </>
//   );
// }

const Messages = (messages) => {
  const [date, setDate] = useState();

  useEffect(() => {
    messages.HubConnection.on('sendToReact', (item) => {
      list.push(item);
      setDate(new Date());
    });
  }, []);

  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
};

const SendMessage = () => {
  const [message, setMessage] = useState('');
  const messageSubmit = async () => {
    await messageService.sendMessage(message);
    setMessage('');
  };

  return (
    <>
      <Text>Enter your Message</Text>
      <View
        style={{
          height: 30,
          backgroundColor: 'gray',
          marginLeft: 8,
          marginRight: 8,
          borderRadius: 4,
        }}
      >
        <TextInput onChangeText={setMessage} value={message} />
      </View>
      <Button onPress={messageSubmit} title="Add Message"></Button>
    </>
  );
};
