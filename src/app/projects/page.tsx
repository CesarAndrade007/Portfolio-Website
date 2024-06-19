import Link from "next/link";

export default function Projects() {
    return (
        <>
            <h1>My Projects</h1>
            <ol>
                <li><Link href="">Project</Link></li>
            </ol>
            <Link href="/">Back to home</Link>
        </>
    );
}