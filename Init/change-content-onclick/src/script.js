(function(){
    let tabs = document.querySelectorAll(".tabs a");

    for (let tab of tabs)
    {
        tab.addEventListener('click', function(){
            console.log('click');
            afficher(tab)
        })
    }
    
    let a = document.querySelector('a[href="'+window.location.hash+'"]')
    afficher(a)
    
    function afficher(a){
            let div = a.parentNode.parentNode.parentNode;
            let li = a.parentNode;
            div.querySelector('.tabs .active').classList.remove('active')
            li.classList.add('active');
            div.querySelector('.tabs-content .active').classList.remove('active');
            div.querySelector(a.getAttribute('href')).classList.add('active');
        }
    
})()


