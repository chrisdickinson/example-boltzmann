import { Context, Response } from './boltzmann.js'

index.route = 'GET /'
export async function index(context: Context): Promise<Response> {
  const name = 'Friendly Boltzmann Author'
  
  return {
    message: `welcome to boltzmann, ${name}!`,
  }
}

greeting.route = 'GET /hello/:name'

export async function greeting(context: Context): Promise<Response> {
  return `hello ${context.params.name}`
}

