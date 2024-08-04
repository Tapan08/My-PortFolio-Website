//Menu Toggle

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById( 'nav-close' )

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')})
}

    

const navLink = document.querySelectorAll( '.nav-link' );

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction) )


const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


// Email JS

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_4w2imha', 'template_dnlrasv', '#contact-form', 'H_FKpkBraelJXcWOp')
    .then(() => {
            //Show sent message
            contactMessage.textContent = 'Message sent successfully ☺️'

            // Remove Message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, () => {
            //Show error message
            contactMessage.textContent = 'Error sending message 😞'
        })
}

contactForm.addEventListener('submit', sendEmail)


// Show scroll Up

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// scroll section active link

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }      
    })
}
window.addEventListener('scroll', scrollActive)


// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400, 
  //  reset: true 
})

sr.reveal(`.home_data, .experience, .skills, .contact_container`)
sr.reveal(`.home_img`, {delay: 600})
sr.reveal(`.home_scroll`, {delay: 800})
sr.reveal(`.work_card`, {interval: 100})
sr.reveal(`.about_content`, {origin: 'right'})
sr.reveal(`.about_img`, {origin: 'left'})