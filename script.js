const menuItems = document.querySelectorAll('.menu-item');

const messageNotification = document.querySelector('#message-notification');

//Notification Sidebar
const changeActiveItem = ()=>{
    menuItems.forEach(element => {
        element.classList.remove('active');
        
    });

}

menuItems.forEach(element =>{
    element.addEventListener('click', () =>{
        changeActiveItem();
        element.classList.add('active');
        if(element.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block';

            document.querySelector('#notifications .notification-count').style .display = 'none'
        }
    })
})

//Message DialogBox
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val)!= -1){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display = 'none';
        }
    })
};

messageSearch.addEventListener('keyup', searchMessage);
messageNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none'
    },2000)

});

//Theme Customization//

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const openTheme = ()=>{
    themeModal.style.display = 'grid';
}
theme.addEventListener('click',openTheme);
