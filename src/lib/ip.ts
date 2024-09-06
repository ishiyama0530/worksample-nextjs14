import "server-only";

import { headers } from "next/headers";

export function getIpAddress() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return adjustIp(forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS);
  }

  return adjustIp(headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS);
}

const adjustIp = (ip: string) => {
  return ip === "::1" ? "127.0.0.1" : ip;
};
