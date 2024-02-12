import { Eth } from './Eth'
import { Sequence } from './Sequence'

export class Driver {
    public eth: Eth
    public sequence: Sequence
    constructor() {
        this.eth = new Eth(this)
        this.sequence = new Sequence(this)
    }
}
