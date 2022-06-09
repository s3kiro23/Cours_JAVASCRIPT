let spoilers = document.querySelectorAll('.spoiler');

for (s of spoilers)
{
    let button = s.querySelector('button');

    button.addEventListener('click', function(e) {
        console.log('toto');
        let spoil = s.querySelector('.spoiler-content')
        if(spoil.classList.contains('visible'))
        {
            s.querySelector('.spoiler-content').classList.remove('visible');
            this.innerHTML = 'Afficher le spoil'
        }
        else{
            s.querySelector('.spoiler-content').classList.add('visible');
            this.innerHTML = 'Masquer le spoil'
        }
    })
}