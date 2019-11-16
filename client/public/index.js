// allows us to use doc methods like setAttribute

$ = queryString => document.querySelector(queryString);
let knots = document.querySelectorAll("a-torus-knot");
let dodecs = document.querySelectorAll("a-dodecahedron");

const changeHue = (hue, i) => (hue + i) % 360;
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

let spheres = document.querySelectorAll("a-sphere");
let sphere_hue = 45;
let [sph_pos_x, sph_pos_y, sph_pos_z] = [0, -1.25, -5];

const animateSpheres = () => {
  sphere_hue = changeHue(sphere_hue, 2.5);
  [sph_pos_x, sph_pos_y, sph_pos_z] = [
    changeRot(sph_pos_x, 0),
    changeRot(sph_pos_y, Math.sin(Date.now())),
    changeRot(sph_pos_z, 0)
  ];
  const color = `hsl(${sphere_hue}, 75%, 25%)`;
  const position = `${sph_pos_x} ${sph_pos_y} ${sph_pos_z}`;

  spheres.forEach(sphere => {
    sphere.setAttribute("color", color);
    sphere.setAttribute("position", position);
  });
  requestAnimationFrame(animateSpheres);
};

// // for starting animation
requestAnimationFrame(animateSpheres);
requestAnimationFrame(animateTorus);
