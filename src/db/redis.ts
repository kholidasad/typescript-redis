import { createClient } from 'redis';

async function redisConnect() {
    try {
        const client = createClient({
            url: 'redis://default:eviertDOWMcLkylGErvsQAelV2chs0Cf@redis-19910.c252.ap-southeast-1-1.ec2.cloud.redislabs.com:19910'
        });

        await client.connect()

        console.log('Connected to Redis')

        return client
    } catch (error) {
        throw error
    }
}

export default redisConnect