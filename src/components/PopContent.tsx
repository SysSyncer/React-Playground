const PopContent = ({copied}: {copied: boolean}) => {
    return (
        <section>
            {copied && (
                <p className="fixed bottom-4 right-4 border border-black border-solid px-2 hover:bg-black hover:text-white select-none">Text Copied!</p>
            )}
        </section>
    )
}
export default PopContent;