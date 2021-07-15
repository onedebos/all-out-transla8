import styles from './Button.module.css'

export default function Button({loading}){

    return (
        <button class={styles.button} data-testid="submit">{loading ? "Translating..." : "Translate"}</button>
    )
}