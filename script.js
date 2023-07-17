function showThePhoto() {
    let photo = document.getElementById("photo");
    photo.src = "https://img.freepik.com/premium-photo/most-beautiful-flower-world-close-up-generative-ai_691560-9725.jpg?w=740";
    photo.style.display = "block";
  
    setTimeout(function() {
      photo.src = "";
      photo.style.display = "none";
    }, 5000);
  }