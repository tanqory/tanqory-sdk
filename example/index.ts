import { TanqorySDK } from '../src/index';

const tanqory = new TanqorySDK("");
const run = async () => {
    const data = await tanqory.product.getProducts("675123dcf33dd0abe99bcc41", { })
    console.log(data)
}
run();