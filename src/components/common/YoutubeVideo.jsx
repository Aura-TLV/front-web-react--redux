
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const YoutubeVideo = ({ code, ratio = '16x9' }) => {
    return (
        <div className={`ratio ratio-${ratio}`}>
            <LiteYouTubeEmbed
                id={`${code}`}
                title={`yt-${code}`}
                poster="maxresdefault"
            />
        </div>
    )
}

export default YoutubeVideo