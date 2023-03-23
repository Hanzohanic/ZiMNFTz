import { useContract, useNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import "../styles/Home.css";

export default function MyNFTs() {
    const { contract } = useContract("0xB80078250656eC63dF25C54f9e5BB1D163E7dDCe");
    const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);

    return (
        <div className="container text-white">
            {isReadingNfts ? (
                <p>Loading...</p>
            ) : (
                <div className="cards">
                    {nfts?.map((nft) => (
                        <div key={nft.metadata.id.toString} className="card">
                            <ThirdwebNftMedia
                                metadata={nft.metadata}
                                key={nft.metadata.id}
                                className="image"
                            />
                            <h1 className="bg-gray-100">{nft.metadata.name}</h1>
                            <p className="text-gray">{nft.metadata.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
