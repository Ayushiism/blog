import React, {useState} from 'react'
import './Content.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Sally from "./sally.png"
// import Sally from "../../assets/sally.png"
 

function Index() {
    const [topic,setTopic] = useState({
        heading : "This way is wrong about UI Design",
        discription : "In the industrial design field of human–computer interaction, a user interface (UI) is the space where interactions between humans and machines occur. The goal of this interaction is to allow effective operation and control of the machine from the human end, while the machine simultaneously feeds back information that aids the operators' decision-making process. Examples of this broad concept of user interfaces include the interactive aspects of computer operating systems, hand tools, heavy machinery operator controls and process controls. The design considerations applicable when creating user interfaces are related to, or involve such disciplines as, ergonomics and psychology.",
        twitter : 'https://twitter.com/',
        linkedin : 'https://in.linkedin.com/',
        medium : 'https://medium.com/',
        img : 'https://s3-alpha-sig.figma.com/img/26af/da24/a87cf1ec195a5ed7919714c610a46bb4?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ChiH5LgD~XQu58hAeApUx1cbdPFhFPLnPqDbyepytV3cw9R1h0JFLfGg5V7CUxQrz70iX9QVzlrZorUeHT7bR~9EDIUIxIdOHMZxTvx9FqQmce8FdAJVoPh23Zu3vLb8b6VoKzex66nwjP07tuG3u9AhdTh6E4kKdOSDUhQgjpkSidIgTbzrlUjJLmMM1K1ooHc59jKjLHZBzOGca3oBmvNIsqlkt9nDZZiJiwqxwsksZlIsMeHuXn1WmhCimzQXywBvmb473jnPCKJeAnEXfkvsU0y2CH8T9jWEEXeWZuvmrHV1kPXwGlhvIO0zlLOi8J6vwfeOZtlojWsrMMba1Q__',
        paraHeading1 : "BLOG DETAILS H1",
        paraHeading2 : "BLOG DETAILS H2",
        paragraph : "For on-premises environments, Active Directory running on Windows Server provides an identity and access management service that's managed by your organization. Microsoft Entra ID is Microsoft's cloud-based identity and access management service. With Microsoft Entra ID, you control the identity accounts, but Microsoft ensures that the service is available globally. If you've worked with Active Directory, Microsoft Entra ID will be familiar to you"
    })
 
    const data = Object.keys(topic);
  return (
    <div>
        <h3 className='blogPosts'>Blog Posts</h3>
        <div className='container'>
        <div className='sub-container'>
        <div>
        <div className='head'>
        {
            data.map((key)=>{
                if(key == "heading"){
                    return <h4 className='heading'>{topic[key]}</h4>
                }
            })
        }
        </div>
        <div className='discription'>
        {
            data.map((key)=>{
                if(key == "discription"){
                    return <div className='para'>{topic[key]}</div>
                }
            })
        }
        </div>
        <div className='buttonClass'>
        {
            data.map((key)=>{
                if(key == 'linkedin'|| key == 'twitter' || key == 'medium'){
 
                    return(
                    <div className='button'>
                        <button className={key}><a href={topic[key]} style={{textDecoration: 'none', color:'white'}}>{key}</a></button>
                    </div>)
                }
            })
        }
        </div>
        </div>
        <div className='box'>
        <div className='logoPic'>
                <img src={Sally} alt="" />
            </div>
        </div>
        </div>
        <div>
        <Zoom>
        {
            data.map((key)=>{
                if(key == "img"){
                    return <img src={topic[key]} className='img' width={500}></img>
                }
            })
        }
        </Zoom>
        </div>
        <div className='paraHeading'>
        {
            data.map((key)=>{
                if(key == "paraHeading1"){
                    return <h4 className=''>{topic[key]}</h4>
                }
            })
        }
        </div>
        <div className='parag'>
        {
            data.map((key)=>{
                if(key == "paragraph"){
                    return  <div className='para'>{topic[key]}</div>
                }
            })
        }
        </div>
        <div className='paraHeading'>
        {
            data.map((key)=>{
                if(key == "paraHeading2"){
                    return <h4 className=''>{topic[key]}</h4>
                }
            })
        }
        </div>
        <div className='parag'>
        {
            data.map((key)=>{
                if(key == "paragraph"){
                    return  <div className='para'>{topic[key]}</div>
                }
            })
        }
        </div>
        </div>
    </div>
  )
}
 
export default Index