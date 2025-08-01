interface ProfilePageProps {
    params: Promise<{
        username: string;
    }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
    const { username } = await params;

    return (
        <div>
            <h1>Profile: {username}</h1>
            <p>Welcome to {username}&apos;s profile page!</p>
        </div>
    );
}
