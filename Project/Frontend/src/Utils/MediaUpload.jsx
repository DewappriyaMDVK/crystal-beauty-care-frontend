import {createClient} from "@supabase/supabase-js"

const supabase = createClient("https://jcskpgvzqejeeghtxntj.supabase.co",
                                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impjc2twZ3Z6cWVqZWVnaHR4bnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MzMzNzYsImV4cCI6MjA2MTQwOTM3Nn0.NbwPVoGrsRJ68baeB_uiXtDp6jsAL0gsPSuYhr9qe5A")
export default function MediaUplod(file){

    const promise = new Promise((reslove,reject)=>{

        if(file == null){
            reject("No file Selected.")
        }
        const timeStamp = new Date().getTime();
        const newFileName = file.name+timeStamp

        supabase.storage.from("images").upload(newFileName,file,{
            cacheControl:"3600",
            upsert:false,
        })
        .then(()=>{
            const url = supabase.storage.from("images").getPublicUrl(newFileName)
            reslove(url.data.publicUrl)
        })
        .catch((error) => {
            reject("File Upload Fail. ",error)
        })
    })

    return promise
}