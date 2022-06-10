(function (){

    window.addEventListener('scroll', function(){

        let sidebar = document.querySelector('.sidebar p')
        let contentSidebar = document.querySelector('.sidebar')
        let menu = document.querySelector('.menu');
        console.log(menu.getBoundingClientRect().top+' menu')
        console.log(sidebar.getBoundingClientRect().bottom+' sidebar')
        
        if (sidebar.getBoundingClientRect().top<scrollY)
        {
            if (!sidebar.classList.contains('fixed'))
            {            
                sidebar.classList.add('fixed');
                console.log('add')
            }        
 
        }
        else if (sidebar.classList.contains('fixed'))
        {            
            sidebar.classList.remove('fixed');
            console.log('remove')
        }

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

