import { BeatLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center items-center h-[44px]">
      <BeatLoader 
        color="#4F46E5"
        size={10} 
        speedMultiplier={0.8}
      />
    </div>
  );
}

export default Loader;