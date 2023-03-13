import "../styles/globals.css"
import { Space_Grotesk } from "next/font/google"

const spacegrotesk = Space_Grotesk({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
	return (
		<main className={spacegrotesk.className + " bg-[#151515] text-white"}>
			<Component {...pageProps} />
		</main>
	)
}
