import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

interface Props {
  title: string;
}

const opts: any = {
  width: '100%',
  height: '400',
  playerVars: {
    autoplay: 1,
    controls: 0,
    showinfo: 0,
    modestbranding: 1,
    enablejsapi: 1,
    disablekb: 1,
  },
};

const VideoPlayer: React.FC<Props> = ({ title }) => {
  const [videoID, setVideoID] = useState<string | undefined>(undefined);

  useEffect(() => {
    movieTrailer(title, {
      id: true,
    }).then((res: any) => {
      console.log(res);

      setVideoID(res);
    });
  }, [title]);

  return (
    <div className="w-full md:w-4/5  xl:w-2/3 mx-auto overflow-hidden mt-4 md:rounded-md ">
      {videoID && (
        <YouTube videoId={videoID} opts={{ ...opts, height: '350' }} />
      )}
    </div>
  );
};

export default VideoPlayer;
