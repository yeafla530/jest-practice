import { rest } from 'msw'

export const handlers = [
  // Match a GET request to a third-party server.
    rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
        return res(
            ctx.status(200), // 500
            ctx.json([
                {
                    id: 1,
                    title: '청소',
                    completee: true
                },
                {
                    id: 2,
                    title: '설거지',
                    completee: true
                },
                {
                    id: 3,
                    title: '숙제',
                    completee: false
                },
            ])
        )
        
    }),
]