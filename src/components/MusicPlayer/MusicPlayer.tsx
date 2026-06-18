import CD from './CD';
import Controls from './Controls';
import MusicList from './MusicList';
import Volume from './Volume';

function MusicPlayer() {
  return (
    <div className="flex min-h-screen flex-col xl:flex-row">
      <div className="flex w-full min-w-0 flex-col border-black xl:w-fit xl:border-r-2">
        <div className="flex flex-col xl:flex-row">
          <Volume />
          <Controls />
        </div>
        <div className="relative flex min-h-[400px] w-full overflow-hidden border-b-2 border-black xl:hidden">
          <CD />
        </div>
        <MusicList />
      </div>
      <div className="hidden flex-1 xl:flex">
        <CD />
      </div>
    </div>
  );
}

export default MusicPlayer;
