import useDecide from "./useDecide";

const useAuth = () => {
    const { user } = useDecide();
    const authenticated = user !== null;
    return { authenticated };
}

export default useAuth;