/*import { createServer } from 'node:http'
*
*const server = createServer((req, res) => {
*   console.log('Olá mundo!')
*   //Escrevendo uma mensagem na tela
*   res.write('Olá mundo!')
*   return res.end()
*})
*
* //Porta em que vou rodar o servidor
*server.listen(3333)*/

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'Olá mundo!'
})

server.listen({
    port:3333,
})