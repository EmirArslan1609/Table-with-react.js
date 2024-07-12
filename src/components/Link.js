import { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from 'classnames';

function Link({to, children, className, activeClassName}){
    const {navigate, currentPath} = useContext(NavigationContext);
    
    const handleClick = (e) =>{
        e.preventDefault();
        navigate(to);
    };

    const classes = classNames(
        className,
        currentPath === to && activeClassName
    );

    return <a className={classes} onClick={handleClick}>{children}</a>;

}

export default Link;