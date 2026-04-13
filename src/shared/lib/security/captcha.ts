export async function verifyCaptcha(
  token: string,
  remoteIp?: string,
): Promise<boolean> {
  const secret = process.env.HCAPTCHA_SECRET;

  if (!secret) {
    return false;
  }

  const params = new URLSearchParams({
    response: token,
    secret,
  });

  if (remoteIp) {
    params.append("remoteip", remoteIp);
  }

  const response = await fetch("https://api.hcaptcha.com/siteverify", {
    body: params.toString(),
    cache: "no-store",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  if (!response.ok) {
    return false;
  }

  const payload = (await response.json()) as { success?: boolean };
  return payload.success === true;
}
