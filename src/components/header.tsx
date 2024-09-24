
import Link from "next/link"

export default function header() {
    return (
      <div className="header">
<img src="https://avatars.githubusercontent.com/u/163816473?v=4
"alt="Profile Pic" />
<h2 >     My Next.js Project
        </h2>



<ul className="header-buttons">
          <Link href={"/"} ><li>Home</li></Link>
          <Link href={"/about-us"} ><li>About us</li></Link>
          <Link href={"/contact-us"} ><li>Contact us</li></Link>
          <Link href={"/jobs"} ><li>Jobs</li></Link>
        </ul>
{/* Footer with "Raza@Sep2024" */}
<div className="footer">
          Raza@Sep2024
        </div>
       
      </div>
      
    )
    }
