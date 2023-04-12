import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as ShoppingCart } from '@material-design-icons/svg/filled/shopping_cart.svg';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './Navigation.scss';
import ModalCart from '../../widgets/modals/ModalCart';


function CompanyLogo() {
    const history = useNavigate();

    let handleClickA = () => {
        history('/');
    };

    return (
        <>
            <div className='m-Logo'>
                <Button classItem={'m-btn m-nav-btn'} onclick={handleClickA}>Logo</Button>
                {/* <img src='' alt='logo'/> */}
            </div>
        </>
    );
}

function NavigationLinks() {
    const history = useNavigate();

    let handleClickA = () => {
        history('/unknown');
    };
    let handleClickB = () => {
        history('/theme-overview');
    };

    return (
        <>
            <div className='m-nav-links'>
                <ul>
                    <li>
                        <Button classItem={'m-btn m-nav-btn'} onclick={handleClickA}>Fallback</Button>
                    </li>
                    <li>
                        <Button classItem={'m-btn m-nav-btn'} onclick={handleClickB}>Theme Playground</Button>
                    </li>
                </ul>
            </div>
        </>
    );
}



export default function Navigation() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('disable-events');
        document.addEventListener('keydown', handleEscapeKeyPress);

        const outsideElements = document.querySelectorAll('button');
        outsideElements.forEach((element) => {
            element.setAttribute('tabindex', '-1');
        });

    };

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.removeEventListener('keydown', handleEscapeKeyPress);

        const outsideElements = document.querySelectorAll('button');
        outsideElements.forEach((element) => {
            element.removeAttribute('tabindex');
        });
    };

    const handleMouseEnter = () => {
        document.body.classList.remove('disable-events');
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal} onMouseEnter={handleMouseEnter} modalTitle={'Your Cart'}>
                <ModalCart/>
            </Modal>

            <nav>
                <div className='m-nav-main'>
                    <CompanyLogo/>
                    <div className='divider' style={{height:'30px'}}/>
                    <NavigationLinks/>
                </div>

                <div className='m-user-control'>
                    <Button classItem={'m-btn ctrl-btn'} onclick={openModal}><ShoppingCart/></Button>
                    <ThemeSwitcher/>
                    <div className='divider' style={{height:'30px'}}/>
                    <Button classItem={'m-btn primary'} href={'/sign-in'}>Sign In</Button>
                </div>
            </nav>
        </>
    );
}
