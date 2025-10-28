'use client'
import { useSearchParams } from "next/navigation";

export default  function Useparam() {
const categParams = useSearchParams()

return categParams;
}