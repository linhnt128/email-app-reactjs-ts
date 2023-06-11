import { Navigate } from "react-router-dom";

interface IMyProps {
    user: boolean;
    redirectPath: string;
    children: any;
}

const ProtectedRoute = (props: IMyProps) => {

    if (!props.user) {
        return <Navigate to={props.redirectPath} replace />;
    }

    return props.children;
};

export default ProtectedRoute;