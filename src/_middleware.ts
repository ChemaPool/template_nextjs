// import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export default withAuth(
const middleware = async (request: NextRequest) => {
  const jwt: RequestCookie | undefined =
    process.env.NODE_ENV === "production"
      ? request.cookies.get("__Secure-next-auth.session-token")
      : request.cookies.get("next-auth.session-token");

  if (jwt === undefined && !request.nextUrl.pathname.includes("/login"))
    return NextResponse.redirect(new URL("/", request.url));

  if (jwt && request.nextUrl.pathname.includes("/login"))
    return NextResponse.redirect(new URL("/dashboard", request.url));

  if (jwt) return NextResponse.next();
};
//   {
//     callbacks: {
//       authorized({ token }) {
//         // console.log("imprimo el token ", token);
//         // `/admin` requires admin role
//         // if (req.nextUrl.pathname === "/admin") {
//         //   return token?.userRole === "admin";
//         // }
//         // `/me` only requires the user to be logged in
//         return !!token;
//       },
//     },
//   }
// );

export default middleware;

export const config = { matcher: ["/login", "/dashboard"] };
