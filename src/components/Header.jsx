import logo from '../assets/logo.png'

export default function Header() {

    return (
        <header>
            <a href="#issue6"><img src={logo} alt="logo of backstage talks" /></a>
            <a href="mailto:info@backstagetalks.com">info@backstagetalks.com</a>
        </header>
    )
}