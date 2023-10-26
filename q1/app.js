let rect = document.querySelector('.canter');
rect.addEventListener('mousemove', function(details) {
    let rectanglelocation = rect.getBoundingClientRect()
    let insidRectValue = details.clientX - rectanglelocation.left
   
    if (insidRectValue < rectanglelocation.width / 2 ) {
        let RBColor = gsap.utils.mapRange(0 ,rectanglelocation.width / 2, 255, 0, insidRectValue);
        gsap.to(rect, {
            backgroundColor: `rgb(${RBColor}, 0, 0)`,
            
        });
    }else {
        let BBColor = gsap.utils.mapRange(rectanglelocation.width ,rectanglelocation.width / 2 , 255, 0, insidRectValue);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${BBColor})`,
            
        });
    } 

})

rect.addEventListener('mouseleave', function() {
   gsap.to(rect, {
    backgroundColor: `white`,
   });
   
});