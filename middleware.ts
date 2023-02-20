import { NextResponse } from "next/server";
import type { NextFetchEvent } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";
import { CONSTANTS } from "./services/config/api-config";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, event: NextFetchEvent) {
  // console.log("redirect matcher url", request.nextUrl.pathname);
  let redirect: any;

  if(CONSTANTS.ENABLE_REDIRECT_FEATURE)
  {
    event.waitUntil(
      (redirect = await fetch(`${CONSTANTS.API_BASE_URL}/${CONSTANTS.API_MANDATE_PARAMS}&method=get_redirecting_urls&entity=signin`, {
        method: "GET",
      })
        .then((res: any) => {
          return res.json();
        })
        .then((data: any) => {
    // console.log("")
          return data;
        }))
    );
    
    console.log("redirect middleware", redirect);
    let url = request.nextUrl.clone();
  
    if (url.pathname.startsWith("/_next")) return NextResponse.next();
  
    let finded_data = redirect.message.find(
      (value: any) => value.from === url.pathname
    );
    console.log("request data", request.nextUrl)
    if (finded_data) {
      // console.log("redirect url", url);
      url.pathname = finded_data.to;
      url.search = "";
      // NextResponse.rewrite()
      return Response.redirect(url, 308);
    } else {
      return NextResponse.next();
    }
  }
  else
  {
    console.log("No 301 302 available for you");
  }

  
}

export const config = {
  // matcher: ["/bpl/:brandname*"],
  matcher: "",
};
