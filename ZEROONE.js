document.addEventListener('DOMContentLoaded', function() {
co
console.log('Document is ready');

    // Smooth scroll for navigation links
    
    
const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.
    navLinks.

    n
forEach(link => {
        link.
        link

  
addEventListener('click', function(e) {
            e.
         
preventDefault();
            
       

    

 
const targetId = this.getAttribute('href').substring(1);
            
        
const targetElement = document.getElementById(targetId);
            
  
if (targetElement) {
                targetElement.
                targetE

             

   
scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
 }
       
// Modal functionality
)
    const modal = document.getElementById('modal');
    const modalBtn = document.getElementById('modalBtn');
    
     con
const closeBtn = document.querySelector('.close-btn');

    if (modalBtn) {
        modalBtn.
       
addEventListener('click', () => {
            modal.
            moda

       
style.display = 'block';
        });
    }

  
if (closeBtn) {
        closeBtn.
        closeBtn

     
addEventListener('click', () => {
            modal.
            moda

     
style.display = 'block';
        });
    }
 

   
window.addEventListener('click', (e) => {
        
 
if (e.target === modal) {
            modal.
            modal.

       
style.display = 'none';
        }
    });
// Form submission handling
    
   
const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.
        

 
preventDefault();
        
      
// フォーム送信ロジックをここに追加
        
        alert

     
alert('フォームが送信されました');
        form.
        form
reset();
    });
