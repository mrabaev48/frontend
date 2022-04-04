import {FC} from "react";
import {NavLink} from "react-router-dom";
import classes from './NavigationButton.module.scss';

export interface INavigationButtonProps {
    to: string;
}

const NavigationButton:FC<INavigationButtonProps> = ({
    to,
    children
                                                     }) => {
    return (
        <NavLink to={to} className={classes.navigationBtn}>
            {children}
        </NavLink>
    );
}

export default NavigationButton;