import { useRef, useState, useEffect } from 'react'

export default function Cover({ className, issue, imgSrc }) {
    const containerRef = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)

const callbackFunction = (entries) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
}
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}

useEffect(() => {
    
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) {
        observer.observe(containerRef.current)
        // window.location.replace(`/#${containerRef.current.id}`)
        document.body.className = `issue-${issue}`
    }
    
    return () => {
    if(containerRef.current) observer.unobserve(containerRef.current)
    }
}, [containerRef, options])

    return (
        <section className={className} id={`issue-${issue}`} ref={containerRef}>
            <img src={imgSrc} alt={`cover of backstage talks issue ${issue}`} />
            <p>{`Issue #${issue}`}</p>
            <a href={`https://www.bruil.info/product/backstage-talks-${issue}/`}>BUY HERE</a>
            <div>or in <a href="https://backstagetalks.com/stocklist.php">seleted stores</a></div>
        </section>
    )
}