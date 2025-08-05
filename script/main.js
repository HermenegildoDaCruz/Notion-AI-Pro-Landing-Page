const openMobileNav = document.querySelector("#open-nav")
const closeMobileNav = document.querySelector("#close-nav")

// Open Mobile Navigation
openMobileNav.addEventListener("click", function(e){

    // Show Mobile Navigation
 
    document.querySelector(".header-nav").style.transform = "translateY(0%)"

    // Filter all sections
    document.querySelector("section").classList.add("filter-blur-10px")
})

// Hide Mobile Navigation
closeMobileNav.addEventListener("click", function(e){
    
    // Hide Mobile Navigation
    document.querySelector(".header-nav").style.transform = "translateY(-100%)"
    
    // Remove Filter (All Sections)
    document.querySelector("section").classList.remove("filter-blur-10px")

})

// Scroll to top
window.addEventListener("scroll", function(e){
    if (window.scrollY > 1750){
        document.querySelector(".go-up").style.transform = "translateX(0%)" 
        
        // Scroll to top event
        document.querySelector(".go-up").addEventListener("click", function(e){
            window.scrollTo(
                {
                    top:0,
                    behavior: "smooth"
                }
            )
        }) 
    }else{
        document.querySelector(".go-up").style.transform = "translateX(300px)" 
    }
})