import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Aahar Food Delivery`
    }, [title])
}
export default useTitle