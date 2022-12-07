import { useContext } from "react"
import DecideContext from "../context/DecideContext"

const useDecide = () => {
    return useContext(DecideContext)
}

export default useDecide;