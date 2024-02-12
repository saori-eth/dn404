import { ethers, parseEther } from 'ethers'
import DNToken from './abi/DNToken.json'
import type { Driver } from '.'

export class Sequence {
    private driver: Driver
    private provider: Driver['eth']['provider']
    private wallet: Driver['eth']['wallet']
    constructor(driver: Driver) {
        this.driver = driver
        this.provider = driver.eth.provider
        this.wallet = driver.eth.wallet
        this.init()
    }

    private async init() {
        await this.deployFactory()
    }

    private createFactory(): ethers.ContractFactory {
        return new ethers.ContractFactory(
            DNToken.abi,
            DNToken.bytecode,
            this.wallet
        )
    }

    /*
    constructor:
        string memory name_,
        string memory symbol_,
        uint256 maxMint_,
        uint120 publicPrice_,
        uint96 initialTokenSupply,
        address initialSupplyOwner
*/

    private async deployFactory() {
        const maxMint = parseEther('1000')
        const publicPrice = parseEther('0.1')
        const initialTokenSupply = parseEther('50')

        console.log('maxMint', maxMint)
        console.log('publicPrice', publicPrice)
        console.log('initialTokenSupply', initialTokenSupply)

        const factory = this.createFactory()
        const contract = await factory.deploy(
            'DNToken Test',
            'DNT',
            BigInt(maxMint),
            BigInt(publicPrice),
            BigInt(initialTokenSupply),
            this.wallet.address
        )
        await contract.waitForDeployment()
        const address = await contract.getAddress()
        console.log('Deployed to:', address)
    }
}
