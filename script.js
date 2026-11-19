let extensions = [

  
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
  

]

const  extensionContainer = document.querySelector('.grid-extensions');
const fillterButton = document.querySelectorAll('.btn-navigasi');
const btnTheme = document.querySelector('.theme')
const themeIcon = document.querySelector('.theme img')

btnTheme.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        themeIcon.src = './assets/images/icon-sun.svg'
    } else {
        themeIcon.src = './assets/images/icon-moon.svg'
    }
    
})



fillterButton.forEach(function(button){
    button.addEventListener('click', function(){
         let fillteredExtensions ; 

         if (button.textContent === 'All'){
            fillteredExtensions = extensions
         } else if (button.textContent === 'Active'){
            fillteredExtensions = extensions.filter(function(extension){
                 return extension.isActive === true;

            })
         } else if (button.textContent === 'Inactive'){
            fillteredExtensions = extensions.filter(function(extension){
                return extension.isActive === false;
            })
         }
           renderExtensions(fillteredExtensions);


           fillterButton.forEach(function(btn){
            btn.classList.remove('selected');
           
            
        })
            button.classList.add('selected');
    })
  
})


function renderExtensions(data){
    extensionContainer.innerHTML = '';
data.forEach(function(extension){

    // create name extensions
    const h3 = document.createElement('h3')
    const textH3 = document.createTextNode(extension.name)

    // create container extensions

    const card = document.createElement('div')
    card.className = ('container-extensions')

    // create img extensions
    const  img = document.createElement('img')
    img.src = extension.logo

    // create header extensions
    const header = document.createElement('div');
    header.className = ('header-extensions');

    // create header caption
    const caption = document.createElement('div');
    caption.className = 'header-caption';

    // create description
    const p = document.createElement('p')
    const pDesc = document.createTextNode(extension.description)
    p.className = 'p'

    // create footer
    const footer = document.createElement('div')
    footer.className = 'footer-extensions'

    // create button remove
    const button = document.createElement('button');
    button.className = 'remove';
    const buttonTeks = document.createTextNode ('Remove');

    button.addEventListener('click', function(){
        extensions = extensions.filter(function(item){
            return item.name !== extension.name;
        })

        renderExtensions(extensions);
    })

    // create label
    const label = document.createElement('label');
    label.className = 'switch';

    // create input
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = extension.isActive;
    input.addEventListener('change', function(){
        extension.isActive = input.checked
    })

    const span = document.createElement('span');
    span.className = 'slider'


   

    h3.appendChild(textH3);
    caption.appendChild(h3);

    header.appendChild(img);
    header.appendChild(caption);

    p.appendChild(pDesc);
    caption.appendChild(p);

    button.appendChild(buttonTeks);
    footer.appendChild(button);

    label.appendChild(input);
    label.appendChild(span);
    footer.appendChild(label);
   
    
    card.appendChild(header);
    card.appendChild(footer);

    extensionContainer.appendChild(card);
    

   


})

}

renderExtensions(extensions);


