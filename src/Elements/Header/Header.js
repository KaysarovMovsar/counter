import s from './Header.module.css';
import logo from '../photos/Logo_Counter.png'

const Header = () => {
    return (
        <div className={s.Wrapper}>
            <header className={s.header}>
                <div>
                    <img src={logo} alt="logo"/>
                </div>

                <div className={s.right_header}>
                    <ul className={s.list}>
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;
