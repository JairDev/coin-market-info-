import {useEffect, useState, useRef} from "react"

function useNearScreen({distance = "50px"} = {}) {
  // console.log(distance)
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const isObserver = (entries, observer) => {
      const el = entries[0]
      
      if(el.isIntersecting) {
        if(el.target.className === "content-articles") {
          el.target.classList.add("display")
          // console.log(el.target)
        }
        setShow(true)
        observer.disconnect ()
      }
    } 
    const observer = new IntersectionObserver(isObserver, {
      rootMargin: distance
    })
    observer.observe(elementRef.current)
    return () => observer.disconnect()
  })
  return {show, elementRef}
}

export default useNearScreen