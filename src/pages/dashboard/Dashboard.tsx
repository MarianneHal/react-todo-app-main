import React, { useEffect } from 'react'
import { AuthService } from '@/services/auth/auth.service'

import { Form } from '@/components/form/Form'
import { TodoList } from '@/components/todoList/TodoList'


export const Dashboard = () => {
    useEffect(() => {
        AuthService.whoAmI().then((res) => console.log(res))
    }, [])

    return (
        <div>
            <Form />
            <TodoList />
        </div>
    )
}
