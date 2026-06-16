import React from 'react';

function MusicList() {
  return (
    <div className="flex h-fit w-full flex-col">
      <div className="bg-secondary text-background font-editorial flex items-center justify-center border-t-2 border-b-2 py-1 underline">
        <h1>SELECT YOUR GENRE</h1>
      </div>
      <div className="flex">
        <div className="font-editorial flex h-10 flex-1 items-center justify-center border-t-2 border-r-2 border-b-2 border-black font-semibold underline">
          <h2>TYPE</h2>
        </div>
        <div className="h-10 flex-1 border-t-2 border-r-2 border-b-2 border-black bg-[#E3442E]"></div>
        <div className="h-10 flex-1 border-t-2 border-r-2 border-b-2 border-black bg-[#E3442E]"></div>
        <div className="h-10 flex-1 border-t-2 border-r-2 border-b-2 border-black bg-[#E3442E]"></div>
      </div>
    </div>
  );
}

export default MusicList;
