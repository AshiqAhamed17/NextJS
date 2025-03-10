import axios from "axios";

async function getUser() {
    const res = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
    await new Promise(r => setTimeout(r, 1500));
    return res.data;
}
export default async function Home() {

    const userData = await getUser();
    return (
        <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded bg-slate-400 text-slate-800">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
    )
}