const LeftControl = () => {
    return (
      <div className="w-20 h-60 bg-blue-600 rounded-l-3xl flex flex-col items-center justify-around py-6 border-4 border-blue-800">
        
        <div className="w-10 h-10 bg-blue-900 rounded-full" />
        
        <div className="relative w-12 h-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-sm" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-sm" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-900 rounded-sm" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-900 rounded-sm" />
        </div>
      </div>
    );
  };
  
  export default LeftControl;