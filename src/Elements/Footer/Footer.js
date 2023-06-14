import s from './Footer.module.css'
import logo from '../photos/Logo_Counter_Footer.png'

const Footer = () => {
    return (
        <div className={s.Wrapper}>
            <ul className={s.list}>
                <ul className={s.first_list}>
                    <li><img src={logo} alt="logo"/></li>
                    <li>Партнерам</li>
                    <li>Разработчикам</li>
                    <li>Вакансии</li>
                </ul>
                <ul className={s.second_list}>
                    <li>“Lincode”, 2023г</li>
                </ul>

            </ul>
        </div>
    )
}

export default Footer;