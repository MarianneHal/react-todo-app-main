import { useAppSelector } from '@/redux/store'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { FC } from 'react'

import { Todo } from '@/components/todo/Todo'

export const TodoList: FC = () => {
    const { todos } = useAppSelector((state) => state.todos)

    const MyTodo = styled('div')({
        color: 'darkslategray',
        backgroundColor: 'aliceblue',
        padding: 8,
        borderRadius: 4,
    })
    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'secondary.main',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {todos.map((todo) => (
                <Todo key={generateKey(todo.name)} todo={todo} />
            ))}
        </Box>
    )
}
