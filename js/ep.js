$(document).ready(function() {
  // Text variables
  var texas = "I'm currently a fourth-year student at The University of Texas studying Management Information Systems.";
  var goals = "I love engineering valuable desktop and mobile experiences. Not only do you have to build the product, but you also have to manage it as well.";
  var paper = "I was one bureaucratic piece of paper from adding a CS major to my formal education. Instead, I've continued to follow my passion outside of school, including currently reading CLRS to learn the proper use of data structures and simple algorithms.";

  Tipped.create('#texas', texas, { position: 'left', size: 'large' });
  Tipped.create('#goals', goals, { position: 'rightbottom', size: 'large' });
  Tipped.create('#paper', paper, { position: 'rightbottom', size: 'large' });
});