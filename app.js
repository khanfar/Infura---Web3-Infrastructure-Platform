import React from 'react';
import NFTMinter from './components/NFTMinter';
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="p-6">
        <h1 className="text-3xl font-bold text-center mb-2">NFT Minter dApp</h1>
        <p className="text-center text-gray-400">Create your unique NFT with ease</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Network Warning Dialog */}
        {window.ethereum && window.ethereum.networkVersion !== '1' && (
          <AlertDialog open={true}>
            <AlertDialogContent className="bg-red-600 text-white p-4 rounded-lg mb-6">
              <p className="text-center">
                Please connect to Ethereum Mainnet to use this dApp
              </p>
            </AlertDialogContent>
          </AlertDialog>
        )}

        {/* Main Minting Component */}
        <div className="max-w-xl mx-auto">
          <NFTMinter />
        </div>

        {/* Features Section */}
        <section className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Secure Minting</h3>
            <p className="text-gray-400">
              Your NFTs are minted securely on the Ethereum blockchain
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Low Gas Fees</h3>
            <p className="text-gray-400">
              Optimized contract to minimize gas costs during minting
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-400">
              Simple interface for minting your NFTs with just a few clicks
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 NFT Minter dApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
