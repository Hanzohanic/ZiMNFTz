import { useState } from "react";
import MintNFT from "./components/MintNFT";
import MyNFTs from "./components/MyNFTs";
import "./styles/Home.css";

export default function Home() {
  const [isMintingNFT, setIsMintingNFT] = useState(true);

  const handleTabChange = () => {
    setIsMintingNFT(!isMintingNFT);
  };

  return (
    <div className="flex flex-col h-screen bg-red justify-center items-center home-container">
      <h1 className="text-4xl font-bold text-green mb-4 home-header">ZiM NFTz</h1>
      <div className="flex justify-center mb-4 button-container">
        <button onClick={handleTabChange} className="button  py-2 px-4 rounded-md text-white font-bold shadow-lg hover:bg-blue-600 transition-all duration-300">
          {isMintingNFT ? "View My NFTs" : "Mint a New NFT"}
        </button>
      </div>
      {isMintingNFT ? <MintNFT /> : <MyNFTs />}
    </div>
  );
}
