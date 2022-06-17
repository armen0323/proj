

import '../Blok/Blok.css'
import Card from "../../ui/Card";
import Content from "../../ui/Content/Content";
import '../../ui/Content/Content.css';

function Blok(){
    let usersArray = [
        {
            id: 1,
            name:'Steve',
            pic: './demopic/1.jpg',
            dreaming:"We're living some strange times",
            additional:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },{
            id: 2,
            name:'Jane',
            pic: './demopic/2.jpg',
            dreaming:"Dreaming of Las Vegas Crazyness",
            additional:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
          { 
                id: 3,
                name:'Mary',
                pic: './demopic/3.jpg',
                dreaming:"The beauty of this world is in your heart",
                additional:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
          },
        {
            id: 4,
            name:'Sal',
            pic: './demopic/4.jpg',
            dreaming:"San Francisco at its best view in all seasons",
            additional:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        }
    ];

    let stories = [
        {   
            id:5,
            name:'Sal',
            pic:'./demopic/5.jpg',
            dreaming:"Autumn doesn't have to be nostalgic, you know?",
            additional:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'



        },
        {   
            id:6,
            name:'Sal',
            pic:'./demopic/6.jpg',
            dreaming:"Little red dress and a perfect summer",
            additional:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'



        },  {   
            id:7,
            name:'Sal',
            pic:'./demopic/7.jpg',
            dreaming:"10 Things you should know about choosing your house",
            additional:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'



        },  {   
            id:8,
            name:'Sal',
            pic:'./demopic/8.jpg',
            dreaming:"Best galleries in the world with photos",
            additional:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'



        },  {   
            id:9,
            name:'Sal',
            pic:'./demopic/9.jpg',
            dreaming:"Thinking outside the box can help you prosper",
            additional:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'



        },  {   
            id:10,
            name:'Sal',
            pic:'./demopic/10.jpg',
            dreaming:"Visiting the world means learning cultures",
            additional:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'



        }
    ]



    return(
        <div className="blok">
            <div className="title">
                <h2 className="h2">Mediumish</h2>
                <p className="boot">Bootstrap theme, medium style, simply perfect for bloggers</p>
                <p className="p3">Featured</p>

            </div>
        <div className="users">
            {usersArray.map(user =><Card key={user.id} user={user}/> )}
             
         
             </div>
             <span className="Stories">All Stories</span>
             <div className="All-Stories">
             {stories.map(item =><Content key={item.id} info={item}/>)}
             </div>
            

        </div>
    )
}
export default Blok