const toggleBtn = document.querySelectorAll('.accordion-question')
const accordionItem = document.querySelectorAll('.accordion-item')

function toggleCollapse(e) {
   const el = e.target.parentElement

   accordionItem.forEach((item, idx) => {
      if (
         el.id === `accordion-item-${idx + 1}` ||
         el.parentElement.id === `accordion-item-${idx + 1}`
      ) {
         item.classList.toggle('open')
      } else {
         item.classList.remove('open')
      }

      setCollpaseHeight(item, el.id)
   })
}

function setCollpaseHeight(item, itemID) {
   if (item.id === itemID) {
      item.lastElementChild.style.maxHeight
         ? (item.lastElementChild.style.maxHeight = null)
         : (item.lastElementChild.style.maxHeight = `${item.lastElementChild.scrollHeight}px`)
   } else {
      item.lastElementChild.style.maxHeight = null
   }
}

toggleBtn.forEach(btn => btn.addEventListener('click', toggleCollapse))
