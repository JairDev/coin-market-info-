import {useEffect, useState, useRef} from "react"

function useNearScreen({distance = "0px"}) {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const isObserver = (entries, observer) => {
      const el = entries[0]
      if(el.isIntersecting) {
        if(el.target.className === "content-articles") {
          el.target.classList.add("display")
          setShow(true)
          observer.disconnect()
        }else {
          setShow(true)
        }
      }
    } 
  
    const observer = new IntersectionObserver(isObserver, {
      rootMargin: distance
    })
    observer.observe(elementRef.current)
    
  })
  return {show, elementRef}
}

export default useNearScreen