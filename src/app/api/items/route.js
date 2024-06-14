import { rule } from "postcss";

export async function GET(){
    // 1. get access token
    const token = await getToken();
    
    // 2. get data from TDX api
    if(token){
        const apiData = await fetchData(token);
        return Response.json({apiData});
    } else{
        return Response.json(
            { erroe: 'Failed to retrieve access token'},
            { status: 401}
        );
    }
    
    
}

async function getToken(){
    const anthUrl = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
    const params = new URLSearchParams();
    params.append('grant_type','client_credentials');
    params.append('client_id',process.env.TDX_CLIENT_ID);
    params.append('client_secret',process.env.TDX_CLIENT_SECRET);

    try {
        const response = await fetch(authUrl, {
            method: 'POST',
            headers:{
                'Content_type': 'application/x-www-form-urlencoded'
            },
            body: params,
        });

        if (response.ok) {
            const data = await response.json();
            console.log(JSON.stringify(data));
            return data.access_token;
        } else{
            console.error("ERROR fetching token:", response.status);
        }
    } catch (error) {
        console.log('ERROR fetching token:',error);
    }
    }

    async function fetchData(token) {
        const apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty";

        try {
            const response = await fetch(apiUrl,{
                method: 'GET',
                headers:{
                    Authorization:`bearer' ${token}`,
                    'Content-Type' : 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(JSON.stringify(data));
                return data;
            } else{
                console.error("ERROR fetching data:", response.status);
            }
        } catch (error) {
            console.log('ERROR fetching data:',error);
        }
        return null;
    }
