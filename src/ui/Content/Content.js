import '../Content/Content.css'


const Content =  (props) => {
    const info = props.info
  return (
    <div className="content-container">
        <div className='contentPic'>
            <img alt='some' src={info.pic}/>
        </div>
        <div className='content-info' >
            <h2 className='content-title'>{info.dreaming}</h2>
            <p className='additional'>{info.additional}</p>
            <div className='user-about'>
            <img alt='some' src='../demopic/ii.png' width='41px' />
            <div className='userinfo'>
                <p>{info.name}</p>
                <p>22 July 20176 min read</p>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Content