import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView
      javaScriptEnabled={true}
      scrollEnabled={false}
      allowsFullscreenVideo={true}
      source={{
        uri: `https://ok.ru/videoembed/13180506`,
      }}
    />
  );
};

export default App;
