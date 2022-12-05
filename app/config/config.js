import * as Updates from 'expo-updates';

let Config = {
  apiUrl: 'https://jsonplaceholder.typicode.com/posts/1',
};

if (Updates.channel === 'preview') {
  Config.apiUrl = 'https://jsonplaceholder.typicode.com/posts/2';
} else if (Updates.channel === 'production') {
  Config.apiUrl = 'https://jsonplaceholder.typicode.com/posts/3';
}

export default Config;
