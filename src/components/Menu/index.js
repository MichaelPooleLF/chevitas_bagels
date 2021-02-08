import React, {Fragment} from 'react';
import HeroImage from "../Hero-Image";
import iconDetails from "../images/icons";
import ChevitasIcon from "../Icon";
import {menuItemsArr} from '../messages/menu';
import MenuSection from './menuSection';
import './menu.css';

const Menu = ({
	lang
}) => {
	const x = window.matchMedia('(min-width: 376px)');

	return (
		<Fragment>
			{x.matches && <HeroImage page="menu"/>}
			<div className="menu-wrapper">
				<h1>Menu</h1>
				<main className="menu">
					<div>
						{menuItemsArr.map((type, i) => <MenuSection lang={lang} type={type} key={type.label}/>)}
					</div>
				</main>
				<div className="social-media-wrapper">
					<h2>Order online through Grubhub or Doordash, or call us to place an order at our store!</h2>
					<div className="social-media">
						{Object.keys(iconDetails).map((icon, i) => (
							i < 3 && <ChevitasIcon icon={iconDetails[icon]} key={i}/>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Menu;
