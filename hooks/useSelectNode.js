
export const useSelectNode = (nodeElement, classElement) => {

    const onclick = () => {

      nodeElement.current.classList.add(classElement);
  
      const siblings = Array.from(nodeElement.current.parentNode.children);
      siblings.forEach(sibling => sibling.classList.remove(classElement));

      nodeElement.current.classList.add(classElement);

    }

    return { onclick }

}