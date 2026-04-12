export async function verifyCaptcha(
  token: string,
  remoteIp?: string
): Promise<boolean> {
  const secret = process.env.HCAPTCHA_SECRET;

  if (!secret) {
    return false;
  }

  const params = new URLSearchParams({
    secret,
    response: token
  });

  if (remoteIp) {
    params.append("remoteip", remoteIp);
  }

  const response = await fetch("https://api.hcaptcha.com/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString(),
    cache: "no-store"
  });

  if (!response.ok) {
    return false;
  }

  const payload = (await response.json()) as { success?: boolean };
  return payload.success === true;
}
