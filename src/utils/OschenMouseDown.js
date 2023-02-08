/*-----------------------------------------------------------------------------------

    Name: Oschen - Windows 10 - @chendodev
    Theme URI: @chendodev
    Description: Open Source Projects - Oschen
    Author: @chendodev - chendo | developer && web designer
    Author URI: https://facebook.com/chendoio
    Github: https://github.com/chendodev
    Youtube: https://youtube.com/@chendodev
    Website: https://chendo.dev

-----------------------------------------------------------------------------------*/
function touring(container) {
  const parentPosition = document.querySelectorAll(container);
  parentPosition.forEach(change => change.style.position = 'absolute');
}
const OschenMouseDown = (e, containerRef) => {

  let target = e.target
  if(!target.classList.contains(containerRef)) return;

  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);

  target.prevX = e.clientX;
  target.prevY = e.clientY;

  function mousemove(e) {

    target.newX = target.prevX - e.clientX;
    target.newY = target.prevY - e.clientY;

    target.docuLeft = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1;
    target.docuTop = window.getComputedStyle(target).getPropertyValue('top').split('px')[0] * 1;

    target.style.left = target.docuLeft - target.newX + "px";
    target.style.top = target.docuTop - target.newY + "px";

    target.prevX = e.clientX;
    target.prevY = e.clientY;

  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }

}
export {touring};
export default OschenMouseDown;