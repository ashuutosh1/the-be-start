export default function NotFound() {
    return (
        <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Not Found</h2>
                <p className="text-gray-600 dark:text-gray-400">Could not find requested resource</p>
            </div>
        </div>
    );
}
