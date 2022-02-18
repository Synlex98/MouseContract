#MouseContract

Near SmartContract for the mouseHunt project
#set-up
clone the project https://github.com/Synlex98/MouseContract
 
run nmp install

#build contract
install near cli

install near sdk-as

run npm build where the wasm file will be generated under the build/release folder

#deploy contract
ensure you have near TestNet account,you can create it here https://wallet.testnet.near.org/

run near cli login

run near dev-deploy *path/to/your-wasm-file.wasm*  *Account id*
