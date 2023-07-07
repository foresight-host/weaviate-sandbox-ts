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
	await client
		.schema
		.getter()
		.do()
		.then(res=>{
			console.log(res)
		})
		.catch(err=>{
			console.error(err)
		})
}
