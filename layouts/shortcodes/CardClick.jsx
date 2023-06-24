import Link from "next/link"

const Cardclick = ({ href, type, rel, children }) => {
  return (
    <Link href={href} target="_self"  className={`btn mb-4 me-4 ${type === "outline"? "btn-outline-primary" : "btn-primary"}`}>
      {children}
    </Link>
  )
}

export default Cardclick