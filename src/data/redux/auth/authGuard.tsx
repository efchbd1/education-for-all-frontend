import { ReactNode, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAuth } from "data/redux/auth/auth.selectors"
import { PATHS } from "routes/paths"

type Props = {
    children: ReactNode
}

// AuthGuard component to protect routes
export default function AuthGuard({ children }: Props) {
    const { isAuthenticated, isInitialized } = useSelector(selectAuth);
    const [loading, setLoading] = useState<boolean>(true);

    // useEffect hook to update loading state when auth initialization is complete
    useEffect(() => {
        if (isInitialized) {
            setLoading(false);
        }
    }, [isInitialized]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!isAuthenticated) {
        return <Navigate to={PATHS.LogIn} replace />;
    }

    return <>{children}</>;
}

// LoadingSpinner component to display during loading state
function LoadingSpinner() {
    return <div className="spinner">Loading...</div>;
}