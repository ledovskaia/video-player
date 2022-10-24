import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';

const links = [
  'https://ok.ru/videoembed/13180506',
  'https://medtaor.akamaized.net/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/plives/110322/channel24/playlist.m3u8',
];

const App = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(state => (state < links.length - 1 ? state + 1 : 0));
    }, 3 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <WebView
      javaScriptEnabled={true}
      scrollEnabled={false}
      allowsFullscreenVideo={true}
      source={{
        uri: links[active],
      }}
    />
  );
};

export default App;
