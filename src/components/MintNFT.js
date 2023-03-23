import { useState } from "react";
import { useContract, Web3Button } from "@thirdweb-dev/react";
import "../styles/Home.css";

export default function Home() {
    const { contract } = useContract("0xB80078250656eC63dF25C54f9e5BB1D163E7dDCe");
    const [newNFTName, setNewNFTName] = useState("");
    const [newNFTImage, setNewNFTImage] = useState("");
    const [newNFTDescription, setNewNFTDescription] = useState("");

    const handleNameChange = (event) => {
        setNewNFTName(event.target.value);
    };

    const handleImageChange = (event) => {
        setNewNFTImage(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setNewNFTDescription(event.target.value);
    };

    const handleMintNFT = async () => {
        if (newNFTName && newNFTImage) {
            await contract.erc721.mint({
                name: newNFTName,
                image: newNFTImage,
                description: newNFTDescription,
            });
            setNewNFTName("");
            setNewNFTImage("");
            setNewNFTDescription("");
        }
    };

    return (
        <>
            <div className="bg-green rounded-lg shadow-lg p-6">
                <div className="flex flex-row">
                    <div className="w-2">
                        <h2 className="text-2xl font-bold mb-4">Mint an NFT</h2>
                        <p className="mb-4">
                            Minting an NFT means creating a unique digital asset on the blockchain that represents ownership of a piece of content. Follow the steps below to mint your own NFT!
                        </p>
                        <ol className="list-decimal pl-6 mb-4">
                            <li>Choose a name for your NFT</li>
                            <li>Provide a URL to the image you want to mint as your NFT</li>
                            <li>Click the "Mint NFT" button to create your NFT on the blockchain!</li>
                        </ol>
                        <div className="mb-4">
                            <label htmlFor="nft-name" className="block text-gray-700 font-bold mb-2">NFT Name:</label>
                            <input
                                type="text"
                                id="nft-name"
                                value={newNFTName}
                                onChange={handleNameChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nft-image" className="block text-gray-700 font-bold mb-2">NFT Image URL:</label>
                            <input
                                type="text"
                                id="nft-image"
                                value={newNFTImage}
                                onChange={handleImageChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nft-description" className="block text-gray-700 font-bold mb-2">NFT Description:</label>
                            <textarea
                                id="nft-description"
                                value={newNFTDescription}
                                onChange={handleDescriptionChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            ></textarea>
                                </div>
                        <Web3Button
                            contractAddress={"0xC4641e96Cd8104Ae186D7138537B3a413889d0b5"}
                            action={handleMintNFT}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transparent-button"
                        >
                            Mint NFT
                        </Web3Button>
                    </div>
                </div>
            </div>
        </>
    );
}
