import '../../../index.scss'
import './ModalCart.scss'
import Button from '../../common/Button/Button';
import { ReactComponent as Close } from '@material-design-icons/svg/filled/close.svg';


export default function ModalCart() {
    return(
        <>
            <div className='modal-container'>
                {/* hide this element via react if contents have loaded */}
                <div className='modal-cart-loader'>
                    <div className='modal-loader'></div>
                    <div className='modal-loader'></div>
                    <div className='modal-loader'></div>
                    <div className='modal-loader'></div>
                    <div className='modal-loader'></div>
                    <div className='modal-loader'></div>
                    <div className='modal-loader'></div>
                </div>
                <div className='modal-cart'>
                    <div>{/* BackEnd process */}</div>
                    <div className='cart-items'> 
                        <span>Sample Item</span> 
                        <Button classItem={'m-btn ctrl-btn'}><Close /></Button>
                    </div>
                </div>
            </div>

            <div className='cart-footer'>
                <Button classItem={'m-btn disabled'}>Check Out</Button>
            </div>
        </>
    );
}