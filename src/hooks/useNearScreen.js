import {useEffect, useState, useRef} from "react"

function useNearScreen({distance = "0px", once = true}) {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const isObserver = (entries, observer) => {
      const el = entries[0]
      if(el.isIntersecting) {
        if(el.target.className === "content-articles") {
          el.target.classList.add("display")
          setShow(true)
          once && observer.disconnect ()
        }else if(el.target.className === "check-point") {
          setShow(true)
          once && observer.disconnect ()
        }else {
          setShow(true)
        }
      }else {
        !once && setShow(false)
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