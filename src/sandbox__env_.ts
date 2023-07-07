import { import_meta_env_ } from '@ctx-core/env'
export function sandbox__env_():sandbox__env_T {
  return {
		OPENAI_API_KEY: env__validate('OPENAI_API_KEY'),
		WEAVIATE_HOST: env__validate('WEAVIATE_HOST'),
		WEAVIATE_ADMIN_API_KEY: env__validate('WEAVIATE_ADMIN_API_KEY'),
	}
	function env__validate(key:keyof sandbox__env_T) {
	  if (!import_meta_env_()[key]) throw new Error(`Missing environment variable: ${key}`)
		return import_meta_env_()[key]
	}
}
export interface sandbox__env_T {
	OPENAI_API_KEY:string
	WEAVIATE_HOST:string
	WEAVIATE_ADMIN_API_KEY:string
}
