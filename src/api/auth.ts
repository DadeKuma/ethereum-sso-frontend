type RequestPayload = {
    msg: string;
    status: string;
};

const baseUrl = "http://localhost:3005";

export const signIn = async (address: string, signature: string) => {
    const response = await fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "address": address, "signature": signature })
    });
    const result: RequestPayload = await response.json();
    console.log(result);
    return result.msg;
};

export const signUp = async (address: string) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "address": address })
    });
    const result: RequestPayload = await response.json();
    console.log(result);
    return result.msg;
};

export const nonce = async (address: string) => {
    const params = { address: address };
    const response = await fetch(`${baseUrl}/nonce/${address}`);
    const result: RequestPayload = await response.json();
    console.log(result);
    return result.msg;
};