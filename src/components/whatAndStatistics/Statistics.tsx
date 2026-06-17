function Statistics() {
  return (
    <div className="flex h-full w-full flex-col gap-10 pb-10 pl-10">
      <div className={`text-secondary w-fit flex-col`}>
        <h1 className="font-canopee text-shadow text-[140px] leading-none [@media(max-width:1046px)_and_(min-width:885px)]:text-[100px] [@media(max-width:1207px)_and_(min-width:1046px)]:text-[120px] [@media(max-width:563px)]:text-[30px] [@media(max-width:724px)_and_(min-width:563px)]:text-[60px] [@media(max-width:885px)_and_(min-width:724px)]:text-[80px]">
          STATISTICS
        </h1>
        <div className="bg-secondary h-2 w-full shadow-[4px_4px_black]" />
      </div>
      <div className="grid w-fit grid-cols-2 gap-x-10 gap-y-8">
        {[1, 2, 3, 4].map((val, index) => {
          return (
            <div
              key={index}
              className={`size-60 -rotate-4 shadow-[4px_4px_0_black] [@media(max-width:828px)]:size-40 ${index == 0 || index == 3 ? 'bg-primary' : 'bg-secondary'}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Statistics;
