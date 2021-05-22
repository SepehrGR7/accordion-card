const toggleBtn = document.querySelectorAll('.accordion-question')
const accordionItem = document.querySelectorAll('.accordion-item')

function toggleCollapse(e) {
   const el = e.target.parentElement
   console.log(el.classList)

   accordionItem.forEach((item, idx) => {
      if (
         el.id === `accordion-item-${idx + 1}` ||
         el.parentElement.id === `accordion-item-${idx + 1}`
      ) {
         item.classList.toggle('open')
         item.lastElementChild.style.maxHeight
            ? (item.lastElementChild.style.maxHeight = null)
            : (item.lastElementChild.style.maxHeight = `${item.lastElementChild.scrollHeight}px`)
      } else {
         item.classList.remove('open')
         item.lastElementChild.style.maxHeight = null
      }
   })
}

toggleBtn.forEach(btn => btn.addEventListener('click', toggleCollapse))
