import { ethers } from 'ethers'
import type { Driver } from './index'
const { MODE, BASE_HTTP, LOCAL_HTTP, DEV_PK, PROD_PK } = process.env

if (!MODE) console.error('MODE is not defined')
if (!BASE_HTTP) console.error('BASE_HTTP is not defined')
if (!LOCAL_HTTP) console.error('LOCAL_HTTP is not defined')
if (!DEV_PK) console.error('DEV_PK is not defined')
if (!PROD_PK) console.error('PROD_PK is not defined')

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
