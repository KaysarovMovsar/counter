import s from './Main.module.css'
import {useDispatch, useSelector} from "react-redux";

const Main = () => {
    const count = useSelector((state) => state)
    const dispatch = useDispatch()

    const increase = () => {
        dispatch({
            type: 'increase'
        })
    }

    const decrease = () => {
        dispatch({
            type: 'decrease'
        })
    }

    const reset = () => {
        dispatch({
            type: 'reset'
        })
    }

    return (
        <div className={s.Wrapper}>
            <div className={s.main}>
                <div className={s.counter}>
                    <span>{count}</span>
                </div>
                <div className={s.button_list}>
                    <button onClick={increase}>Увеличить</button>
                    <button onClick={decrease}>Уменьшить</button>
                    <button onClick={reset}>Сбросить</button>
                </div>
            </div>
        </div>
    )
};

export default Main;

