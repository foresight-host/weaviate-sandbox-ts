import weaviate, { ApiKey } from 'weaviate-ts-client'
import { sandbox__env_ } from '../src/index.js'
main()
	.then(()=>process.exit(0))
	.catch(err=>{
		console.error(err)
		process.exit(1)
	})
async function main() {
	const sandbox__env = sandbox__env_()
	const client = weaviate.client({
		scheme: 'https',
		host: sandbox__env.WEAVIATE_HOST,
		apiKey: new ApiKey(sandbox__env.WEAVIATE_ADMIN_API_KEY),
		headers: {
			"X-OpenAI-Api-Key": sandbox__env.OPENAI_API_KEY,
		}
	})
	const meta = await client.misc.metaGetter().do()
	const schema = await client
		.schema
		.getter()
		.do()
	console.info(JSON.stringify({ meta, schema }, null, 2))
}
