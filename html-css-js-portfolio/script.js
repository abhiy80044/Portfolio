function toggleMenu(){
    const menu= document.querySelector(".menu-link");
    const icon=document.querySelector(".hamburger-icon");
    menu.classlist.toggle("open" );
    icon.classlist.toggle("open");
}