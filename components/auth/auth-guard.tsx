import React from 'react';
import { signIn, useSession } from '../../node_modules/next-auth/client';

export default function AuthGuard({ children }) {

    const [session, loading] = useSession()

    const isUser = !!session?.user
    React.useEffect(() => {
        if (loading) return // Do nothing while loading
        if (!isUser) signIn() // If not authenticated, force log in
    }, [isUser, loading])

    if (isUser) return children

    // Session is being fetched, or no user.
    // If no user, useEffect() will redirect.
    return <div>Loading...</div>
}