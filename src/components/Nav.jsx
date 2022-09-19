export default function Nav() {
    const issueList = [6, 5, 4, 3, 2, 1]

    return (
        <nav>
            <ol>
                {
                    issueList.map(item => <li key={item}><a href={`#issue-${item}`}>{`Issue #${item}`}</a></li>)
                }
            </ol>
        </nav>
    )
}