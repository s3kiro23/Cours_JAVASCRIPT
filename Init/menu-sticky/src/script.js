(function (){

    window.addEventListener('scroll', function()
    {
        let menu = document.querySelector('.menu');
        console.log(menu.getBoundingClientRect().top)
        
        if (menu.getBoundingClientRect().top<scrollY)
        {
            if (!menu.classList.contains('fixed'))
            {            
                menu.classList.add('fixed');
                console.log('add')
            }        
        }
        else if (menu.classList.contains('fixed'))
        {            
            menu.classList.remove('fixed');
            console.log('remove')
        }    
    })
})()

