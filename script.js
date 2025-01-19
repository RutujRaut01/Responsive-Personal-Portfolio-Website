function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    // Basically it targets that appearing vertical hamburger menu
    const icon = document.querySelector(".hamburger-icon");
   
    // toggle removes class if present and add's class if not present
    icon.classList.toggle("open");

     // This one targets that three horizontal lines of span 
     menu.classList.toggle("open");

}