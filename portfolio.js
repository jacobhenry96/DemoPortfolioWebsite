let image1 = document.querySelector('#car-image1');
let image2 = document.querySelector('#car-image2');
let image3 = document.querySelector('#car-image3');
let image4 = document.querySelector('#car-image4')
let skill1 = document.querySelector('#skill1');
let skillImage1 = document.querySelector('#skill-image1');
let skillText1 = document.querySelector('#skill-text1');
let skillDesc1 = document.querySelector('#desc1');
let skill2 = document.querySelector('#skill2');
let skillImage2 = document.querySelector('#skill-image2');
let skillText2 = document.querySelector('#skill-text2');
let skillDesc2 = document.querySelector('#desc2');
let skill3 = document.querySelector('#skill3');
let skillImage3 = document.querySelector('#skill-image3');
let skillText3 = document.querySelector('#skill-text3');
let skillDesc3 = document.querySelector('#desc3');
let skill4 = document.querySelector('#skill4');
let skillImage4 = document.querySelector('#skill-image4');
let skillText4 = document.querySelector('#skill-text4');
let skillDesc4 = document.querySelector('#desc4');
opacity = 0

skillDesc1.style.display = 'none';
skillDesc2.style.display = 'none';
skillDesc3.style.display = 'none';
skillDesc4.style.display = 'none';


image1.addEventListener('mouseover', function(){
    console.log('Hovering');
    image1.src = 'images/green1.png'
});
image1.addEventListener('mouseout', function(){
    console.log('Not Hovering');
    image1.src = 'images/1.png'
});


image2.addEventListener('mouseover', function(){
    console.log('Hovering');
    image2.src = 'images/green2.png'
});
image2.addEventListener('mouseout', function(){
    console.log('Not Hovering');
    image2.src = 'images/2.png'
});

image3.addEventListener('mouseover', function(){
    console.log('Hovering 3');
    image3.src = 'images/green3.png'
});
image3.addEventListener('mouseout', function(){
    console.log('Not Hovering 3');
    image3.src = 'images/3.png'
});

image4.addEventListener('mouseover', function(){
    console.log('Hovering 3');
    image4.src = 'images/3D Torus Knot (1).png'
});
image4.addEventListener('mouseout', function(){
    console.log('Not Hovering 3');
    image4.src = 'images/3D Torus Knot.png'
});


skill1.addEventListener('mouseover', function() {
    skillImage1.style.display = 'none';
    skillText1.style.display = 'none';
    skillDesc1.style.display = 'block';

})
skill1.addEventListener('mouseout', function() {
    skillImage1.style.display = 'inline-block';
    skillText1.style.display = 'block';
    skillDesc1.style.display = 'none';
})

skill2.addEventListener('mouseover', function() {
    skillImage2.style.display = 'none';
    skillText2.style.display = 'none';
    skillDesc2.style.display = 'block';

})
skill2.addEventListener('mouseout', function() {
    skillImage2.style.display = 'inline-block';
    skillText2.style.display = 'block';
    skillDesc2.style.display = 'none';
})

skill3.addEventListener('mouseover', function() {
    skillImage3.style.display = 'none';
    skillText3.style.display = 'none';
    skillDesc3.style.display = 'block';

})
skill3.addEventListener('mouseout', function() {
    skillImage3.style.display = 'inline-block';
    skillText3.style.display = 'block';
    skillDesc3.style.display = 'none';
})

skill4.addEventListener('mouseover', function() {
    skillImage4.style.display = 'none';
    skillText4.style.display = 'none';
    skillDesc4.style.display = 'block';

})
skill4.addEventListener('mouseout', function() {
    skillImage4.style.display = 'inline-block';
    skillText4.style.display = 'block';
    skillDesc4.style.display = 'none';
})





