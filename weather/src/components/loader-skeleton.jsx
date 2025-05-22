import { Skeleton } from "./ui/skeleton";


function WeathSkeleton (){
return(
   <div className="space-y-50">
      <div className="grid gap-6">
        <Skeleton className={"h-[300px] w-full rounded-lg"}/>
        <Skeleton className={"h-[300px] w-full rounded-lg"}/>
        <div className="grid gap-6 md:grid-col-2">
              <Skeleton className={"h-[300px] w-full rounded-lg"}/>
              <Skeleton className={"h-[300px] w-full rounded-lg"}/>
        </div>
      </div>
   </div>
)
}
export default WeathSkeleton