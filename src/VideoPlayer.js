import React, { useState, useEffect } from 'react';

const VideoPlayer = () => {
  const [selectedChannel, setSelectedChannel] = useState('');
  const [isAndroid, setIsAndroid] = useState(false);

  const videoUrls = {
    'Star Sports Hindi': '//streamcrichd.com/update/star1hi.php',
    'Sky Sports': '//stream.crichd.sc/update/skys2.php',
    'Star Sports': '//stream.crichd.sc/update/star.php',
    'Willow Cricket': '//stream.crichd.sc/update/willowcricket.php',
    'PTV Sports': '//stream.crichd.sc/update/ptv.php',
    'Sony Ten 3 Hindi': '//streamcrichd.com/update/sonymax.php',
    'Sony Ten 1': '//streamcrichd.com/update/ten1.php',
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsAndroid(/android/.test(userAgent));
  }, []);

  const handleChannelChange = (event) => {
    setSelectedChannel(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Live IPL Streaming</h1>
      <div className="mb-4">
        <label htmlFor="channel" className="block text-gray-700 text-sm font-bold mb-2">
          Select Channel: (click on video multiple times to start playing!)
        </label>
        <select
          id="channel"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedChannel}
          onChange={handleChannelChange}
        >
          <option value="">-- Select a channel --</option>
          {Object.keys(videoUrls).map((channelName) => (
            <option key={channelName} value={channelName}>
              {channelName}
            </option>
          ))}
        </select>
      </div>

      {selectedChannel && (
        <div className="w-full max-w-3xl">
          <iframe
            src={videoUrls[selectedChannel]}
            width="100%"
            height="500px"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="encrypted-media"
            {...(!isAndroid ? { sandbox: 'allow-scripts allow-same-origin' } : {})}
          ></iframe>
        </div>
      )}
        <footer className="mt-8 text-center text-sm">
        Made by <a className='text-blue-500'>Avanish Patel</a>
      </footer>
    </div>
  );
};

export default VideoPlayer;
