// allows us to use doc methods like setAttribute

$ = queryString => document.querySelector(queryString);

const randomNum = num => {
  return Math.floor(Math.random() * num);
};
let knots = document.querySelectorAll("a-torus-knot");
let dodecs = document.querySelectorAll("a-dodecahedron");

const changeRot = (rot, deg) => (rot + deg) % 180;

let knot_hue = 0;
let [knot_rot_x, knot_rot_y, knot_rot_z] = [0, 0, 0];

const animateTorus = () => {
  knot_hue = changeHue(knot_hue, 1.5);
  [knot_rot_x, knot_rot_y, knot_rot_z] = [
    changeRot(knot_rot_x, 0.5),
    changeRot(knot_rot_y, 0.5),
    changeRot(knot_rot_z, 0.5)
  ];
  //(color, saturation, opacity)
  const color = `hsl(${knot_hue}, 75%, 25%)`;
  const rotation = `${knot_rot_x} ${knot_rot_y} ${knot_rot_z}`;

  knots.forEach(knot => {
    knot.setAttribute("color", color);
    knot.setAttribute("rotation", rotation);
  });
  // dodecs.forEach(dodec => {
  //   dodec.setAttribute("color", color);
  //   dodec.setAttribute("rotation", rotation);
  // });
  requestAnimationFrame(animateTorus);
};

//---------SKY BOARD----------//

// // for starting animation

//requestAnimationFrame(animateTorus);
