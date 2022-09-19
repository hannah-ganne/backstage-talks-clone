

export default function Cover({ className, issue, imgSrc }) {
    return (
        <section className={className} id={`issue-${issue}`}>
            <img src={imgSrc} alt={`cover of backstage talks issue ${issue}`} />
            <p>{`Issue #${issue}`}</p>
            <a href={`https://www.bruil.info/product/backstage-talks-${issue}/`}>BUY HERE</a>
            <div>or in <a href="https://backstagetalks.com/stocklist.php">seleted stores</a></div>
        </section>
    )
}