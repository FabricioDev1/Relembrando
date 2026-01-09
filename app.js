'use strict'

const switcher = document.querySelector('.btn');
const terror = document.querySelector('.img');
const isDark = document.body.classList.contains('dark-theme');

        switcher.addEventListener('click', function() {
        document.body.classList.toggle("dark-theme")

        var className = document.body.className;
        if(className == "light-theme"){
            this.textContent = "Dark";
        }
        else{
            this.textContent = "Light";
            getelementby
        }
        console.log('current class name: '+ className);

        /* Fazer algo para monstrar a imagem apenas quando estiver em Dark theme, quando estiver no light não mostrar a imagem
        uma espécie de susto para o usuário */
    
    });