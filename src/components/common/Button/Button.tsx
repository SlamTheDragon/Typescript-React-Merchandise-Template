import { Link } from "react-router-dom";


interface ButtonInterface {
    label: string;
    classItem: string;
    href?: string;
    onclick?: () => any;
}

export default function Button({ label, href, classItem, onclick }: ButtonInterface) {
    return (
        (href)?
            (<Link className={classItem} to={href}> {label} </Link>) : 
            (<button className={classItem} onClick={onclick}> {label} </button>)
    );
}