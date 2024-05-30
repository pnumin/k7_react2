import { useEffect , useState} from "react";
import sarea from '../db/sarea.json' ;

export default function SubwayInfo() {
  const apikey = process.env.REACT_APP_API_KEY;

  const [ops, setOps] = useState([]) ;
  const [areaData, setAreaData] = useState() ;
  const [tags, setTags] = useState([]) ;

  const handleSelectArea = (e) => {
    console.log(e.target.value)
    
    getData(e.target.value);
  }

  const getData = async (cd) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const hours = ('0' + (today.getHours()-1)).slice(-2); 

    let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
    url = url + `serviceKey=${apikey}`;
    url = url + `&pageNo=1&numOfRows=5&resultType=json&controlnumber=${year}${month}${day}${hours}`
    url = url + `&areaIndex=${cd}`;

    console.log(url)
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data.getIndoorAirQualityByStation.body.items.item[0])
    setAreaData(data.getIndoorAirQualityByStation.body.items.item[0])
  }

  useEffect(()=>{
    if (areaData === undefined) return ;
    const k = ['co2', 'co', 'no2', 'no','nox', 'o3', 'pm25','fad' ]
    const kname = ['이산화탄소', '일산화탄소', '이산화질소', '일산화질소', '질소산화물', '오존', '초미세먼지', '폼말데하이드']


    let tm = k.map((item, idx) => 
                    <div className="flex flex-col" key={item}>
                      <div className="flex flex-col justify-center items-center h-15 bg-sky-200">
                        <div className="text-xl font-bold">{item}</div>
                        <div className="block text-sm">({kname[idx]})</div>
                      </div>
                      <div className="flex justify-center items-center h-10">
                        <div className="text-xl font-bold text-green-700">{areaData[item]}</div>
                      </div>
                    </div>
                    )
    setTags(tm)
  }, [areaData]);

  useEffect(() => {
    console.log(sarea)
    let tm = sarea.map((item, idx) => 
                        <option value={item['코드']} key={`op${idx}`}>{item['측정소']}</option>
                      ) ;
    setOps(tm) ;
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-top my-10 items-center">
      <div>대기정보확인 지역선택</div>
      <div className="w-1/2 ">
        <select onChange={handleSelectArea}
                id="countries" className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>---지역선택---</option>
          {ops}
        </select>
      </div>
      <div className="w-5/6 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-8 gap-4 my-10">
        {tags}
      </div>
    </div>
  )
}
