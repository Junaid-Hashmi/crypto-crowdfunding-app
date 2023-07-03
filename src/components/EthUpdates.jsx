import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const EthUpdates = () => {
  const [ethPrice, setEthPrice] = useState(null);
  const [ethInrPrice, setEthInrPrice] = useState(null);

  useEffect(() => {
    fetchPrice1();
  }, []);

  useEffect(() => {
    fetchPrice2();
  }, []);

  // Fetching USD Price
  const fetchPrice1 = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      setEthPrice(response.data.ethereum.usd);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetching INR Price
  const fetchPrice2 = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
      );
      setEthInrPrice(response.data.ethereum.inr);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Ethereum updates */}
      <div className="mx-[35%] text-center my-8 p-4 items-center bg-green-600 text-white rounded-lg">
        <p>Current Ethereum Price: </p>
        <div className="flex justify-center gap-3">
          <div>
            <div
              id="dollars"
              className="bg-gray-900 p-2 w-32 mx-auto mt-3 rounded-lg"
            >
              <p className="text-sm">USD</p>
              {ethPrice ? (
                <p className="font-semibold text-lg">${ethPrice}</p>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
          <div>
            <div
              id="dollars"
              className="bg-gray-900 p-2 w-32 mx-auto mt-3 rounded-lg"
            >
              <p className="text-sm">INR</p>
              {ethInrPrice ? (
                <p className="font-semibold text-lg">Rs.{ethInrPrice}</p>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EthUpdates;
