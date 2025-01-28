// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SimpleNFTMinter is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    uint256 public MINT_PRICE = 0.05 ether;
    uint256 public MAX_SUPPLY = 1000;
    
    // Base URI for metadata
    string private _baseTokenURI;

    constructor() ERC721("SimpleNFT", "SNFT") {
        _baseTokenURI = "";
    }

    function mintNFT() public payable returns (uint256) {
        require(msg.value >= MINT_PRICE, "Insufficient payment");
        require(_tokenIds.current() < MAX_SUPPLY, "Max supply reached");

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);

        return newItemId;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner()).transfer(balance);
    }

    function getPrice() public view returns (uint256) {
        return MINT_PRICE;
    }

    function setPrice(uint256 newPrice) public onlyOwner {
        MINT_PRICE = newPrice;
    }
}
