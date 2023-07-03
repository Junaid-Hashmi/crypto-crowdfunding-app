import { setGlobalState, useGlobalState } from "../store";
import EthUpdates from "./EthUpdates";
const Hero = () => {
  const [stats] = useGlobalState("stats");
  return (
    <div className="py-24">
      {/* Search bar */}
      {/* <div className="mx-auto h-12 border rounded-full w-[560px] my-8 pl-3 pr-1 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search for Campaigns"
          className="bg-inherit border-none active:outline-none flex-1 mr-2"
        />
        <button className="bg-green-600 hover:bg-green-700 rounded-full h-[80%] px-3 text-white">
          Search
        </button>
      </div> */}
      <EthUpdates />

      {/* Hero Buttons */}
      <div className="mx-auto flex justify-center">
        <button
          type="button"
          className="bg-green-600 border-2 border-green-600 hover:border-green-700 hover:bg-green-700 py-3 px-6 font-medium text-white rounded-full inline-block mx-2"
          onClick={() => setGlobalState("createModal", "scale-100")}
        >
          Create Campaign
        </button>
        <button
          type="button"
          className="border-2 border-green-600 hover:border-green-700 py-3 px-6 font-medium text-green-600 rounded-full inline-block mx-2"
        >
          Back a Project
        </button>
      </div>

      {/* Stats */}
      <div className="flex justify-center items-center mt-20 mx-32">
        <div
          className="flex flex-col justify-center items-center bg-gray-800
          h-20 w-full border-2 border-gray-600 shadow-md"
        >
          <span
            className="text-xl font-bold text-green-600
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span className="text-white text-sm">Projects</span>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-800
          h-20 shadow-md w-full border-2 border-gray-600"
        >
          <span
            className="text-xl font-bold text-green-600
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span className="text-white text-sm">Backings</span>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-800
          h-20 shadow-md w-full border-2 border-gray-600"
        >
          <span
            className="text-xl font-bold text-green-600
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span className="text-white text-sm">Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
