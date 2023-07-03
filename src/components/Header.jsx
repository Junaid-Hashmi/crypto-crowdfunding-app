import { Link } from "react-router-dom";
import { connectWallet } from "../services/blockchain";
import { truncate, useGlobalState } from "../store";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  return (
    <div className="h-[75px] flex justify-between items-center px-10 py-3 bg-gray-900 shadow-lg fixed top-0 left-0 right-0">
      <Link to="/" className="text-center font-bold text-green-600 text-xl">
        Crypto <br />
        CrowdFunding
      </Link>
      {/* buttons */}
      <div>
        {/* <button
          id="connectButton"
          class="text-white bg-[#8c6dfd] px-4 py-2 rounded-[8px]"
        >
          Connect Wallet
        </button> */}
        {connectedAccount ? (
          <button
            type="button"
            className="text-white bg-[#8c6dfd] px-4 py-2 rounded"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="text-white bg-[#8c6dfd] px-4 py-2 rounded-[8px]"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
