import SummonerInfo from "@/app/ui/summoner-info";

export default async function SummonerDetail({
    params: { id },
} :{
    params: {id :string};
}){
  return (
    <div>
        <h3>유저 정보</h3>
        <SummonerInfo id={id}/>
    </div>
  )
}