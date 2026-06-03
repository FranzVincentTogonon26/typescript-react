import { clsx } from "clsx"
import type { JSX } from "react"
import type { LanguagesProp } from "../languages"


type LanguagesChipsProps = {
    languages: LanguagesProp[];
    wrongGuessCount: number;
}

export default function LanguageChips({ languages, wrongGuessCount } : LanguagesChipsProps ) : JSX.Element {
    const languageElements = languages.map((lang: LanguagesProp, index: number) : JSX.Element => {
        const isLanguageLost: boolean = index < wrongGuessCount
        const styles: Omit<LanguagesProp, "name"> = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className: string = clsx("chip", isLanguageLost && "lost")
        return (
            <span
                className={className}
                style={styles}
                key={lang.name}
            >
        {lang.name}
      </span>
        )
    })

    return <section className="language-chips">{languageElements}</section>
}