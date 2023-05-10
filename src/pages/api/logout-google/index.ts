import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.redirect(
    `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${process.env.NEXT_PUBLIC_BASE_URL}`
  );
};

export default handler;
