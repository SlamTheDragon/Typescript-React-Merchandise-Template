import Button from '../../common/Button/Button';
import './Shelf.scss';

const image = "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
const src = "Title"

interface ItemInterface {
    children?: React.ReactNode;
    image: string
}

function Item({ children, image, }: ItemInterface) {
    return(
        <>
            <div style={{ backgroundImage: "" + {image}}} className='m-item card'>
                <div>
                    <h1>
                    {children}
                    </h1>
                </div>
                <div style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button classItem={'m-btn primary'}>Buy {children}</Button>
                </div>
            </div>
        </>
    );
}

export default function Shelf() {
    return(
        <>
            <div className='m-shelf card'>
                <Item image={"" + { image }}>{src}</Item>
                <Item image={"" + { image }}>{src}</Item>
                <Item image={"" + { image }}>{src}</Item>
                <Item image={"" + { image }}>{src}</Item>
                <Item image={"" + { image }}>{src}</Item>
                <Item image={"" + { image }}>{src}</Item>
                <Item image={"" + { image }}>{src}</Item>
                <Item image={"" + { image }}>{src}</Item>
                <Item image={"" + { image }}>{src}</Item>
                <Item image={"" + { image }}>{src}</Item>
                <Item image={"" + { image }}>{src}</Item>
            </div>
        </>
    );
}