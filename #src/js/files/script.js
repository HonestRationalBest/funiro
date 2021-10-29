window.onload = function(){
    document.addEventListener('click', documentActions);

    // Actions

    function documentActions(e){
        const targetElement = e.target
        if(window.innerWidth < 768 && isMobile.any()){
            if(targetElement.classList.contains('.menu_arrow')) {
                targetElement.closest('.menu__item').classList.toogle('_hover')
            }
            if(!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0){
               _removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover") 
            }
        }
        if(targetElement.classList.contains('search-form__icon')){
            document.querySelector('.search-form').classList.toggle('_active')
        }else if(!targetElement.classList.contains('search-form__icon') && document.querySelector('.search-form._active') ){
            document.querySelector('.search-form').classList.remove('_active')
        }
    }
}