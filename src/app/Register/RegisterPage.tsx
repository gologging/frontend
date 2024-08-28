export default function RegisterPage() {
    return (
        <div>
            <header className="flex md:hidden justify-between py-4 px-6">
                <div>
                    <h1>Welcome Mikkel</h1>
                </div>
                <div>
                    User
                </div>
            </header>
            <main className="m-4">
                <label>
                    Text input:
                </label>
                <input className="border rounded w-full py-2 px-3" id="name" type="text" placeholder="Your Name" />
            </main>
        </div>
    );
}