
function MenuToogle(box_id, menu_id, button_id) {

	if(document.getElementById( box_id ).style.height == '211px') {

		// MENU CLOSE

		document.getElementById( box_id ).style.height = '0px';
		document.getElementById( box_id ).style.transition = 'all 600ms ease-out';

		document.getElementById( button_id ).classList.remove('button_nav_menu--close');
		document.getElementById( button_id ).classList.add('button_nav_menu--open');

		document.getElementById( menu_id ).style.height = '0px';
		document.getElementById( menu_id ).style.transition = 'all 600ms ease-out';

	} else {

		// MENU OPEN

		document.getElementById( box_id ).style.height = '211px';
		document.getElementById( box_id ).style.transition = 'all 600ms ease-out';

		document.getElementById( button_id ).classList.remove('button_nav_menu--open');
		document.getElementById( button_id ).classList.add('button_nav_menu--close');

		document.getElementById( menu_id ).style.height = '211px';
		document.getElementById( menu_id ).style.transition = 'all 600ms ease-out';

	}

}
