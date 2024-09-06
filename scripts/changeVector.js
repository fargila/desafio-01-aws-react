document.addEventListener('DOMContentLoaded', function() {
    const vectorImg = document.getElementById('imgVector')
    
    vectorImg.addEventListener('mouseover', function() {
        vectorImg.src = '/images/redVector.png'
    })

    vectorImg.addEventListener('mouseout', function() {
        vectorImg.src = '/images/vector.png'    
    })
})
