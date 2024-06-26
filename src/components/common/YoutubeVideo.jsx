import ReactPlayer from 'react-player/youtube';


const YoutubeVideo = ({ code = '' }) => {
    return (
        <ReactPlayer style={{ margin: '0 auto' }} url={`https://www.youtube.com/watch?v=${code}`} />
    )
}

export default YoutubeVideo;