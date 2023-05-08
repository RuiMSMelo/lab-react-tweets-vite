export default function User(user) {
    return (
            <span className='user'>
                <span className='name'> {user.user.name} </span>
                <span className='handle'>@ {user.user.handle}</span>
            </span>
    )
 
}