import type { NextApiRequest, NextApiResponse } from "next";
import { getProviders } from "next-auth/react";

const SessionProviders = async (req: NextApiRequest, res: NextApiResponse) => {
  const providers = await getProviders();
  res.status(200).json(providers);
};

export default SessionProviders;
