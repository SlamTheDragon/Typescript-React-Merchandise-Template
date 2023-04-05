import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Navigation.scss';
import { useState } from 'react';
import Modal from '../Modal/Modal';

function CompanyLogo() {
    return (
        <>
            <div className='m-Logo'>
                <Button label={'Logo'} classItem={'m-btn m-nav-btn material-symbols-outlined'} href={'/'} />
                {/* <img src='' alt='logo'/> */}
            </div>
        </>
    );
}

function NavigationLinks() {
    return (
        <>
            <div className='m-nav-links'>
                <ul>
                    <li>
                        <Link to={'/unknown'} className='m-btn m-nav-btn'>Internal Fallback</Link>
                    </li>
                    <li>
                        <Link to={'/theme-overview'} className='m-btn m-nav-btn'>Theme View</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default function Navigation() {

    // Necessarry for Modal Component.
    // FIXME May possibly be moved
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Modal Title</h2>
                <p>Modal content goes here.</p>
            </Modal>

            <nav>
                <div className='m-nav-main'>
                    <CompanyLogo/>
                    <div className='divider' style={{height:'30px'}}/>
                    <NavigationLinks/>
                </div>

                <div className='m-user-control'>
                    <Button label={'shopping_cart'} classItem={'m-btn ctrl-btn material-symbols-outlined'} onclick={openModal}/>
                    <ThemeSwitcher/>
                    <div className='divider' style={{height:'30px'}}/>
                    <Button label={'Sign In'} classItem={'m-btn primary'} href={'/sign-in'}/>
                </div>
            </nav>
        </>
    );

}