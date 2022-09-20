import { useEffect, useState } from 'react'

export default function Nav() {
    const issueList = [6, 5, 4, 3, 2, 1]
    const [selected, setSelected] = useState(null);

    return (
        <nav>
            <ol>
                {
                    issueList.map(item => <li key={item}><a href={`#issue${item}`} onClick={() => document.body.className = `issue${item}`}>{`Issue #${item}`}</a></li>)
                }
            </ol>
        </nav>
    )
}