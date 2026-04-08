const RightControl = () => {
    return (
      <div className="w-20 h-60 bg-red-600 rounded-r-3xl flex flex-col items-center justify-around py-6 border-4 border-red-800">
        
        <div className="relative w-14 h-14">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-yellow-900">X</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-green-900">B</div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-blue-900">Y</div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-xs font-bold text-red-900">A</div>
        </div>
       
        <div className="w-10 h-10 bg-red-900 rounded-full" />
      </div>
    );
  };
  
  export default RightControl;