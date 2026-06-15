import CD from './CD';
import Controls from './Controls';
import MusicList from './MusicList';
import Volume from './Volume';

function MusicPlayer() {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-fit min-w-0 flex-col border-r-2">
        <div className="flex flex-col gap-6 lg:flex-row">
          <Volume />
          <Controls />
        </div>
        <MusicList />
      </div>
      <CD />
    </div>
  );
}

export default MusicPlayer;
