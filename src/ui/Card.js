import './Card.css'
const Card =  (props) => {
    const user = props.user
  return (
    <div className="card-container">
        <div  className="userimg">
                             < img src={user.pic}  alt="pic"/>
                        </div>
                        <div className="cardinfo">
                            <div>
                                <h2 className="cardtitle">{user.dreaming}</h2>
                                <p className='additional'>{user.additional}</p>
                            </div>
                            <div className='user-about'>
                                <img alt='some' src='../demopic/ii.png' width='41px' />
                                <div className="userinfo"> 
                                    <p> {user.name} </p>
                                    <p>22 July 20176 min read</p>
                                </div>
                            </div>
                            
                        </div>
    </div>
  )
}

export default Card