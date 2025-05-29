import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./uselocalStorage";






export function  useSearchHistory(){
  const [history,setHistory] =  useLocalStorage(
        "search-history",
        []
    )
    const queyclient =useQueryClient()
 const historyQuery =   useQuery({
        queryKey:['search-history'],
        queryFn:()=>history,
        initialData: history

    })

    const addHistory = useMutation({
         mutationFn:async(search)=>{
            const newSearch={
                ...search,
                id:`${search.lat}.${search.lon}.${Date.now()}`,
                 searchedAt: Date.now()
               
                
            }
            

            const filtationHistory = history.filter(
                (item)=>!(item.lat=== search.lat &&item.lon=== search.lon)
            )
            const newHistory = [newSearch,...filtationHistory].slice(0,10)
                setHistory(newHistory)
                return newHistory
         },

         onSuccess:(newHistory)=>{
            queyclient.setQueryData(['search-history'],newHistory )
         }
    })


    const clearHistory = useMutation({
        mutationFn:async()=>{
            setHistory([])
            return [];
        },
          onSuccess:()=>{
            queyclient.setQueryData(['search-history'],[] )
         }


    })


    return{
        history:historyQuery.data??[],
        addHistory,
        clearHistory,
    }
}