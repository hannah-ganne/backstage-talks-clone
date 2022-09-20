import { useRef, useState, useEffect } from 'react'

export default function Cover({ issue, imgSrc }) {
    const containerRef = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)

const callbackFunction = (entries) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
}
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8
}

useEffect(() => {
    
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) {
        observer.observe(containerRef.current)
        document.body.className = containerRef.current.id   
    }
    
    return () => {
        if (containerRef.current) {
            observer.unobserve(containerRef.current)
        }
    }
}, [containerRef, options])

    return (
        <section id={`issue${issue}`} ref={containerRef}>
            <img src={imgSrc} alt={`cover of backstage talks issue ${issue}`} />
            <p>{`Issue #${issue}`}</p>
            <a href={`https://www.bruil.info/product/backstage-talks-${issue}/`}>BUY HERE</a>
            <div>or in <a href="https://backstagetalks.com/stocklist.php">seleted stores</a></div>
        </section>
    )
}