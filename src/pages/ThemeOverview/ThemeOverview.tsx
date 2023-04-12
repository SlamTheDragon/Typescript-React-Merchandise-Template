import { useState } from 'react';
import Button from '../../components/common/Button/Button';
import Modal from '../../components/common/Modal/Modal';
import ThemeSwitcher from '../../components/common/ThemeSwitcher/ThemeSwitcher';

export default function ThemeOverview() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const history = useNavigate();

    // let handleClick = () => {
    //     history('/');
    // };

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
            <Modal isOpen={isModalOpen} onClose={closeModal} onMouseEnter={handleMouseEnter} modalTitle={'Modal Title'}>
                <p>Modal content goes here.</p>
                <p>go to: <code>src/components/widgets/modals</code> to load modal contents you desire</p>
            </Modal>
            
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>

            <p style={{ fontSize: 'large' }}>The quick brown fox jumps over the lazy dog</p>
            <p style={{ fontSize: 'medium' }}>The quick brown fox jumps over the lazy dog</p>
            <p style={{fontSize:'small'}}>The quick brown fox jumps over the lazy dog</p>

            <div className='card'>
                <span>Default Card Content</span>
            </div>

            <div className='card'>
                <h1>Function Buttons</h1>
                <ThemeSwitcher />
                <Button classItem={'m-btn ctrl-btn material-symbols-outlined'} onclick={openModal}>shopping_cart</Button>
            </div>

            {/* These Icons can be found on https://fonts.google.com/icons */}

            <Button classItem={'m-btn'}>Button Default</Button>
            <Button classItem={'m-btn primary'}>Button Primary</Button>
            <Button classItem={'m-btn secondary'}>Button Secondary</Button>
            <Button classItem={'m-btn warn'}>Button Warn</Button>
            <Button classItem={'m-btn alert'}>Button Alert</Button>
            <Button classItem={'m-btn disabled'}>Button Disabled</Button>
            
            <Button classItem={'m-btn ctrl-btn material-symbols-outlined'}>category</Button>
            <Button classItem={'m-btn ctrl-btn material-symbols-outlined'}>info</Button>
            <Button classItem={'m-btn ctrl-btn material-symbols-outlined'}>warning</Button>
            <Button classItem={'m-btn ctrl-btn material-symbols-outlined'}>close</Button>
            <Button classItem={'m-btn ctrl-btn material-symbols-outlined'}>favorite</Button>
            <Button classItem={'m-btn ctrl-btn material-symbols-outlined'}>add</Button>
            <Button classItem={'m-btn ctrl-btn material-symbols-outlined'}>cancel</Button>
            <Button classItem={'m-btn ctrl-btn material-symbols-outlined'}>more_vert</Button>
            <Button classItem={'m-btn ctrl-btn material-symbols-outlined'}>refresh</Button>
            <Button classItem={'m-btn ctrl-btn material-symbols-outlined'}>close_fullscreen</Button>

            <div className='divider'/>
            <br/>
            <Button classItem={'m-btn'}>Button Default</Button>
            <Button classItem={'m-btn primary p-accent'}>Button Primary Accent</Button>
            <Button classItem={'m-btn secondary s-accent'}>Button Secondary Accent</Button>

        </>
    );
}