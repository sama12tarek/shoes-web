  
           const links = document.querySelectorAll('a[data-section]');


links.forEach(link => {
  link.addEventListener('click', function(event) {
    
    event.preventDefault();
    
  
    const sectionId = this.getAttribute('data-section');
    
    
    const targetSection = document.getElementById(sectionId);
    
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
 function functio(small){
  var full = document.getElementById("imagebox")
  full.src = small.src
          }
    

    
