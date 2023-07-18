import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import {server} from "../mocks/server"
import {rest} from "msw"
import { q } from 'msw/lib/glossary-de6278a9';

describe('TodoList', () => { 
    test("Todo라는 제목이 있다", () => {
        render(<TodoList/>)
        const titleEl = screen.getByText("Todo")
        expect(titleEl).toBeInTheDocument()
    })

    // 에러 설정한 test가 먼저나오더라도 
    // 다음 test에 영향을 주지 않음
    test("에러가 났을 때 에러 메세지를 보여준다", async () => {
        server.use(
            // Match a GET request to a third-party server.
            rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
                return res(
                    ctx.status(500)
                )
            }),
        )
        render(<TodoList/>)
        const error = await screen.findByText("에러 발생..")
        expect(error).toBeInTheDocument()

    })
    test("리스트가 잘 나온다 (3개)", async () => {
        render(<TodoList/>)
        const list = await screen.findAllByRole("listitem")
        expect(list).toHaveLength(3)
    })

 })