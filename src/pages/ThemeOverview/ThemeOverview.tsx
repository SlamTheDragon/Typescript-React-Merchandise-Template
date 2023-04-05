import { useState } from 'react';
import Button from '../../components/common/Button/Button';
import Modal from '../../components/common/Modal/Modal';
import ThemeSwitcher from '../../components/common/ThemeSwitcher/ThemeSwitcher';

export default function ThemeOverview() {
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

            {/* These Icons can be found on https://fonts.google.com/icons */}

            <Button label={'Button Default'} classItem={'m-btn'}/>
            <Button label={'Button Primary'} classItem={'m-btn primary'}/>
            <Button label={'Button Secondary'} classItem={'m-btn secondary'}/>
            <Button label={'Button Warn'} classItem={'m-btn warn'}/>
            <Button label={'Button Alert'} classItem={'m-btn alert'}/>
            <Button label={'Button Disabled'} classItem={'m-btn disabled'}/>
            
            <Button label={'category'} classItem={'m-btn ctrl-btn material-symbols-outlined'}/>
            <Button label={'info'} classItem={'m-btn ctrl-btn material-symbols-outlined'}/>
            <Button label={'warning'} classItem={'m-btn ctrl-btn material-symbols-outlined'}/>
            <Button label={'close'} classItem={'m-btn ctrl-btn material-symbols-outlined'}/>
            <Button label={'favorite'} classItem={'m-btn ctrl-btn material-symbols-outlined'}/>
            <Button label={'add'} classItem={'m-btn ctrl-btn material-symbols-outlined'}/>
            <Button label={'cancel'} classItem={'m-btn ctrl-btn material-symbols-outlined'}/>
            <Button label={'more_vert'} classItem={'m-btn ctrl-btn material-symbols-outlined'}/>
            <Button label={'refresh'} classItem={'m-btn ctrl-btn material-symbols-outlined'}/>
            <Button label={'close_fullscreen'} classItem={'m-btn ctrl-btn material-symbols-outlined'}/>

            <div className='divider'/>
            <br/>
            <Button label={'Button Default'} classItem={'m-btn'}/>
            <Button label={'Button Primary Accent'} classItem={'m-btn primary p-accent'}/>
            <Button label={'Button Secondary Accent'} classItem={'m-btn secondary s-accent'}/>

            <br/>
            <div className='card'>
                <h1>Function Buttons</h1>
                <ThemeSwitcher/>
                <Button label={'shopping_cart'} classItem={'m-btn ctrl-btn material-symbols-outlined'} onclick={openModal} />
            </div>
        </>
    );
}