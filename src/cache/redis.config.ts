import { createClient } from 'redis'

export const client = createClient();

/**
 * The above code connects to localhost on port 6379. To connect to a different host or port, 
 * use a connection string in the format 
 * `redis[s]://[[username][:password]@][host][:port][/db-number]`
 * 
 * createClient({
 *  url: 'redis://alice:foobared@awesome.redis.server:6380'
 * });
 */