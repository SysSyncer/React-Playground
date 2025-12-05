interface IAvatarProp {
    name: string;
    imageUrl: string;
}

const Avatar = ({name, imageUrl}: IAvatarProp) => {
    return (
        <div>
            <img src={imageUrl} alt={`${name}'s profile icon`} className="max-w-[50px] rounded-full"/>
        </div>
    )
}
export default Avatar;
