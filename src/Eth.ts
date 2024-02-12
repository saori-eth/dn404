import { ethers } from 'ethers'
import type { Driver } from './index'
const { MODE, BASE_HTTP, LOCAL_HTTP, DEV_PK, PROD_PK } = process.env

export class Eth {
    private driver: Driver
    public provider: ethers.JsonRpcProvider
    public wallet: ethers.Wallet

    constructor(driver: Driver) {
        this.driver = driver
        this.provider = new ethers.JsonRpcProvider(
            MODE === 'local' ? LOCAL_HTTP : BASE_HTTP
        )
        this.wallet = new ethers.Wallet(
            MODE === 'local' ? DEV_PK : PROD_PK,
            this.provider
        )
    }
}
