import { title, subtitle } from "@/components/primitives";
import {Divider} from "@nextui-org/react";

import "./class.css"
export default function AboutPage() {
  return (
    <>
      <div className="flx">
			<img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"/>
        <div className="flx-col">
          <h1 className={title()}>Kyle Snyder</h1>
		  <br></br>
          <p className={subtitle({ class: "mt-2	" })}>Our Candidate</p>
        </div>
      </div>
	  <div className="ff"></div>
 	  <div>
	   <p className="df">Backstory</p>
	  </div>
    </>
  );
}
