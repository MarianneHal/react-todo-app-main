import { useAppDispatch } from '@/redux/store'
import { removeTodo } from '@/redux/slices/todoSlice/todoSlice'
import { styled } from '@mui/system'

export const Todo = ({ todo }) => {
    const { name, time, description } = todo
    const dispatch = useAppDispatch()

    const MyTodo = styled('div')({
        color: 'darkslategray',
        backgroundColor: 'aliceblue',
        borderRadius: 4,
        width: 600,
        margin: 30,
        textAlign: 'center',
    })

    const MyDate = styled('div')({
        fontSize: 10,
    })

    const Data = styled('div')({
        display: 'flex',
    })

    const Name = styled('div')({
        fontSize: 30,
    })

    return (
        <MyTodo>
            <Data>
                <MyDate>{time}</MyDate>
                <Name>{name}</Name>
            </Data>
            <div>{description} </div>
            <button onClick={() => dispatch(removeTodo({ time }))}>Remove</button>
        </MyTodo>
    )
}
