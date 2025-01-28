import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

// Contract ABI - You would need to replace this with your actual ABI after deployment
const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";
const CONTRACT_ABI = [
    "function mintNFT() public payable returns (uint256)",
    "function getPrice() public view returns (uint256)"
];

const NFTMinter = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [mintPrice, setMintPrice] = useState("0.05");
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        checkConnection();
        fetchMintPrice();
    }, []);

    const checkConnection = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ 
                    method: 'eth_accounts' 
                });
                setConnected(accounts.length > 0);
            } catch (err) {
                console.error("Error checking connection:", err);
            }
        }
    };

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                setConnected(true);
                setError("");
            } catch (err) {
                setError("Failed to connect wallet");
                console.error("Error connecting:", err);
            }
        } else {
            setError("Please install MetaMask!");
        }
    };

    const fetchMintPrice = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const contract = new ethers.Contract(
                    CONTRACT_ADDRESS,
                    CONTRACT_ABI,
                    provider
                );
                const price = await contract.getPrice();
                setMintPrice(ethers.utils.formatEther(price));
            } catch (err) {
                console.error("Error fetching price:", err);
            }
        }
    };

    const mintNFT = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                setLoading(true);
                setError("");
                setSuccess("");

                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    CONTRACT_ADDRESS,
                    CONTRACT_ABI,
                    signer
                );

                const transaction = await contract.mintNFT({
                    value: ethers.utils.parseEther(mintPrice)
                });

                await transaction.wait();
                setSuccess("NFT minted successfully!");
            } catch (err) {
                setError("Failed to mint NFT");
                console.error("Error minting:", err);
            } finally {
                setLoading(false);
            }
        } else {
            setError("Please install MetaMask!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        NFT Minter
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {!connected ? (
                        <Button 
                            className="w-full" 
                            onClick={connectWallet}
                        >
                            Connect Wallet
                        </Button>
                    ) : (
                        <div className="space-y-4">
                            <div className="text-center">
                                <p className="text-gray-600">
                                    Mint Price: {mintPrice} ETH
                                </p>
                            </div>
                            
                            <Button 
                                className="w-full"
                                onClick={mintNFT}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Minting...
                                    </>
                                ) : (
                                    'Mint NFT'
                                )}
                            </Button>

                            {error && (
                                <Alert variant="destructive">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                            {success && (
                                <Alert>
                                    <AlertDescription>{success}</AlertDescription>
                                </Alert>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default NFTMinter;
