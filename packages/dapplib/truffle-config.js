require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan royal pizza modify grid kangaroo army gate'; 
let testAccounts = [
"0x739d3569a7a9350773e6bc6cd632f447723f11689e9f5f9e4bf5e235b119ffb7",
"0x66c11739ceac80a25044609fb71a2bb0d9012af82e9e23266f78ee296e920269",
"0x0c9121d48728315ab493098c9a4c1561a7e41f8097393461edd7832b7c739096",
"0xde247c9a324532cdb21b00a135dabed38c2feb9c293a36dbbe020d07233d8f44",
"0x9a7829c8886d49068d226602361a1ca2f61b4573b29a00610ddfd3118e1263a2",
"0x5b590dd51893b6357353da9d89aaea7c36c3b8340da3275d39ed67432dd92fd2",
"0x1071d256ffee471ded1562adaeb7d4009d7a1177dd09b37d79f4a69d46ec5022",
"0x97ccacd1adfae7bfc4a4b3c1e50ae9f856e33a161dcb8a5d83009185014332d4",
"0x646ca8f8c623b4814782a092bdfef25608fd238ef02312bc951ccda39d06bee3",
"0x06282ced806602134534d23201f96009785430169dd4c8ea5ede5869d241c8d9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

