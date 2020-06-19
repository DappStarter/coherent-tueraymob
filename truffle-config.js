require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remind modify grace narrow furnace sweet'; 
let testAccounts = [
"0x7f97bde45a422aa5c4eddea772de01b6de6b0ac833da029e68c82382e074cc61",
"0x29d4ba911b6601ff3f3b56cb7675804c835f4a915cf1b404daa1f214cbd9e162",
"0x208eb840813062744ddb687b32ac66927b22893e8437de8d1ec5465ca6436070",
"0x8499b7c8f4d5070653fc381e8c8b22e2a7e02761b87d87e62409a2f843cca0be",
"0xbf92580f9afdd12fa787209c592ec4ab5ddb506c1f7f3a9a64998c7205080a89",
"0x3eb5f84b3b3c1d5c9f39af730ffa48bcc91adaef3be54c2da25c2cc626dbfb24",
"0x30f1ed2ff99cc62206a74bc0992321d87d5177268dd5cfb8adc833befa6da267",
"0xea1c561b0912738e2405afa103f9275a70fb36fbfec74a2a1d3a8280ab9c000d",
"0xf9deebff7fa050b6875f8b718b8a0d74ad9c73d64a8b47fc5f35f499d08637a6",
"0x3aa92e9c0636dc6b3288567a64659853dbf23434797a1cf1522b45292dbe759d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
