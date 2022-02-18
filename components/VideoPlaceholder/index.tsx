import React from 'react';

interface IPlaceholder {
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  play: boolean;
}

const VideoPlaceholder: React.FC<IPlaceholder> = ({ play, setPlay }) => {
  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div className="w-full  md:w-4/5  xl:w-2/3 overflow-hidden  mx-auto mt-4 h-[400px] md:rounded-md bg-black flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer h-28 w-28 mx-auto text-white hover:text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={handlePlay}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default VideoPlaceholder;
