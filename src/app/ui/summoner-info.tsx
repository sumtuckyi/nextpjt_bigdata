import { RIOT_API_URL, RIOT_API_KEY } from "../(home)/page";

// 이 컴포넌트에서 api요청을 보내고 응답을 받음 
async function getSummoner(id :string) {
    console.log(id)
    const response = await fetch(`${RIOT_API_URL}/${id}`,
    {
        headers: {"X-Riot-Token": `${RIOT_API_KEY}`}
    });
    return response.json();
}

export default async function SummonerInfo({id} : {id :string}) {
    const summoner = await getSummoner(id);
    const profileImgUrl = `https://ddragon.leagueoflegends.com/cdn/14.5.1/img/profileicon/${summoner.profileIconId}.png`;
    return (
        <div>
            <img src={profileImgUrl} alt="" />
            <h6>{JSON.stringify(summoner)}</h6>
        </div>
    );
}