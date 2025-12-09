const ProfileCard = () => {
    const styles = {
        backgroundColor: "lightgray",
        padding: "15px",
        borderRadius: "8px",
        color: "black"
    }

    return (
        <div style={styles}>
            <h1>Card styled using style object</h1>
            <p>This card is styled using a local style object</p>
        </div>
    )
}
export default ProfileCard;