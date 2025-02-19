import { PlasmaClient } from "@maticnetwork/maticjs-plasma";
import HDWalletProvider from "@truffle/hdwallet-provider";
import { user1, rpc, plasma, user2 } from "../config";

const privateKey = user1.privateKey;
export const from = user1.address;

export const to = user2.address;
export const toPrivateKey = user2.privateKey;

export const erc20 = {
    parent: plasma.parent.erc20,
    child: plasma.child.erc20
}
export const erc721 = {
    parent: plasma.parent.erc721,
    child: plasma.child.erc721
}

export const plasmaClient = new PlasmaClient({
    // log: true,
    network: 'testnet',
    version: 'mumbai',
    parent: {
        provider: new HDWalletProvider(privateKey, rpc.parent),
        defaultConfig: {
            from
        }
    },
    child: {
        provider: new HDWalletProvider(privateKey, rpc.child),
        defaultConfig: {
            from
        }
    }
});

export const plasmaClientTo = new PlasmaClient({
    // log: true,
    network: 'testnet',
    version: 'mumbai',
    parent: {
        provider: new HDWalletProvider(toPrivateKey, rpc.parent),
        defaultConfig: {
            from:to
        }
    },
    child: {
        provider: new HDWalletProvider(toPrivateKey, rpc.child),
        defaultConfig: {
            from:to
        }
    }
});