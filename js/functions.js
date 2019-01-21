
function MenuToogle() {

  if(document.getElementById( 'ul_nav' ).style.height == 'auto') {

    document.getElementById( 'ul_nav' ).style.height = '0px';
    document.getElementById( 'button_nav_mobile' ).classList.remove('button_nav_menu--close');
    document.getElementById( 'button_nav_mobile' ).classList.add('button_nav_menu--open');

  } else {

    document.getElementById( 'ul_nav' ).style.height = 'auto';
    document.getElementById( 'button_nav_mobile' ).classList.remove('button_nav_menu--open');
    document.getElementById( 'button_nav_mobile' ).classList.add('button_nav_menu--close');

  }

}
