import ReactPlayer from 'react-player/youtube';

const MyVideo = () =>{
    return(
        <div>
            <h2>React Player example</h2>
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=_YJ0eJjVuWc' 
                playing= {false}
                volume= {0.5}    
            />
        </div>
    )
}
export default MyVideo;