import { FC, useEffect, useState } from 'react'
import { collection, onSnapshot, addDoc } from 'firebase/firestore'
import { db } from '@/db/firebase'
import { useFormik } from 'formik'
import { Button, Input } from '@mui/material'

import { addTodo } from '@/redux/slices/todoSlice/todoSlice'
import { useAppDispatch } from '@/redux/store'

export const Form: FC = () => {
    const dispatch = useAppDispatch()
    const [todos, setTodos] = useState([])

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            time: '',
        },
        onSubmit: async (values) =>
            await addDoc(collection(db, 'todo'), {
                name: values.name,
                description: values.description,
                time: values.time,
            }).then(dispatch(addTodo(values))),
    })

    useEffect(() => {
        onSnapshot(collection(db, 'todo'), (snapshot) => {
            setTodos(snapshot.docs.map((doc) => doc.data()))
        })
    }, [])

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                type="text"
                sx={{ width: 200, margin: 10 }}
                placeholder="name"
                variant="soft"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
            />
            <Input
                sx={{ width: 400 }}
                type="text"
                placeholder="description"
                id="description"
                variant="soft"
                value={formik.values.description}
                onChange={formik.handleChange}
            />
            <Input
                sx={{ width: 100, margin: 5 }}
                type="date"
                id="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                size="small"
            />
            <Button variant="soft" type="submit">
                Add
            </Button>
        </form>
    )
}
